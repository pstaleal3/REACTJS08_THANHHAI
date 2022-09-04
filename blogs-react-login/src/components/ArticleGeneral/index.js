import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
import { usePostPaging } from "../../helpers/usePostPaging";

function ArticleGeneral() {
  const {posts, renderButtonLoadMore} = usePostPaging();
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem Thêm">Bài viết tổng hợp</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {
            posts.map(item => {
              return (
                <div className="tcl-col-12 tcl-col-md-6" key={item.id}>
                  <ArticleItem isStyleCard isShowAvatar={false} post={item} />
                </div>
              )
            })
          }
        </div>
        { renderButtonLoadMore() }
      </div>
    </div>
  )
}

export default ArticleGeneral