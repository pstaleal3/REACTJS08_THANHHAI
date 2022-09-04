import Button from "../shared/Button";

export function PageNotFound() {
    return (
        <div className="articles-list section">
            <div className="tcl-container">
                <div className="tcl-row tcl-jc-center"> 
                <h2>404 NOT FOUND</h2>
                <Button as='a' href='/'>Trang Chu</Button>  
                </div>
            </div>
        </div>
    )
}