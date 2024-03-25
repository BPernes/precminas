import './Contact.css'
import ContactForm from '../ContactForm/ContactForm'

const Contact = () => {
  return (
    <section id='contato' className='contact-section | section-spacing'>
      <h2 className='fs-h3 text-white'>Contato</h2>
      <p className='fs-body fs-title text-white'>
        Se você está pronto para explorar o vasto mundo das oportunidades, entre
        em contato conosco. Nossa equipe especializada está aqui para responder
        às suas perguntas, entender suas necessidades e guiar você.
      </p>
      <ContactForm />
    </section>
  )
}

export default Contact
