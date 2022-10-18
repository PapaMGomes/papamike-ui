import React from 'react'
import AppHead from '@/components/common/app-head'
import { AppContainer } from '@/styles/css/ts/components'
import { WhatsAppService } from '@/service/_whatsapp.service'
import CourseCardList from '@/components/course/course-card-list'
import { IFreeCourse } from '@/interfaces/free-course.interface'

import BandAid from '@/assets/images/free-courses/nursing/band-aid.jpg'
import FirstAid from '@/assets/images/free-courses/nursing/first-aid.jpg'
import VenousPuncture from '@/assets/images/free-courses/nursing/venous-puncture.jpg'
import BloodCollection from '@/assets/images/free-courses/nursing/blood-collection.jpg'
import CalculAtemedicine from '@/assets/images/free-courses/nursing/calculate-medicine.jpg'
import { WHATSAPP_CONTACT_FREE_COURSE } from '@/config/constants/whatsapp.config'

const Nursing: React.FC = () => {
    const whatsAppService = new WhatsAppService()

    const items: IFreeCourse[] = [
        { image: BandAid, title: 'Feridas e Curativos' },
        { image: FirstAid, title: 'Primeiros Socorros' },
        { image: CalculAtemedicine, title: 'Cálculo de Medicamentos' },
        { image: VenousPuncture, title: 'Punção Venosa e Coleta' },
        { image: BloodCollection, title: 'Coleta de Sangue a Vácuo' }
    ]

    const onSelect = (course: IFreeCourse) => {
        const msg = `Olá! Gostaria de saber mais sobre o curso livre de ${course.title}`
        whatsAppService.sendMessage(WHATSAPP_CONTACT_FREE_COURSE, msg)
    }

    return (
        <>
            <AppHead title="Cursos de Enfermagem" />

            <AppContainer paddingTop screen>
                <CourseCardList
                    items={items}
                    onSelect={onSelect}
                    title="Cursos de Enfermagem"
                />
            </AppContainer>
        </>
    )
}

export default Nursing
