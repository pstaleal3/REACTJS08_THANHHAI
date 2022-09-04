import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { getQueryStr } from "../helpers";
import { useLocation } from "react-router-dom";
import { usePostPaging } from "../helpers/usePostPaging";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { actFetchArticleGeneralAsync } from "../store/post/actions";

function SearchPage() {
  let location = useLocation();
  const queryStr = getQueryStr('q',location)
  const {
    posts,
    renderButtonLoadMore,
    total
  } = usePostPaging({
    extraParams: {search: queryStr}
  });
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchArticleGeneralAsync({
      search: queryStr
    }))
  },[queryStr,dispatch]);
  return (
    <div className="articles-list section">
      <div className="tcl-container">
  
        <MainTitle type="search">{total} kết quả tìm kiếm với từ khóa "{ queryStr }"</MainTitle>
        
        <div className="tcl-row tcl-jc-center">
          {
            posts.map(item => (
              <div className="tcl-col-12 tcl-col-md-8" key={item.id}>
                <ArticleItem 
                  isStyleCard 
                  isShowCategoies 
                  isShowAvatar={false} 
                  isShowDesc={false} 
                  post={item}
                />
              </div>
            ))
          }
        </div>

        { renderButtonLoadMore() }
      </div>
    </div>

  )
}

export default SearchPage