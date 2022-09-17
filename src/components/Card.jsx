import React from 'react';

const Card = ({title, ...props}) => {
    return (
        <div className={"card"}
             draggable={props.draggable}
             onDragStart={props.onDragStart}
             onDragLeave={props.onDragLeave}
             onDragEnd={props.onDragEnd}
             onDragOver={props.onDragOver}
             onDrop={props.onDrop}
        >
            <h6>{title}</h6>
        </div>
    );
};

export default Card;