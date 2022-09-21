import React from 'react'
import Head from 'next/head'

const AppHead: React.FC<{ title: string }> = ({ title }) => {
    return (
        <Head>
            <title>{title} - Cólegio Papa Mike</title>
        </Head>
    )
}

export default AppHead
