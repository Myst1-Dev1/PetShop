import { About } from '../../components/about';
import { Contact } from '../../components/contact';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Plan } from '../../components/plan';
import { Products } from '../../components/Products';
import { Services } from '../../components/services';
import './style.scss';

const bannerImage = require('../../assets/images/banner-image.png');

export function Home() {

    return (
        <div className="home">
            <Header />
            <div className="banner m-auto d-flex justify-content-evenly align-items-center">
                <div>
                    <h2 className='fw-bold'>
                        Bem Vindos ao <br />
                        Nosso PetShop
                    </h2>
                    <p>Loren ipsum is simply dummy <br /> after lorem ipsum is very good.</p>
                </div>
                <img src={bannerImage} alt="pets" />
            </div>
            <About />
            <Products />
            <Services />
            <Plan />
            <Contact />
            <Footer />
        </div>
    )
}