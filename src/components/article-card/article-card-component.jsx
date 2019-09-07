import React from 'react';
import noimg from'../../images/picture.svg';
const getPrettyDate = (date) => {
    let d = new Date(date);
    return `${d.getFullYear()}/${d.getMonth()}/${d.getDate()}`
}
export const ArticleCard = (props) => {
    return (
        <article key={props.publishedAt} className="card">
            <a href={props.url} className="reorder" target="_blank"><h2>{props.title}</h2></a>
            <div className="img-container">
                <img src={(props.urlToImage)?props.urlToImage: noimg} className={(props.urlToImage)?'': 'noimage'}  alt="article main" />               
                </div>
            <div className="content">
                <span className="date">{getPrettyDate(props.publishedAt)}</span>
                <p>{props.description}</p>
                <span className="readmore-link"><a href={props.url} target="_blank">Read More</a></span>
                </div>
        </article>
    )
}