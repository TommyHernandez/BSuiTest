import React from 'react';
const categoryList = ["business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
];
const langList = [
    'ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh',
]
export const FilterComponent = (props) => {
    let cat, lang;
    return (<div className="filters">
        <select name="" onChange={(e) => cat = e.target.value}>
            <option value="">Select Category</option>
            {
                categoryList.map(el => <option key={el} value={el}>{el}</option>)
            }
        </select>
        <select name="" onChange={(e) => lang = e.target.value}>
            <option value="" >Select Lenguaje </option>
            {
                langList.map(el => <option key={el} value={el}>{el}</option>)
            }
        </select>
        <button className="btn btn-main" onClick={() => { props.handleGetSources(cat, lang) }}>Get Sources</button>
    </div>)

}