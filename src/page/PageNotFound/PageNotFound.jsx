import './PageNotFound.scss';
import { Link } from "react-router-dom"

const PageNotFound = () => { 
    
        return (
            <div className="not-found">
                <Link to='/'> 
                    <h1>404 PAGE NOT FOUND</h1>
                </Link>
            </div>
        )
    }   
    
    export default PageNotFound