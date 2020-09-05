import React from 'react';
import { Column } from 'simple-flexbox';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

function SoloTextoComponent() {

    return (

        <Column>

            <h1>Video</h1>
            <Player
                playsInline
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />

        </Column>

    );

}

export default SoloTextoComponent;