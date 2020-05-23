import React from 'react';
import './LoadingCardContainer.css';

export const LoadingCardContainer = (props) => (
    <div className="loading_container">
        <div className="card_container">
            <div className="card_container_inner">
                {props.children}
                <div className="card card_backside"></div>
            </div>
        </div>
    </div>
)