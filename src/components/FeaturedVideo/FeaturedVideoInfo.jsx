import FeaturedVideoInfoDom from './FeaturedVideoInfoDom';

const FeaturedVideoInfo = ({title, channel, timestamp, description, likes, views, counter}) => {

    return (
        <FeaturedVideoInfoDom 
            title={title} 
            channel={channel} 
            date={new Date(timestamp).toLocaleDateString()}
            views={views} 
            likes={likes} 
            description={description}
            counter={counter}
        />
    )
} 

export default FeaturedVideoInfo