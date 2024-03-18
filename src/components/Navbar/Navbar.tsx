import '../../utils/styles.css'
import './Navbar.css'
import logo from '/precminas.svg'
import phone from '/src/assets/phone.svg'
import { useState } from 'react'

const Navbar = () => {

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleNavMenuClick = () => {
    if (!isNavMenuOpen) {
      return (setIsNavMenuOpen(true), setIsExpanded(true))
    }
    setIsNavMenuOpen(false)
    setIsExpanded(false)
  }

  return (
    <header className='flex'>
      <div className='header-logo flex'>
        <img src={logo} alt='três letras p juntas, formando uma caixa' />
        <span className='fw-bold text-white fs-title'>PRECMINAS</span>
      </div>

      <nav>
        <ul data-visible={isNavMenuOpen} id='primary-navigation' className='primary-nav-itens flex'>
          <li>
            <a className='link text-white fw-bold fs-title' href='#início'>
              Início
            </a>
          </li>
          <li>
            <a className='link text-white fw-bold fs-title' href='#sobre'>
              Sobre
            </a>
          </li>
          <li>
            <a className='link text-white fw-bold fs-title' href='#contato'>
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <button onClick={handleNavMenuClick} className='mobile-nav-toggle' aria-controls='primary-navigation' aria-expanded={isExpanded}><span className='mobile-nav-toggle sr-only'>Menu</span></button>
      <button className='ligueButton flex text-white fs-title fw-bold'>
        Ligue agora
        <img src={phone} alt='ícone de telefone' />
      </button>
    </header>
  )
}

export default Navbar
