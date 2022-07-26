import ArticlesLatest from './../components/ArticlesLatest';
import ArticlesList from './../components/ArticlesList';
import ArticlesPopular from './../components/ArticlesPopular';
const homePages = () => {
  return <>   
            <ArticlesLatest />
            <ArticlesList />
            <ArticlesPopular />
        </>
} 
export default homePages;