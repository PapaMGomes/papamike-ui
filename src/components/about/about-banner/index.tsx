import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { addDays, format, isBefore } from 'date-fns'
import IntroductionBanner from './introduction-banner'
import MatriculationBanner from './matriculation-banner'
import Carousel, {
    OptionType,
    SlideContainer
} from '@/components/common/carousel'

const AboutBanner: React.FC = () => {
    const options: OptionType = {
        type: 'loop',
        gap: 10,
        arrows: false,
        autoplay: true,
        interval: 10000
    }

    const [currentMatriculation, setCurrentMatriculation] = useState({})
    const matriculationsDates = [
        '2022-10-09',
        '2022-10-22',
        '2022-10-29',
        '2022-11-05',
        '2022-11-19',
        '2022-11-26',
        '2022-12-10',
        '2022-12-17',
        '2023-01-14',
        '2023-01-21',
        '2023-01-28'
    ]

    useEffect(() => {
        getNextMatriculation()
    }, [])

    const getNextMatriculation = () => {
        const parseDate = (value: string) => addDays(new Date(value), 1)

        const filteredDates = matriculationsDates
            .filter(value => !isBefore(parseDate(value), new Date()))
            .map(value => format(parseDate(value), 'dd/MM/yyyy'))

        const [date] = filteredDates
        setCurrentMatriculation({
            date,
            address: ' Rua Minas Bogasian, 350'
        })
    }

    const data = [
        <IntroductionBanner />,
        <MatriculationBanner data={currentMatriculation} />
    ]

    return (
        <Container paddingTop>
            <Carousel padding="0" options={options}>
                {data.map((item, index) => (
                    <SlideContainer key={index}>{item}</SlideContainer>
                ))}
            </Carousel>
        </Container>
    )
}

export default AboutBanner
