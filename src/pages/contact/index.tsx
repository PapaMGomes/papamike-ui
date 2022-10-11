import React from 'react'
import AppHead from '@/components/common/app-head'
import ContactForm from '@/components/contact/form'
import ContactDetails from '@/components/contact/details'

const Contact: React.FC = () => {
    return (
        <>
            <AppHead title="Contato" />

            <ContactForm />
            <ContactDetails />
        </>
    )
}

export default Contact
