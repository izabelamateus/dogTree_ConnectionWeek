import React from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import {
    LinearGradient,
    Container,
    Input,
    NewLinkButton,
    NewLinkButtonText
} from './styles';

function NewLink(){
    return(
        <LinearGradient colors={["#16043b", "#120330", "#0f0327"]}>
            <ScreenHeader title="Novo Link"/>
            <Container>
                <Input 
                    placeholder="Nome"
                    keyboardAppearance='dark'
                />
                <Input 
                    placeholder="URL"
                    keyboardAppearance='dark'
                    />
                <NewLinkButton onPress={() => {}} >
                    <NewLinkButtonText>Salvar</NewLinkButtonText>
                </NewLinkButton>
            </Container>
        </LinearGradient>
    )
}

export default NewLink;