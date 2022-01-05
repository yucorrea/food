import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { SearchInput } from "../../components/SearchInput";

import { 
    Screen,
    Header,
    LocationContainer,
    LocationTitle,
    SubTitle,
 } from "./styles";

export function Dashboard() {

    const renderHeader = () => {
        return (
            <Header>
                <LocationContainer>
                    <Icon name="map-pin" size={24} color="rgba(1, 95, 109, .60)" />
                    <LocationTitle>São Paulo, SP</LocationTitle>
                    <Icon name="chevron-down" size={24} color="rgba(1, 95, 109, .60)" />
                </LocationContainer>

                <SearchInput />

                <SubTitle>Categorias</SubTitle>
            </Header>
        )
    }

    return (
        <Screen>
            {renderHeader()}
        </Screen>
    )
}