import './Contact.css'
import IconList from '../ui/IconList/IconList'
import ContactForm from '../ContactForm/ContactForm'

import email from '../../assets/icons/email.svg'
import phone from '../../assets/icons/phone-call.svg'
import insta from '../../assets/icons/insta.svg'

const Contact = () => {
  const contactInfo = [
    {
      title: 'contato@precminas.com.br',
      iconPath: email,
    },
    {
      title: '+55 (31) 9103-5736',
      iconPath: phone,
    },
    {
      title: '@precminas',
      iconPath: insta,
    },
  ]

  return (
    <section className='contact-section'>
      <h2 className='fs-h3'>Contato</h2>
      <p className='fs-body'>
        Se você está pronto para explorar o vasto mundo das oportunidades, entre
        em contato conosco. Nossa equipe especializada está aqui para responder
        às suas perguntas, entender suas necessidades e guiar você.
      </p>
      <div className='contact-info'>
        <IconList items={contactInfo}></IconList>
      </div>
      <div className='contact-form'>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
