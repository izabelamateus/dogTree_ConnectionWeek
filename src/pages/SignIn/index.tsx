import React from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import {
    LinearGradient,
    Container,
    Input,
    SignInButton,
    SignInButtonText, 
    AppName
} from './styles';

function SignIn(){
    return(
        <LinearGradient colors={["#16043b", "#120330", "#0f0327"]}>
            <Container>
                <AppName>dogtree</AppName>
                <Input 
                    placeholder="Usuário"
                    keyboardAppearance='dark'
                />
                <SignInButton onPress={() => {}} >
                    <SignInButtonText>Entrar</SignInButtonText>
                </SignInButton>
            </Container>
        </LinearGradient>
    )
}

export default SignIn;