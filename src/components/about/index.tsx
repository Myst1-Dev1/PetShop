import './style.scss';

 const aboutImage = require('../../assets/images/verinary-with-animal.png');

export function About() {
    return (
        <div className="about container d-flex justify-content-between align-items-center" id='sobre'>
            <div className="about-subtitles">
                <h2 className='fw-bold'>
                    Vamos cuidar <br />
                    dos animais
                </h2>
                <p>
                Loren ipsum is simply dummy text of the 
                printing and typesetting industry
                Lorem Ipsum has been the
                industry's standard dummy text
                ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <button className='fw-bold'>Saíba mais</button>
            </div>
             <img src={aboutImage} alt="veterinary-with-animal" />
        </div>
    )
}