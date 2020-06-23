import React from 'react';
import { SourceItem } from '../source-item/sourceitem';

export const SourceContainer = (props) => (
  <div className="sources">
    <ul>
      {props.sources.length ? (
        props.sources.map((src, i) => {
          return (
            <SourceItem
              text={src.name}
              key={i}
              clickHandler={(e) => {
                e.preventDefault();
                props.handleNews(src.id);
                console.log(src.id);
              }}
            />
          );
        })
      ) : (
        <span className="warning">Sources not Found</span>
      )}
    </ul>
  </div>
);
