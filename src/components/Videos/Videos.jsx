const Videos = ({name, thumbnail, title, onclick}) => {
    return (
        <>
        <div className="video__wrapper">
            <div onClick={onclick}className="video__wrapper--thumnbnail">
                <img className='video__thumbnail'src={thumbnail} alt="videos"/>
            </div>
            <div className='video__wrapper--text'>
                <p className="video__text video__text--title">{title}</p>
                <p className="video__text video__text--channel">{name}</p>
            </div>
        </div>
        </>
    )
}

export default Videos;