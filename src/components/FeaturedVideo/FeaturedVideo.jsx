const FeaturedVideo = ({poster}) => {

    return (
        <>
        <div className="main__wrapper--video">
            <video className="main__video" controls poster={poster} />
        </div>
        </>
    )
   }
   
   export default FeaturedVideo;