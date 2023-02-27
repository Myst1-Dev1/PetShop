import './style.scss';
import { FaPaw, FaInstagram, FaFacebookF, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export function Footer() {
    return (
        <div className='py-5 footer text-light'>
            <div className='footer-container px-5 mb-5 d-flex justify-content-between m-auto'>
                <div className='footer-info '>
                    <div className='d-flex align-items-center gap-2'>
                        <h2 className='fw-bold mb-0'>PetShop</h2>
                        <FaPaw fontSize={25} />
                    </div>
                    <p className='mt-1'>
                    Loren ipsum is simply dummy <br />
                    text of typeseting industry alway <br />
                    library of the pets
                    </p>
                    <div className="footer-icons d-flex align-items-center gap-2">
                        <FaInstagram className='icon' fontSize={25} />
                        <FaFacebookF className='icon' fontSize={25} />
                        <FaTwitter className='icon' fontSize={25} />
                    </div>
                </div>
                <div className="footer-contact ">
                    <h2 className='fw-bold'>Nosso contato</h2>
                    <div className='d-flex gap-2'>
                        <FaPhone fontSize={25} />
                        <p>(021) 45891-4558</p>
                    </div>
                    <div className='d-flex gap-2'>
                        <FaEnvelope fontSize={25} />
                        <p>mypetshop@gmail.com</p>
                    </div>
                </div>
                <div className="footer-adress ">
                    <h2 className='fw-bold'>Nosso endereço</h2>
                    <div className='d-flex gap-2'>
                        <FaMapMarkerAlt fontSize={25} />
                        <p>
                            Rua lorem ipsum silva <br />
                            quadra 500 lote 44
                        </p>
                    </div>
                </div>
                <div className="footer-menu ">
                    <h2 className="fw-bold">Menu</h2>
                    <h6>Gato</h6>
                    <h6>Cachorro</h6>
                    <h6>peixe</h6>
                    <h6>Passaro</h6>
                </div>
            </div>

            <div className="copyright d-flex justify-content-between align-items-center px-3">
                <p className='fw-bold'>&copy; 2023 todos os direitos reservados</p>
                <p className='fw-bold'>Desenvolvido por Myst1 Dev</p>
            </div>
        </div>
    )
}