import React from 'react';
import DataContainer from '../containers/DataContainer';
import { Link } from 'react-router-dom';


const query = `
query MyQuery {
  
  allArticles {
    id
    title
    slug   
  }
}
`;

/*return (
      <h1>Titre: {articles.title}</h1>
      
  );*/





  const Sidebar = ({ allArticles}) => {

    return (

        <ul>
        {allArticles.map( (article, index) =>
          <li key={index}>
            <Link to={`/article/${article.slug}`}><p>{article.title}</p></Link>
          </li>
        )}
      </ul>

     
              
    );
  }


export default () =>
  <DataContainer
    query={query}
    component={Sidebar}
  />
;
