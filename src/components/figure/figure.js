import React from "react";
import { Figure } from 'react-bootstrap'

const FigureComponent = (props) => {    
    return (
        <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={props.dataProduct.image}
            />
            <Figure.Caption>
                <h3>{props.dataProduct.name}</h3>
            </Figure.Caption>
        </Figure>
    );
};

export default FigureComponent;
