import './style.scss';
import { FaPaw, FaCheck, FaTimes } from 'react-icons/fa';

export function Plan() {
    return (
        <div className="plan container" id='plano'>
            <h2 className='fw-bold'>
            Não perca tempo <br />
            assine já o nosso plano <br />
            e garanta o melhor <br />
            para o seu pet
            </h2>
            <div className='mt-5 plan-container row m-auto'>
                <div className="plan-box d-flex flex-column justify-content-center align-items-center col-md-4">
                   <div className='d-flex justify-content-center align-items-center m-auto flex-column gap-2'>
                        <div className="icon-box d-flex justify-content-center align-items-center">
                            <FaPaw className='icon' />
                        </div>
                        <h2 className='fw-bold'>PET</h2>
                        <p className='fw-bold'>R$:12,50/mês</p>
                    </div>
                    <h6 className='fw-bold'>+ Impostos aplicáveis</h6>
                    <div className='d-flex flex-column gap-2'>
                        <div className='d-flex align-items-center gap-2'>
                            <FaCheck />
                            <p className='fw-bold mb-0'>Quarto</p>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <FaCheck />
                            <p className='fw-bold mb-0'>Cuidados médicos</p>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <FaTimes />
                            <p className='fw-bold mb-0'>Comida</p>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <FaTimes />
                            <p className='fw-bold mb-0'>Exercícios</p>
                        </div>
                    </div>
                </div>
                <div className="plan-box d-flex flex-column justify-content-center align-items-center col-md-4">
                   <div className='d-flex flex-column justify-content-center align-items-center gap-2'>
                        <div className="icon-box d-flex justify-content-center align-items-center">
                            <FaPaw className='icon' />
                        </div>
                        <h2 className='fw-bold'>Super PET</h2>
                        <p className='fw-bold'>R$:19,99/mês</p>
                    </div>
                    <h6 className='fw-bold'>+ Impostos aplicáveis</h6>
                    <div className='d-flex flex-column gap-2'>
                        <div className='d-flex align-items-center gap-2'>
                            <FaCheck />
                            <p className='fw-bold mb-0'>Quarto</p>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <FaCheck />
                            <p className='fw-bold mb-0'>Cuidados médicos</p>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <FaCheck />
                            <p className='fw-bold mb-0'>Comida</p>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <FaTimes />
                            <p className='fw-bold mb-0'>Exercícios</p>
                        </div>
                    </div>
                </div>
                <div className="plan-box d-flex flex-column justify-content-center align-items-center  col-md-4">
                   <div className='d-flex justify-content-center align-items-center flex-column gap-2'>
                        <div className="icon-box d-flex justify-content-center align-items-center">
                            <FaPaw className='icon' />
                        </div>
                        <h2 className='fw-bold'>Mega PET</h2>
                        <p className='fw-bold'>R$:12,50/mês</p>
                    </div>
                    <h6 className='fw-bold'>+ Impostos aplicáveis</h6>
                    <div className='d-flex flex-column gap-2'>
                        <div className='d-flex align-items-center gap-2'>
                            <FaCheck />
                            <p className='fw-bold mb-0'>Quarto</p>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <FaCheck />
                            <p className='fw-bold mb-0'>Cuidados médicos</p>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <FaCheck />
                            <p className='fw-bold mb-0'>Comida</p>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <FaCheck />
                            <p className='fw-bold mb-0'>Exercícios</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}