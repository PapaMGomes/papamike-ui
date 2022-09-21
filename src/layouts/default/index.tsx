import React from 'react'
import FooterDefault from './footer'
import HeaderDefault from './header'

interface LayoutInterface {
    children: React.ReactNode
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
    return (
        <>
            <HeaderDefault />
            {children}
            <FooterDefault />
        </>
    )
}

export default Layout
