import { useContext, useRef, SyntheticEvent, useState } from 'react'
import { InputRefContext } from '../../contexts/InputRefProvider/InputRefProvider'
import emailjs from '@emailjs/browser'
import loading from '../../assets/icons/loading.svg'
import './ContactForm.css'
import SnackbarContext from '../../contexts/SnackbarContextProvider/SnackbarContextProvider'
import Snackbar from '../Snackbar/Snackbar'

const emailVariables = {
  serviceId: import.meta.env.VITE_SERVICE_ID,
  templateId: import.meta.env.VITE_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
}

const ContactForm = () => {
  const inputRef = useContext(InputRefContext)
  const snackbarContext = useContext(SnackbarContext)
  const form = useRef<HTMLFormElement>(null)
  const [isFormDisabled, setIsFormDisabled] = useState(false)
  const [snackbarType, setSnackbarType] = useState('')

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault()
    setIsFormDisabled(true)

    if (form.current) {
      emailjs
        .sendForm(
          emailVariables.serviceId,
          emailVariables.templateId,
          form.current,
          emailVariables.publicKey,
        )
        .then(
          () => {
            console.log('SUCCESS!')
            setSnackbarType('success')
            snackbarContext.displayMsg()
            setIsFormDisabled(false)
          },
          (error) => {
            console.log('FAILED...', error.text)
            setSnackbarType('error')
            snackbarContext.displayMsg()
            setIsFormDisabled(false)
          },
        )
    }
    if (e.target) {
      ;(e.target as HTMLFormElement).reset()
    }
  }

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      action='submit'
      method='post'
      className='contact-form-wrapper | flex'
    >
      <div className='form-input'>
        <label className='fs-title fw-bold text-white' htmlFor='nome'>
          Seu nome
        </label>
        <input
          disabled={isFormDisabled}
          ref={inputRef}
          className='fs-body'
          type='text'
          name='nome'
          id='nome'
          placeholder={isFormDisabled ? '' : 'John Doe'}
          required
        />
      </div>
      <div className='form-input'>
        <label className='fs-title fw-bold text-white' htmlFor='email'>
          Email
        </label>
        <input
          disabled={isFormDisabled}
          className='fs-body'
          type='text'
          name='email'
          id='email'
          placeholder={isFormDisabled ? '' : 'johndoe@gmail.com'}
          required
        />
      </div>
      <div className='form-input'>
        <label className='fs-title fw-bold text-white' htmlFor='assunto'>
          Assunto
        </label>
        <input
          disabled={isFormDisabled}
          className='fs-body'
          type='text'
          name='assunto'
          id='assunto'
          placeholder={isFormDisabled ? '' : 'Orçamento do precatório'}
          required
        />
      </div>
      <div className='form-input'>
        <label className='fs-title fw-bold text-white' htmlFor='mensagem'>
          Mensagem
        </label>
        <textarea
          disabled={isFormDisabled}
          className='fs-body'
          name='mensagem'
          id='mensagem'
          placeholder={isFormDisabled ? '' : 'Como podemos te ajudar?'}
          cols={30}
          rows={5}
        ></textarea>
        <button
          disabled={isFormDisabled}
          className='form-button | fs-title fw-bold text-white flex'
          value='send'
          type='submit'
        >
          {isFormDisabled ? (
            <img src={loading} alt='Círculo girando, indicando carregamento' />
          ) : (
            'Enviar'
          )}
        </button>
      </div>
      {snackbarContext.isDisplayed &&
        (snackbarType === 'success' ? (
          <Snackbar type='success' />
        ) : (
          <Snackbar type='error' />
        ))}
    </form>
  )
}

export default ContactForm
