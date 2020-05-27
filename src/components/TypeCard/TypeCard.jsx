import React from 'react';
import './TypeCard.css';

function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const typesImages = importAll(require.context('../../Assets/svg/types', false, /\.(svg)$/));

export const TypeCard = (props) => (
    <div
        className="custom_card types"
        style={{ borderColor: props.color, borderStyle: "solid", borderWidth: 5 }}
    >
        <p>{props.name}</p>
        <div className={`icon typeImage${props.typeId}`}>
            <img
                src={typesImages[props.image]}
                alt={props.name}
            />
        </div>
    </div>
)