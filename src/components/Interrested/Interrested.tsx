import './Interrested.css'
import '../../utils/styles.css'
import arrow_down from '/src/assets/icons/arrow-down.svg'
import zap from '/src/assets/icons/zap.svg'

const Interrested = () => {
  return (
    <section className='interrested | flex section-spacing'>
      <h2 className='fs-h3 text-white'>Está interessado?</h2>
      <p className='fs-body fw-semi-bold text-white'>
        Para esclarecer dúvidas, discutir suas necessidades específicas ou dar o
        primeiro passo em direção ao sucesso financeiro, preencha o formulário
        abaixo para nos enviar um email, ou, entre em contato diretamente pelo
        WhatsApp.
      </p>
      <div className='button-container | flex'>
        <button className='formButton | flex text-white fs-title fw-bold'>
          Preencha o formulário
          <img src={arrow_down} alt="seta para baixo" />
        </button>
        <button className='zapButton | flex text-white fs-title fw-bold'>
          Fale conosco
          <img src={zap} alt="ícone de telefone dentro de um balão" />
        </button>
      </div>
    </section>
  )
}

export default Interrested
