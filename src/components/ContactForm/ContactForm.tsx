import './ContactForm.css'

const ContactForm = () => {
  return (
    <form action='submit' method='post' className='contact-form-wrapper | flex'>
      <div className='form-input'>
        <label className='fs-title fw-bold text-white' htmlFor='nome'>Seu nome</label>
        <input
          className='fs-body'
          type='text'
          name='nome'
          id='nome'
          placeholder='John Doe'
          required
        />
      </div>
      <div className='form-input'>
        <label className='fs-title fw-bold text-white' htmlFor='email'>Email</label>
        <input
          className='fs-body'
          type='text'
          name='email'
          id='email'
          placeholder='johndoe@gmail.com'
          required
        />
      </div>
      <div className='form-input'>
        <label className='fs-title fw-bold text-white' htmlFor='assunto'>Assunto</label>
        <input
          className='fs-body'
          type='text'
          name='assunto'
          id='assunto'
          placeholder='Orçamento do precatório'
          required
        />
      </div>
      <div className='form-input'>
        <label className='fs-title fw-bold text-white' htmlFor='mensagem'>Mensagem</label>
        <textarea
          className='fs-body'
          name='mensagem'
          id='mensagem'
          placeholder='Como podemos te ajudar?'
          cols='30'
          rows='5'
        ></textarea>
        <button className='form-button | fs-title fw-bold text-white' type='submit'>Enviar</button>
      </div>
    </form>
  )
}

export default ContactForm
