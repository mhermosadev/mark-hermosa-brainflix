import uploadVideoPreview from '../../assets/images/Upload-video-preview.jpg'
import UploadForm from '../UploadForm/UploadForm'

const UploadVideo = () => {
    return (
        <>
        <section className='upload'>
            <div className='upload__wrapper--title'>
                <h1 className='upload__title'>Upload Video</h1>
            </div>
            <div className='upload__wrapper--desktop'>
                <div className='upload__wrapper--img'>
                    <p className='upload__text' >VIDEO THUMBNAIL</p>
                    <img className='upload__image' src={uploadVideoPreview} alt='person at the start of marathon' />
                </div>
                <UploadForm />
            </div>
        </section>
        </>
        
    )
}

export default UploadVideo 