import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions_and_reducers.js/fetchData";
import { useEffect } from "react";
import SingleSong from "./SingleSong";

const HomeSection = ({ section_name, section_query }) => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData(section_query, section_name));
  }, [dispatch, section_query, section_name]);

  return (
    <div>
      <h2 className="text-white mt-4 mb-3">{section_name}</h2>
      <Row>
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">Error: {error}</p>}
        {data[section_name] !== undefined &&
          data[section_name].map((song, index) => {
            if (index < 6) {
              return <SingleSong key={`${section_name} - ${song.id}`} song={song}></SingleSong>;
            }
            return <div className="d-none" key={song.id}></div>;
          })}
      </Row>
    </div>
  );
};

export default HomeSection;
