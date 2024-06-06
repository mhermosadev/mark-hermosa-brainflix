import { Routes, Route } from "react-router-dom";
import HomePage from "../../page/HomePage/HomePage";
import UploadPage from "../../page/UploadPage/UploadPage";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="uploadpage" element={ <UploadPage /> } />
        </Routes>
    )
}

export default Router