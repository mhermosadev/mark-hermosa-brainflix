import FeaturedVideoInfoDom from './FeaturedVideoInfoDom';
import axios from 'axios'; 

const FeaturedVideoInfo = ({title, channel, timestamp, description, likes, views, counter, id, setLikes}) => {

let strToNum = `${likes}`.replace(/,/g, '')
let parsedNum = parseFloat(strToNum)

    const likeVideo = async (e) => {
        e.preventDefault()
        const apiKEY = '?api_key=8bf1809d-0d2a-456e-aa8f-29069d90323a';
        const apiURL = 'http://localhost:8000';

        let updateLike = {
            like: parsedNum
        }

        try {
            const postResponse = await axios.patch(`${apiURL}/videos/${id}/likes${apiKEY}`, updateLike);
            setLikes(postResponse.data.likes)
        } catch (error) {
            console.log(error) 
        }
    }

    return (
        <FeaturedVideoInfoDom 
            title={title} 
            channel={channel} 
            date={new Date(timestamp).toLocaleDateString()}
            views={views} 
            likes={likes} 
            description={description}
            counter={counter}
            id={id}
            onclick={likeVideo}
        />
    )
    
} 

export default FeaturedVideoInfo