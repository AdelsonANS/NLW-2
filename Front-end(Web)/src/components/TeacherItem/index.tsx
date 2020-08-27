import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/57421602?s=460&u=10f05abae8d654801c194816fbad529cf8503655&v=4" alt="Adelson Agostiho"/>
            <div>
                <strong>Adelson Agostinho</strong>
                <span>Química</span>
            </div>
        </header>
        <p>
            Entusiasta das melhores tecnologias de quimica avançada.
            <br/><br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas atravês de experiências.

        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}
export default TeacherItem;