import './navbar.css' 
import CartWidget from './Cartwidget/CartWidget'

const navbar = () => {

    const src = 'https://randomuser.me/api/portraits/lego/2.jpg'

    return(
        <div className='navbar'>
            <img src={src} alt='Avatar' className='logo' style={{height:'80px'}}/>
            <button className='boton'> Libros Físicos </button>
            <button className='boton'> Líbros Electrónicos </button>
            <button className='boton'> Accesorios </button>
            <CartWidget />
        </div>
    )
}

export default navbar