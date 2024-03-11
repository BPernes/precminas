import './Navbar.css'
import logo from '../../../public/precminas.svg'
import phone from '/src/assets/phone.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logoContainer'>
        <img src={logo} alt='três letras p juntas formando uma caixa' />
        <span>PRECMINAS</span>
      </div>

      <div className='linkContainer'>
        <a className='link' href='#início'>
          Início
        </a>
        <a className='link' href='#sobre'>
          Sobre
        </a>
        <a className='link' href='#contato'>
          Contato
        </a>
      </div>

      <button className='ligueAgora'>
        Ligue agora
        <img src={phone} alt='ícone de telefone' />
      </button>
    </nav>
  )
}

export default Navbar
