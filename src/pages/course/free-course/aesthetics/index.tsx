import React from 'react'
import AppHead from '@/components/common/app-head'
import { AppContainer } from '@/styles/css/ts/components'
import { WhatsAppService } from '@/service/_whatsapp.service'
import { IFreeCourse } from '@/interfaces/free-course.interface'
import CourseCardList from '@/components/course/course-card-list'

import BbLips from '@/assets/images/free-courses/aesthetics/bb-lips.jpg'
import Skincare from '@/assets/images/free-courses/aesthetics/skincare.jpg'
import HydraLips from '@/assets/images/free-courses/aesthetics/hydra-lips.jpg'
import BodyDrainage from '@/assets/images/free-courses/aesthetics/body-drainage.jpg'
import FaceDrainage from '@/assets/images/free-courses/aesthetics/face-drainage.png'

const Aesthetics: React.FC = () => {
    const whatsAppService = new WhatsAppService()

    const items: IFreeCourse[] = [
        { image: Skincare, title: 'Limpeza de Pele' },
        { image: HydraLips, title: 'HydraGloss & HydraLips' },
        { image: BodyDrainage, title: 'Drenagem Corporal' },
        { image: FaceDrainage, title: 'Drenagem Facial' },
        { image: BbLips, title: 'BB Glow & BB Lips' }
    ]

    const onSelect = (course: IFreeCourse) => {
        const num = '5511940274154'
        const msg = `Olá! Gostaria de saber mais sobre o curso livre de *${course.title}*`

        whatsAppService.sendMessage(num, msg)
    }

    return (
        <>
            <AppHead title="Cursos de Estética" />

            <AppContainer paddingTop screen>
                <CourseCardList
                    items={items}
                    onSelect={onSelect}
                    title="Cursos de Estética"
                />
            </AppContainer>
        </>
    )
}

export default Aesthetics
