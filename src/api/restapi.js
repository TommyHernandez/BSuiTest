const baseUrl = 'https://newsapi.org/v2/',
  key = 'eda4b1c4265b4a2ca6e93645d82bef07';
// https://newsapi.org/v2/sources?category=science&language=en&apiKey=f544730b91ac46568512ec12907723ab
const getSources = (cat = 'general', lang = 'en') => {
  //console.log(`${baseUrl}sources?category=${cat}&language=${lang}&apiKey=${key}`);
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}sources?category=${cat}&language=${lang}&apiKey=${key}`, {
      mode: 'cors',
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        resolve(json.sources);
      });
  });
};
const getNewsList = (source = 'abc-news') => {
  //console.log(`${baseUrl}everything?sources=${source}&apiKey=${key}`);
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}everything?sources=${source}&apiKey=${key}`, {
      mode: 'cors',
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        resolve(json);
      });
  });
};

export const restApi = {
  getSources,
  getNewsList,
};
