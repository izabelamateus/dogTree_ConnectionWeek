import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import {
    LinearGradient,
    Container,
    LogoutButton,
    LogoutButtonIcon,
    Avatar,
    UserName,
    Bio,
    NewLinkButton,
    NewLinkButtonText,
    LinksContainer,
    Link,
    Title
} from './styles';

function Home(){
    const navigation = useNavigation();
    return(
        <LinearGradient colors={["#16043b", "#120330", "#0f0327"]}>
            <Container>
                <LogoutButton>
                    <LogoutButtonIcon />
                </LogoutButton>
                <Avatar source={{uri: "https://github.com/izabelamateus.png"}}/>
                <UserName>Luis Filipe</UserName>
                <Bio>Founder @dogcode.dev</Bio>
                <NewLinkButton onPress={() => navigation.navigate('NewLink')}>
                    <NewLinkButtonText>Novo Link</NewLinkButtonText>
                </NewLinkButton>
                <LinksContainer>
                    {[0,1,2]?.map(link => (
                        <Link key={link} onPress={() => {}}>
                            <Title> Link {link}</Title>
                        </Link>
                    ))}
                </LinksContainer>
            </Container>
        </LinearGradient>
    )
}
export default Home;