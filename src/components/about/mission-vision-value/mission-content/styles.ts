import styled from 'styled-components'
import { fadeIn } from '@/styles/animation'
import { Title as DefaultTitle, Text as DefaultText } from '../styles'

export const Text = DefaultText
export const Title = DefaultTitle

export const Container = styled.section.attrs(fadeIn.default)``
