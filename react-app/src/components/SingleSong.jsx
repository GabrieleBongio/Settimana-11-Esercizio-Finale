import { Col, Row } from "react-bootstrap";
import { SvgHeart } from "./svgs/SvgHeart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, removeFromFavourites } from "../redux/actions_and_reducers.js/favourites";
import { playSong } from "../redux/actions_and_reducers.js/songPlayed";
import { SvgHeartFill } from "./svgs/SvgHeartFill";

const SingleSong = ({ song }) => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.favourites);
  const [isInFavourites, setIsInFavourites] = useState(false);

  useEffect(() => {
    if (favourites.includes(song)) {
      setIsInFavourites(true);
    }
    // eslint-disable-next-line
  }, [favourites]);

  const handleRemove = (e) => {
    dispatch(removeFromFavourites(song));
    setIsInFavourites(false);
  };

  const handleAdd = (e) => {
    dispatch(addToFavourites(song));
    setIsInFavourites(true);
  };

  return (
    <Col xs={6} sm={4} xl={2} className="mb-5">
      <div className="d-flex flex-column my-hover-card">
        <img
          src={song.album.cover_medium}
          alt={song.id}
          className="img-fluid"
          onClick={() => dispatch(playSong(song))}
        ></img>
        <Row className="align-items-start g-0">
          <Col xs={10}>
            <p className="text-white m-0 ps-2 fs-7 mt-2" onClick={() => dispatch(playSong(song))}>
              Track: "{song.title.length < 16 ? `${song.title}` : `${song.title.substring(0, 16)}...`}"
            </p>
            <p className="text-white m-0 ps-2 fs-7" onClick={() => dispatch(playSong(song))}>
              Artist: {song.artist.name}
            </p>
          </Col>
          <Col xs={2} className="text-center pt-2">
            {isInFavourites ? (
              <div className="rounded-pill my-hover" onClick={handleRemove}>
                <SvgHeartFill></SvgHeartFill>
              </div>
            ) : (
              <div className="rounded-pill my-hover" onClick={handleAdd}>
                <SvgHeart></SvgHeart>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default SingleSong;
