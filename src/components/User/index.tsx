import React from 'react';

import {
    Container,
    UserImage
} from './styles';

interface Props{
    source: string;
}

export function User({ source } : Props){
   return (
      <Container>
          <UserImage source={{
              uri: source
          }}/>
      </Container>
 );
}