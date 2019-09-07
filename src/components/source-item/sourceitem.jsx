import React from 'react';

export const SourceItem = (props) => (
    <li><a href="/" onClick={props.clickHandler}> {props.text} </a></li>
)