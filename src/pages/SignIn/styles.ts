import styled from 'styled-components/native';
import { LinearGradient as DefaultLinearGradient } from 'expo-linear-gradient';
import {  MaterialIcons} from '@expo/vector-icons';
import { initialWindowMetrics } from 'react-native-safe-area-context';


export const LinearGradient = styled(DefaultLinearGradient)`
    flex:1;
`;

export const Container = styled.View`
    flex: 1;
    padding: 0 32px;
    align-items: center;
    justify-content: center;
`;

export const AppName = styled.Text`
    font-size: 36px;
    font-family: "Nunito_600SemiBold";
    color:#00e7c0 ;
    text-align: center;
    margin-bottom: 64px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#b2b2b2'
})`
    width: 100%;
    height: 48px;
    justify-content: center;
    background-color: "rgba(48, 9, 125, 0.8)";
    color: #fff;
    font-size: 18px;
    font-family: "Roboto_400Regular";
    border-radius: 4px;
    margin-bottom: 16px;
    padding: 0 16px;
`;

export const SignInButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})`
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    background-color: #00c9a7;
    margin-top: 32px;
`;

export const SignInButtonText = styled.Text`
    font-size: 18px;
    font-family: "Roboto_500Medium";
    color: #0e0326;
    text-align: center;
`;