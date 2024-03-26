import './Contact.css'
import ContactForm from '../ContactForm/ContactForm'
import IconList from '../ui/IconList/IconList'
import email from '../../assets/icons/email.svg'
import zap from '../../assets/icons/zap.svg'
import insta from '../../assets/icons/insta.svg'
import map_pin from '../../assets/icons/map-pin.svg'

const Contact = () => {
  const contactInfo = [
    {
      title: 'contato@precminas.com.br',
      iconPath: email,
    },
    {
      title: '+55 (31) 99103-5736',
      iconPath: zap,
    },
    {
      title: '@precminas',
      iconPath: insta,
    },
    {
      title: 'Rua Timbiras, 1940 - Sala 1714 - Lourdes - Belo Horizonte',
      iconPath: map_pin,
    },
  ]

  return (
    <section id='contato' className='contact-section | section-spacing'>
      <h2 className='fs-h3 text-white'>Contato</h2>
      <p className='fs-body fs-title text-white'>
        Se você está pronto para explorar o vasto mundo das oportunidades, entre
        em contato conosco. Nossa equipe especializada está aqui para responder
        às suas perguntas, entender suas necessidades e guiar você.
      </p>
      <ContactForm />
      <IconList items={contactInfo} orientation='row'></IconList>
    </section>
  )
}

export default Contact
