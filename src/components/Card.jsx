import { useDispatch, useSelector } from 'react-redux';
import { toggleLike, toggleDislike } from '../slices/moviesSlice';
import Like from "./like";
import Dislike from "./dislike";

function Card({ id, title, category, likes, dislikes, liked, disliked, onDelete }) {
  const dispatch = useDispatch();


  let src = 'https://picsum.photos/100/100'+id;
  const handleLike = () => {
    dispatch(toggleLike(id));
  };

  const handleDislike = () => {
    dispatch(toggleDislike(id));
  };

  return (
    <div className="card">
      <figure className="card__poster">
        <button className="delete" onClick={onDelete}>X</button>
      <img src={src} >
      </img>
      </figure>
      <h3 className="movie__title">{title}</h3>
      <p className="movie__category">{category}</p>
      <div className="appreciation">
        <button
          className={`like__wrapper}`}
          onClick={handleLike}
        >
          <Like  like={liked} />
          <p className="like__number">{likes}</p>
        </button>
        <button
          className={`like__wrapper}`}
          onClick={handleDislike}
        >
          <Dislike dislike={disliked} />
          <p className="dislike__number">{dislikes}</p>
        </button>
      </div>
    </div>
  );
}


export default Card;
