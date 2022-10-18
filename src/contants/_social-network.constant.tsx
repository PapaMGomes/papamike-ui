import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import InstagramLogo from '@/assets/images/instagram-logo.png'
import FacebookLogo from '@/assets/images/facebook-logo.png'
import LinkedinLogo from '@/assets/images/linkedin-logo.png'

export const SOCIAL_NETWORK_ITEMS = [
    {
        title: 'Instagram',
        logo: InstagramLogo,
        icon: <FaInstagram />,
        link: 'https://www.instagram.com/colegiopapamike/'
    },
    {
        title: 'Facebook',
        logo: FacebookLogo,
        icon: <FaFacebookF />,
        link: 'https://www.facebook.com/colegiopapamike'
    },
    {
        title: 'Linkedin',
        logo: LinkedinLogo,
        icon: <FaLinkedinIn />,
        link: 'https://www.linkedin.com/company/colegio-papa-mike/?originalSubdomain=br'
    }
]
