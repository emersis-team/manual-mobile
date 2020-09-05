import React from 'react';
import { Column } from 'simple-flexbox';

import flagImage from './../../assets/argentina-flag.jpg';

function TextoImagenComponent() {

    return (

        <Column>

            <h1>Bandera</h1>
            <p>Argentina</p>
            <br />
            <img
                alt=""
                src={flagImage}
                width="500px"
            />

        </Column>

    );

}

export default TextoImagenComponent;