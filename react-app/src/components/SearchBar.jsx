import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions_and_reducers.js/fetchData";
import SingleSong from "./SingleSong";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.data);
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchData(query, "search"));
  };

  return (
    <div>
      <h2 className="text-white mt-4 mb-3">Search:</h2>
      <div className="mb-5">
        <Form onSubmit={handleSubmit}>
          <Row className="g-1">
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search..."
                className=" mr-sm-2"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" variant="success">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <Row>
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">Error: {error}</p>}
        {data["search"] &&
          data["search"] !== undefined &&
          data["search"].map((song) => <SingleSong key={song.id} song={song}></SingleSong>)}
      </Row>
    </div>
  );
};

export default SearchBar;
