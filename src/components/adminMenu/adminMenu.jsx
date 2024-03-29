import React, {useState} from 'react'
import './adminMenu.css'
import { BagFill, CardImage, Tag, Folder, BoxArrowRight, ChevronDoubleLeft } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

const AdminMenu = (props) => {
    const {current, change} = props
    const [menuState, setMenuState] = useState(true)
    const navigate = useNavigate();
    return (
        <div className="admin_menu">
            <nav className={menuState? 'menu menu_open': 'menu menu_close'}>
                <div className='menu_top_options'>
                <div onClick={() => setMenuState(!menuState)} className={menuState? 'menu_option button_open': 'menu_option button_close'}>
                    <ChevronDoubleLeft role="close or open"/>
                </div>
                <div className='menu_navigation'>
                    <div className={current === "Productos"? 'menu_option current':'menu_option'} onClick={()=>change('Productos')}>
                        <BagFill />
                        <h1>Productos</h1>
                    </div>
                    <div className={current === "Mas Vendidos"? 'menu_option current':'menu_option'} onClick={()=>change('Mas Vendidos')}>
                        <CardImage />
                        <h1>MasVendidos</h1>
                    </div>
                    <div className='menu_option' style={{visibility: 'hidden'}}>
                        <Tag />
                        <h1>Descuentos</h1>
                    </div>
                    <div className='menu_option' style={{visibility: 'hidden'}}>
                        <Folder />
                        <h1>Catalogo</h1>
                    </div>
                </div>
                </div>
                <div className='menu_option menu_exit_option' onClick={() => {
                navigate("/login", { replace: true });
              }}>
                    <BoxArrowRight />
                    <h1>Salir</h1>
                </div>
            </nav>


        </div>
    )
}

export default AdminMenu