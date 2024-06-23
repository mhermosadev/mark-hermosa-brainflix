import './PageNotFound.scss';
import { Link } from "react-router-dom"

const PageNotFound = () => { 
    
        return (
            <>
            <div className='not-found-wrapper'>
                <div className="not-found">
                    <h1>404 PAGE NOT FOUND</h1>
                    <Link to='/'> 
                        <p>return home</p>
                    </Link>
                </div>
            </div>
            </>
        )
    }   
    
    export default PageNotFound