import React from 'react';
import noimg from '../../images/picture.svg';
const getPrettyDate = (date) => {
  let d = new Date(date);
  return `${d.getFullYear()}/${d.getMonth()}/${d.getDate()}`;
};
export const ArticleCard = (props) => {
  return (
    <article className="card">
      <a
        href={props.url}
        className="reorder"
        target="_blank"
        without
        rel="noopener noreferrer"
      >
        <h2>{props.title}</h2>
      </a>
      <div className="img-container">
        <img
          src={props.urlToImage !== 'null' ? props.urlToImage : noimg}
          className={props.urlToImage ? '' : 'noimage'}
          alt="article main"
        />
      </div>
      <div className="content">
        <span className="date">{getPrettyDate(props.publishedAt)}</span>
        <p>{props.description}</p>
        <span className="readmore-link">
          <a href={props.url} target="_blank" without rel="noopener noreferrer">
            Read More
          </a>
        </span>
      </div>
    </article>
  );
};
