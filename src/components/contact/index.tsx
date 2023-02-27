import './style.scss';

const contactImage = require('../../assets/images/contact-image.png')

export function Contact() {
    return (
        <div className="contact container" id='contato'>
            <h2 className='fw-bold'>
            Nos envie uma <br />
            mensagem estamos <br />
            esperando por você
            </h2>
            <div className='mt-5 form-container d-flex gap-5'>
                <img src={contactImage} alt="cat-with-a-phone" />
                <div className="form-contact">
                    <form action="" className='d-flex flex-column gap-3'>
                        <div className='input-box d-flex gap-3'>
                            <input type="text" placeholder='Nome' />
                            <input type="email" placeholder='E-mail' />
                        </div>
                        <input type="text" placeholder='Assunto' />
                        <textarea placeholder='Mensagem'></textarea>
                        <button className='text-light fw-bold'>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}