import './Hero.css'
import arrow_right from '/src/assets/icons/arrow-right.svg'

const Hero = () => {
  return (
    <main className='hero-section'>
      <section className='hero-wrapper'>
        <div className='hero-text-container | flow'>
          <h1 className='fw-bold fs-main-header text-white'>Consultoria em direito creditório, seguros e investimentos</h1>
          <p className='fs-title text-white fw-semi-bold'>
            Conte conosco para oreferecer uma experiência descomplicada, guiando-o
            através do processo com a expertise que você merece
          </p>
          <button className='fs-title fw-bold text-white flex'>
            Vamos conversar
            <img src={arrow_right} />
          </button>
        </div>
      </section>
    </main>
  )
}

export default Hero
