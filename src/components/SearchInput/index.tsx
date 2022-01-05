import React from "react";
import Icon from "react-native-vector-icons/Feather";

import { Container, TextInput } from "./styles";

export function SearchInput() {
    return(
        <Container>
            <Icon name="search" size={24} color="rgba(41, 45, 50, .60)" />
            <TextInput
             placeholder="Pesquise por restaurantes, pratos..." 
             placeholderTextColor="rgba(41, 45, 50, .60)" 
             />
        </Container>
    )
}