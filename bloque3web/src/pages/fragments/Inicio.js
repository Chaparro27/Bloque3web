import React from 'react';
import bryan from '../../assets/bryan.jpg';
import efren from '../../assets/efren.jpg';
import luis from '../../assets/luis.jpg';
import roman from '../../assets/roman.jpeg';

const Inicio = () => {
    return (
        <div className="content__inicio">
            <h1>Linkel Code</h1>
            <div className="content__autores">
                <div>
                    <img src={efren} alt="ads" width="100%"/>
                    <h3>Efren Herrera</h3>
                </div>
                <div>
                    <img src={luis} alt="ads" width="100%"/>
                    <h3>Luis Gomez</h3>
                </div>
                <div>
                    <img src={bryan} alt="ads" width="100%"/>
                    <h3>Bryan Mendez</h3>
                </div>
                <div>
                    <img src={roman} alt="ads" width="100%"/>
                    <h3>Roman Reyes</h3>
                </div>
            </div>
            <div id="description">
                <p>
                    Linkel Code es una empresa enfocada en ayudar a crear presencia online para empresas y emprendedores con ideales de crecimiento.
                </p>
                <br />
                <p>
                    Servicios que brindamos: Branding Design, Branding Managment, Web sites, Appication moviles.
                </p>
            </div>
        </div>
    );
}

export default Inicio;