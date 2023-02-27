import './style.scss';
import { useState, useEffect } from 'react';
import { FaPaw, FaBars } from 'react-icons/fa';

export function Header() {
    const [menu, setMenu] = useState(false);
    const [menuFixed, setMenuFixed] = useState(false);
    
    function handleOpenMenu() {
        setMenu(true);
    }

    function handleCloseMenu() {
        setMenu(false);
    }

    useEffect(() => {
        const navItem = document.querySelectorAll("nav ul li a");

        if(navItem) {
            navItem.forEach(item => {
                item.addEventListener('click', handleCloseMenu);
            })
        }
    }, [menu]);

    useEffect(() => {
        function handleScroll() {
          // faça algo quando o usuário rolar a página
            if(window.scrollY > 0) {
                setMenuFixed(true);
            } else {
                setMenuFixed(false);
            }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      }, []);

    return (
        <div className='header' id='inicio'>
            <header className={menuFixed ? "sticky" : ''}>
                <div className="logo d-flex gap-2 align-items-center">
                    <h1 className='fw-bold h2 mb-0'>PetShop</h1>
                    <FaPaw fontSize={30} />
                </div>
                <FaBars onClick={handleOpenMenu} className='icon' fontSize={30} />
            </header>

           {menu && (
             <nav className='navbar d-flex justify-content-center align-items-center'>
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#plano">Plano</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
             </nav>
           )}
        </div>
    )
}