const FeaturedVideoInfoDom = ({title, channel, description, views, likes, date, counter, onclick}) => {

    return (
        <>
        <section className="hero">
            <div className="hero__wrapper--tablet">
                <div className="hero__wrapper">
                    <h1 className="hero__title">{title}</h1>
                </div>
                <div className="hero__wrapper">
                    <div className="hero__wrapper--text">
                        <p className="hero__text hero__text--blacktext-demi">By {channel}</p>
                        <p className="hero__text">{date}</p>
                    </div>
                    <div className="hero__wrapper--text hero__wrapper--text-selfend">
                        <div className="hero__wrapper--icon">
                            <div className="hero__img--icon hero__img--icon-views"></div>    
                            <p className="hero__text">{views}</p>
                        </div>
                        <div className="hero__wrapper--icon">
                            <div onClick={onclick} className="hero__img--icon hero__img--icon-likes hero__img--icon-hover"></div>    
                            <p className="hero__text">{likes}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="hero__text hero__text--blacktext">{description}</p>
            <p className="hero__text hero__text--blacktext-demi">{counter} Comments</p>
        </section>
        </>
    )
       
   }
   
export default FeaturedVideoInfoDom;