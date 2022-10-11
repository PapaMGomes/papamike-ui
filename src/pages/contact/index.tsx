import React from 'react'
import AppHead from '@/components/common/app-head'
import ContactForm from '@/components/contact/form'

const Contact: React.FC = () => {
    return (
        <>
            <AppHead title="Contato" />

            <ContactForm />
        </>
    )
}

export default Contact
