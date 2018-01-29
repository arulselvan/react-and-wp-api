import React from 'react';
import './Post.css';
const post = (props) => {

    const htmlContent={...props.content};
    //console.log(htmlContent.rendered);
    //const contentMarkup = {_html:htmlContent.rendered};
    //console.log(props.content);
    let createMarkup = (content)=>{
      
      let data = {_html:content};
        console.log(data)
       return data;
    }

    return (
        <div className="Post">
            <h1> {props.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.content }} />      
        </div>
    )
}

export default post;