import React, {
    createContext, 
    useContext, 
    useState,
    useEffect
} from 'react';

interface CartProviderProps{
    children: React.ReactNode;
}

interface JuiceProps{
    id: string;
    image: string;
    name: string;
    details: string;
    price: number;
    priceTotal:number;
    quant?: number; 
}

interface User {
    "id": string;
    "name": string;
    "email": string;
}

interface CartContextData {
    user: User;
    juices: JuiceProps[];
    total: number;
    addNewJuice: (juice: JuiceProps)=> void;
    plusJuices: (data: JuiceProps)=>void;
}

const USER = {
    "id":"1",
    "name": "Maria da Silva",
    "email": "mariasilva@gmail.com"
}

const CartContext = createContext({} as CartContextData);

function CartProvider ({children}:CartProviderProps){

    const [total, setTotal] = useState(0);
    const [juices, setJuices] = useState<JuiceProps[]>([]);
    const [user, setUser] = useState(USER);


    function addNewJuice(juice: JuiceProps){

        const isJuice = juices.find( j => j.id === juice.id);

        if (!!isJuice){

            const newJuice = {
                id: isJuice.id,
                image: isJuice.image,
                name: isJuice.name,
                details: isJuice.details,
                price: isJuice.price,
                priceTotal: isJuice.priceTotal + isJuice.price,
                //quant: isJuice.quant + 1,
            }

        }else{
            const newJuice = {
                id: juice.id,
                image: juice.image,
                name: juice.name,
                details: juice.details,
                price: juice.price,
                priceTotal: juice.price,
                quant: 1,
            }
    
            setJuices( prevJuice => [...prevJuice, newJuice]);
        }
    }

    function plusJuices(data:JuiceProps){
        
        if( data.quant !== undefined && data.quant > 0){
            const newJuices = juices.map(j => {
                if (j.id === data.id){
                    j = data;
                }
                return j;
            });
            setJuices(newJuices);
        }else if( data.quant !== undefined && data.quant === 0 ){
            console.log('antes de apagar', data)
            const indice = juices.findIndex(i => i.id === data.id);
            const j = juices;
            j.splice(indice, 1);
            console.log('depois de apagar', j)
            setJuices(j); 
            console.log('tsejhh', juices)
        }
    }

    function getTotal(){
        const newTotalJuices = juices.reduce((a, j) => {
            a = a + Number(j.priceTotal);
            return a;
        },0);
        setTotal(newTotalJuices);
    }

    useEffect(()=>{
        getTotal();
    },[juices]);

    return (
        <CartContext.Provider value={{
            user,
            juices,
            total,
            addNewJuice,
            plusJuices
        }}>
            {children}
        </CartContext.Provider>
    )
}

function useCart(){
    const context = useContext(CartContext);
    return context;
}

export { CartProvider, useCart }