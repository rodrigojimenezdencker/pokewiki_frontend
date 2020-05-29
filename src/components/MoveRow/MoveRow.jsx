import React from 'react';
import { Link } from 'react-router-dom';
import './MoveRow.css';

function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const secondaryTypesImages = importAll(require.context('../../Assets/img/secondaryTypes', false, /\.(png)$/));

export const MoveRow = props => (
    <tr>
        <td>
            <Link to={`/movimientos/${props.name.replace(/ /g, "_")}`}>
                {props.name}
            </Link>
        </td>
        <td>{props.description}</td>
        <td>
            <Link to={`/tipos/${props.typeName}`}>
                <img
                    src={secondaryTypesImages[props.typeImage]}
                    alt={props.name}
                />
            </Link>
        </td>
    </tr>
)