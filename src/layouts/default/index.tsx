import React from 'react'
import FooterDefault from './footer'
import HeaderDefault from './header'
import WhatsappButton from './whatsapp-button'

interface LayoutInterface {
    children: React.ReactNode
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
    return (
        <>
            <HeaderDefault />
            {children}
            <WhatsappButton />
            <FooterDefault />
        </>
    )
}

export default Layout
