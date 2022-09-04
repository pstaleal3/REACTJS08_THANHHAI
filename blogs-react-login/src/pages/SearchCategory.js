import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { PageNotFound } from "../components/404NotFound/404NotFound";
import IconLoading from "../components/shared/IconLoading";
import { actFetchArticleGeneralAsync } from "../store/post/actions";
import { usePostPaging } from "../helpers/usePostPaging";

function SearchCategory() {
  const {slug} = useParams();
  const dispatch = useDispatch();
  const [category,setCategory] = useState(null);
  const {loading, hashCategoryById} = useSelector(state => state.Category); 
  useEffect(() => {
    if(!loading) {
      let arr = Object.values(hashCategoryById).filter(item => {
        return item.slug === slug && item.lang === 'vi';
      })
      if(arr.length === 0) setCategory(undefined);
      else setCategory({...arr[0]})
    }
  },[loading,hashCategoryById,slug]);
  const {
    posts,
    renderButtonLoadMore,
    total
  } = usePostPaging({
    extraParams: {categories: category ? category.id : ''}
  });
  useEffect(() => {
    if(category) {
      dispatch(actFetchArticleGeneralAsync({
        categories: category.id
      }));
    }
  },[category,dispatch]);
  if(category === undefined) return (
    <PageNotFound />
  ) 
  if(category === null) return (
    <IconLoading width="150px" />
  ) 

  return (
    <div className="articles-list section">
      <div className="tcl-container">
  
        <MainTitle type="search">{total} kết quả tìm kiếm với Category: "{ slug }"</MainTitle>
        
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

export default SearchCategory