import styled from "styled-components/native";

export const Screen = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`

export const Header = styled.View`
    margin-top: 64px;
    padding: 0px 20px;
`

export const LocationContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-bottom: 27px;
`

export const LocationTitle = styled.Text`
    font-size: 14px;
    margin: 0px 8px;
    color: #292D32;
    font-family: 'OpenSans-SemiBold';
`

export const SubTitle = styled.Text`
    font-size: 18px;
    color: #292D32;
    font-family: 'OpenSans-Bold';
    margin-bottom: 24px;
    margin-top: 48px;
`
