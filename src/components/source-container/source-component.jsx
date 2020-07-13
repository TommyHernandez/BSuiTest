import React from 'react';
import { SourceItem } from '../source-item/sourceitem';

export const SourceContainer = ({ sources, handleNews }) => (
  <div className="sources">
    <ul>
      {sources.length ? (
        sources.map((src, i) => {
          return (
            <SourceItem
              text={src.name}
              key={i}
              clickHandler={(e) => {
                e.preventDefault();
                handleNews(src.id);
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
