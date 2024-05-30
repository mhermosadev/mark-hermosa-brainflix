const FeaturedVideoDom = ({title, channel, description, views, likes, id, date, counter}) => {

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
                            <div className="hero__img--icon hero__img--icon-likes"></div>    
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
   
   export default FeaturedVideoDom;
   