import { toast } from 'react-toastify';
import './Card.css';
import {FaHeart} from 'react-icons/fa';
import { useState } from 'react';


function Card(props){
    const [isLiked, setIsLiked] = useState(true);
    // Apply the 'liked' class based on the isLiked state
    const likeButtonClass = isLiked ? 'like-button.liked' : 'like-button';
    function handleLikeClick(){
        isLiked ? toast.success('Liked the Course') : toast.warning('Removed from Liked Course');
        setIsLiked(!isLiked);
    }

    return(
        <div className='card'>
            <img src={props.course.image.url} alt={props.course.image.alt}/>
            <div className="card-details">
            <h3>{props.course.title}</h3>
            <button className={likeButtonClass} onClick={handleLikeClick}>
                <FaHeart fontSize='1.25rem'/>
            </button>
            </div>
            <p>{props.course.description}</p>

        </div>
    )
}

export default Card;