const title = ({title,viewMore}) => {
  if (viewMore) {
    return <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
              <h2>{title}</h2>
              <a href="/" className="btn btn-default">View More</a>
            </div>
  } else {
    return <div className="main-title spacing">
              <h2>{title}</h2>
            </div>
  }
}
export default title;