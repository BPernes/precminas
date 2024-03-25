import { useContext } from 'react'
import './Snackbar.css'
import SnackbarContext from '../../contexts/SnackbarContextProvider/SnackbarContextProvider'

interface SnackbarProps {
  type: 'success' | 'error'
}

const Snackbar = ({ type }: SnackbarProps) => {
  const snackbarContext = useContext(SnackbarContext)

  return (
    <div
      className={`${type === 'success' ? 'snackbar-container-success' : 'snackbar-container-error'}`}
    >
      <div className='snackbar-label'>
        {type === 'success'
          ? 'Email enviado com sucesso!'
          : 'Erro ao enviar o email.'}
      </div>
      <div onClick={snackbarContext.onClose} className='snackbar-dismiss'>
        &times;
      </div>
    </div>
  )
}

export default Snackbar
