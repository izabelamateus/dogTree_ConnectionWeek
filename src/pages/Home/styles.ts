import styled from 'styled-components/native';
import { LinearGradient as DefaultLinearGradient } from 'expo-linear-gradient';
import {  MaterialIcons} from '@expo/vector-icons';
import { initialWindowMetrics } from 'react-native-safe-area-context';


export const LinearGradient = styled(DefaultLinearGradient)`
    flex:1;
`;

export const Container = styled.ScrollView.attrs({
    contentContainerStyle:{
        paddingTop: initialWindowMetrics.insets.top,
        alignItems: "center",
        paddingLeft: 32,
        paddingRight: 32,
        paddingBotom: 32,

    }
})`
    flex: 1;
`;

export const LogoutButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    margin-top: 16px;
    margin-left: auto;
    margin-bottom: 16px;
`;

export const LogoutButtonIcon = styled(MaterialIcons).attrs({
    name: 'logout', 
    size: 30,
    color:'#fff'
})``;

export const Avatar = styled.Image`
    width: 128px;
    height: 128px;
    border-radius: 64px;
`;

export const UserName = styled.Text`
    font-size: 18px;
    font-family: "Roboto_500Medium";
    margin-top: 32px;
    color: #ccc;
    `;

export const Bio = styled.Text`
    font-family: "Roboto_400Regular";
    margin-top: 8px;
    color: #ccc;
`;

export const LinksContainer = styled.View`
    flex: 1;
    margin-top: 40px;
    width: 100%;
`;

export const Link = styled.TouchableOpacity.attrs({
    activeOpacity: 0.82
})`
    width: 100%;
    background-color: "rgba(48, 9, 125, 0.8)" ;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 16px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-family: "Roboto_500Medium";
    color: #fff;
    text-align: center;
`;

export const NewLinkButton = styled(Link)`
    margin-top: 32px;
    background-color: #00c9a7;
`;

export const NewLinkButtonText = styled(Title)`
    color: #0e0326;
`;