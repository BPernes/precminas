import './Hero.css'
import business_people from '/src/assets/images/business-people.png'
import arrow_right from '/src/assets/icons/arrow-right.svg'

const Hero = () => {
  return (
    <main className='hero-section'>
      <section className='hero-wrapper'>
        <div className='hero-text-container'>
          <h1 className='fw-bold fs-main-header text-black'>Consultoria em direito creditório, seguros e investimentos</h1>
          <p className='fs-title text-black'>
            Conte conosco para oreferecer uma experiência descomplicada, guiando-o
            através do processo com a expertise que você merece
          </p>
          <button className='fs-title fw-bold text-white flex'>
            Vamos conversar
            <img src={arrow_right} />
          </button>
        </div>
        <div className="image-wrapper">
          <img src={business_people} alt='três pessoas planejando em uma mesa' />
        </div>
      </section>
    </main>
  )
}

export default Hero
