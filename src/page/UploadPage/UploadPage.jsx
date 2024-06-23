import './UploadPage.scss';
import Header from "../../components/Header/Header"
import UploadVideo from "../../components/UploadVideo/UploadVideo"

const UploadPage = () => {
    return (
        <>
        <Header 
        homePageLink='/'
        uploadPageLink='#'
        />
        <UploadVideo />
        </>
    )
}

export default UploadPage