import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ViewStyle } from 'react-native';

import { Container, BackButton, BackButtonIcon, Title, Header } from './styles';

type Props = {
    title: string;
    style?: ViewStyle;
}

function ScreenHeader({ title, style }: Props) {
    const navigation = useNavigation();
    return (
        <Container style={style}>
            <Header>
                <BackButton onPress={() => navigation.goBack() }>
                    <BackButtonIcon />
                </BackButton>
                <Title>
                    {title}
                </Title>
            </Header>
        </Container>
    )
}

export default ScreenHeader;