import React ,{ useState, useEffect } from 'react';
import './App.scss';
import { Header } from './components/header';
import { ArticleCard } from './components/article-card';
import { FilterComponent } from './components/filter/'
import { SourceContainer } from './components/source-container';
import { restApi } from './api/restapi';

function App() {
  const [news, setNews] = useState([]);  
  const [sources, setSources] = useState([]);
  const [showLoader,setShowLoader] = React.useState(true);
  useEffect(() => {
   restApi.getSources().then((sdata) => {
      setSources(sdata.slice(0,5));
    });
    restApi.getNewsList().then((data) =>{
      setShowLoader(false);
      setNews(data.articles.slice(0,21));
    });
  },[]);
 
  const [toggleFilter, setToggleFilter] = React.useState(false);
  const handlesources = () => (cat,lang) => { 
    restApi.getSources(cat,lang).then(sdata => {setSources(sdata);});
  };
  const handleNewsBySource = () => (sr) => {
    setShowLoader(true);
    if(window.outerWidth < 1024){
      setToggleFilter(false);
    }
    restApi.getNewsList(sr).then(data => {
      setShowLoader(false);
      setNews(data.articles.slice(0,21));
    })
  }
  return (
    <div className="app-bs-news">
      <Header toggleFilter={toggleFilter} handleShowFilters={() => { setToggleFilter(!toggleFilter) }} />
      <div className="side">
        <div className={(toggleFilter)? 'side-container':'side-container collapsed'}>
          <FilterComponent handleGetSources={handlesources()} />
          <SourceContainer sources={sources} handleNews={handleNewsBySource()}/>
        </div>
      </div>
      <div className="content-container">
        <div className={(showLoader) ? 'bouncing-loader' : 'd-none'}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="news-list">
          
          {
            (!showLoader)?
              (news.length)? news.map((n,i) => <ArticleCard {...n} />): <h3 className="warning">Not Results found</h3>
            :''
          }
        </div>
      </div>
      <footer>
        <p>powered by  <a href="https://newsapi.org/">NewsAPI.org</a></p>
      </footer>
    </div>
  );
}

export default App;
