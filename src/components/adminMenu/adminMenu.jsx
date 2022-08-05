import React, {useState} from 'react'
import './adminMenu.css'
import { BagFill, CardImage, Tag, Folder, BoxArrowRight, ChevronDoubleLeft } from 'react-bootstrap-icons'


const AdminMenu = () => {
    const [menuState, setMenuState] = useState(true)
    return (
        <div className="admin_menu">
            <nav className={menuState? 'menu menu_open': 'menu menu_close'}>
                <div className='menu_top_options'>
                <div onClick={() => setMenuState(!menuState)} className={menuState? 'menu_option button_open': 'menu_option button_close'}>
                    <ChevronDoubleLeft role="close or open"/>
                </div>
                <div className='menu_navigation'>
                    <div className='menu_option'>
                        <BagFill />
                        <h1>Productos</h1>
                    </div>
                    <div className='menu_option'>
                        <CardImage />
                        <h1>Imagenes</h1>
                    </div>
                    <div className='menu_option'>
                        <Tag />
                        <h1>Descuentos</h1>
                    </div>
                    <div className='menu_option'>
                        <Folder />
                        <h1>Catalogo</h1>
                    </div>
                </div>
                </div>
                <div className='menu_option menu_exit_option'>
                    <BoxArrowRight />
                    <h1>Salir</h1>
                </div>
            </nav>


        </div>
    )
}

export default AdminMenu