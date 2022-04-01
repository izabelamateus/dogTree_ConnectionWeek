import styled from 'styled-components/native';
import { LinearGradient as DefaultLinearGradient } from 'expo-linear-gradient';
import {  MaterialIcons} from '@expo/vector-icons';
import { initialWindowMetrics } from 'react-native-safe-area-context';


export const LinearGradient = styled(DefaultLinearGradient)`
    flex:1;
`;

export const Container = styled.ScrollView.attrs({
    contentContainerStyle:{
        paddingTop: initialWindowMetrics.insets.top + 16,
        alignItems: "center",
        flex: 1,

    }
})`
    flex: 1;
    padding: 0 32px;
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

export const NewLinkButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})`
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    position: absolute;
    bottom: ${initialWindowMetrics.insets.bottom + 32}px;
    background-color: #00c9a7;
`;

export const NewLinkButtonText = styled.Text`
    font-size: 18px;
    font-family: "Roboto_500Medium";
    color: #0e0326;
    text-align: center;
`;