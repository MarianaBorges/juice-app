import React, {
    createContext, 
    useContext, 
    useState,
    useEffect
} from 'react';

import { Alert } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import api from '../services/api';

interface CartProviderProps{
    children: React.ReactNode;
}

interface JuiceProps{
    id: string;
    image: string;
    name: string;
    details: string;
    price: number;
    priceTotal?:number;
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
    modifiesJuices: (data: JuiceProps)=>void;
    newRequestJuice:()=>void;
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
            setJuices(prevJuices => prevJuices.map(j => {
                if (j.id === juice.id){
                    j.id = juice.id;
                    j.image = isJuice.image;
                    j.name = isJuice.name,
                    j.details = isJuice.details,
                    j.price = isJuice.price,
                    j.priceTotal = Number(isJuice.priceTotal) + Number(isJuice.price),
                    j.quant= isJuice.quant! + 1;
                }
                return j;
            }));

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

    function modifiesJuices(data:JuiceProps){
        if( data.quant !== undefined && data.quant <= 0 ){      

            setJuices(prevJuices => prevJuices.filter(j=>j.id !== data.id))
      
        }else if( data.quant !== undefined && data.quant >= 1){  
            setJuices(prevJuices => prevJuices.map(j => {
                if (j.id === data.id){
                    j = data;
                }
                return j;
            }));
        }
    }

    function getTotal(){
        const newTotalJuices = juices.reduce((a, j) => {
            a = a + Number(j.priceTotal);
            return a;
        },0);
        setTotal(newTotalJuices);
    }

    function newRequestJuice(){

        const newRequest = {
            id: uuidv4(),
            juices,
            user
        }
        try{
            api.post('/juices_cart', newRequest);
            setJuices([]);
            setTotal(0);
            Alert.alert('Eeeeeba! :)','Seu pedido foi enviada com sucesso!!');
        }catch(err){
            Alert.alert('Opss!','Ocorreu um problema e não foi possível enviar o seu pedido :( !!');
        }
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
            modifiesJuices,
            newRequestJuice
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