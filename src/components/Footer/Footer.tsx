import './Footer.css'
import IconList from '../ui/IconList/IconList'

import email from '../../assets/icons/email.svg'
import zap from '../../assets/icons/zap.svg'
import insta from '../../assets/icons/insta.svg'

const Footer = () => {

  const contactInfo = [
    {
      title: 'contato@precminas.com.br',
      iconPath: email,
    },
    {
      title: '+55 (31) 9103-5736',
      iconPath: zap,
    },
    {
      title: '@precminas',
      iconPath: insta,
    },
  ]

  return (
    <footer className='flex'>
      <p className='fw-semi-bold text-white'><span className='fw-semi-bold'>PRECMINAS</span> | 2024 © Todos os direitos reservados</p>
      <IconList items={contactInfo} orientation='row'></IconList>
    </footer>
  )
}

export default Footer
