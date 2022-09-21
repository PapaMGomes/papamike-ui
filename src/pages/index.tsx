import React from 'react'
import Logo from '@/assets/images/logo.png'
import AppHead from '@/components/common/app-head'
import { Container, Image, Title } from '@/styles/pages/home'

const Home: React.FC = () => {
    return (
        <>
            <AppHead title="Home" />

            <Container>
                <Image src={Logo} alt="logo" />
                <Title>Bem vindo</Title>
            </Container>
        </>
    )
}

export default Home
