import React from 'react';
import './Post.css';
const post = (props) => {

    let content = null;

    if (props.showContent) {
        content = props.content
    } else {
        content = props.content.substr(0, 120) + '...'
    }
    return (
        <div className="Post">
            <h2> {props.title} </h2>
            <div> {content}</div>
        </div>
    )
}

export default post;