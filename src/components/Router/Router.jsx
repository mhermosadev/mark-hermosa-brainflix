import { Routes, Route } from "react-router-dom";
import HomePage from "../../page/HomePage/HomePage";
import UploadPage from "../../page/UploadPage/UploadPage";
import VideoPlayer from "../../page/VideoPlayerPage/VideoPlayerPage";
import PageNotFound from "../../page/PageNotFound/PageNotFound";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="videoplayer" element ={ <VideoPlayer />} />
            <Route path="videoplayer/:id" element ={ <VideoPlayer />} />
            <Route path="uploadpage" element={ <UploadPage /> } />
            <Route path="*" element={<PageNotFound />} />
        </ Routes>
    )
}

export default Router