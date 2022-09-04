import { Link, useLocation } from 'react-router-dom';
import { getQueryStr, highlightSearch } from '../../helpers';

export default function ArticleItemTitle({ title, slugLink }) {
  let location = useLocation();
  const queryStr = getQueryStr('q',location)
  if (queryStr) title = highlightSearch(queryStr,title);
  return (
    <h2 className="article-item__title">
      <Link to={slugLink}>
       <span dangerouslySetInnerHTML={{__html: title}}></span>
      </Link>
    </h2>
  )
}