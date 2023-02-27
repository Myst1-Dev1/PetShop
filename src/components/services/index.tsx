import './style.scss';

const earCleaning = require('../../assets/images/ear-cleaning.png')
const bathAndGroom = require('../../assets/images/bathAndGroom.png')
const vacination = require('../../assets/images/vacination.png')

export function Services() {
    return (
        <div className="services container" id='servicos'>
            <h2 className='fw-bold'>
            Nosso petShop oferece <br />
            ótimos serviços para <br />
            seus pets
            </h2>
            <div className='mt-5 service-container row m-auto'>
                <div className="service-box d-flex flex-column gap-2 col-md-4">
                    <img src={earCleaning} alt="service" />
                    <h5 className='fw-bold'>Limpeza de ouvido</h5>
                    <p>Lorem ipsum is simply dummy text 
                        of the library printing industry
                    </p>
                </div>
                <div className="service-box d-flex flex-column gap-2 col-md-4">
                    <img src={bathAndGroom} alt="service" />
                    <h5 className='fw-bold'>Banho e tosa</h5>
                    <p>Lorem ipsum is simply dummy text
                        of the library printing industry
                    </p>
                </div>
                <div className="service-box d-flex flex-column gap-2 col-md-4">
                    <img src={vacination} alt="service" />
                    <h5 className='fw-bold'>Vacinação</h5>
                    <p>Lorem ipsum is simply dummy text
                        of the library printing industry
                    </p>
                </div>
            </div>
        </div>
    )
}