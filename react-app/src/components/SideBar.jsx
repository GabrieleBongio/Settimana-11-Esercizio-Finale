/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Row, Col /* Form */ } from "react-bootstrap";
import { SvgHome } from "./svgs/SvgHome";
import { SvgLibrary } from "./svgs/SvgLibrary";
import { useSelector, useDispatch } from "react-redux";
import { playSong } from "../redux/actions_and_reducers.js/songPlayed";
//import { useState } from "react";
//import { fetchData } from "../redux/actions_and_reducers.js/fetchData";

const SideBar = () => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.favourites);
  /* const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchData(query, "search"));
  }; */

  return (
    <div className="d-flex flex-column bg-black p-4 height-100 position-sticky top-0">
      <div className="pe-5 mb-5">
        <img src="assets/imgs/logo.png" alt="logo" className="img-fluid" />
      </div>
      <a href="#" className="ps-1 fs-5 fw-lighter link-light link-underline-opacity-0 sideLink">
        <SvgHome></SvgHome> Home
      </a>
      <a href="#" className="mt-4 ps-1 fs-5 fw-lighter link-light link-underline-opacity-0 sideLink">
        <SvgLibrary></SvgLibrary> Your Library
      </a>
      {/* <Form className="mt-4" onSubmit={handleSubmit}>
        <Row className="g-1">
          <Col xs="8">
            <Form.Control
              type="text"
              placeholder="Search..."
              className=" mr-sm-2 fs-7"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Col>
          <Col xs="4">
            <Button type="submit" variant="success" className="px-2 fs-7">
              Submit
            </Button>
          </Col>
        </Row>
      </Form> */}
      <div className="border-top border-2 mt-4">
        <p className="my-2 text-white fs-5 fw-lighter opacity-75">Preferiti:</p>
        {favourites.map((song) => (
          <div
            key={`song_n_${song.id}`}
            className="mb-2 my-hover-card rounded-end-pill"
            onClick={() => dispatch(playSong(song))}
          >
            <Row className="g-0 align-items-center">
              <Col xs={4}>
                <img src={song.album.cover_medium} alt="cover" className="img-fluid"></img>
              </Col>
              <Col xs={8}>
                <p className="ms-1 fs-7 text-white mb-0">
                  {song.title.length < 16 ? `${song.title}` : `${song.title.substring(0, 16)}...`}
                </p>
                <p className="ms-1 fs-7 text-white mb-0">by: {song.artist.name}</p>
              </Col>
            </Row>
          </div>
        ))}
      </div>
      <Button variant="light" className="mt-auto rounded-pill btn-green">
        Sign up
      </Button>
      <Button variant="outline-light" className="mt-4 rounded-pill">
        Login
      </Button>
      <div className="mt-4 d-none d-lg-flex">
        <a href="#" className="text-decoration-none text-white px-2 border-end border-opacity-25 opacity-75">
          Cookie Policy
        </a>
        <a href="#" className="text-decoration-none text-white px-2 opacity-75">
          Privacy
        </a>
      </div>
      <div className="flex-column mt-4 d-md-flex d-lg-none">
        <a
          href="#"
          className="text-decoration-none text-white py-2 ps-2 m-0 border-bottom border-opacity-25 opacity-75"
        >
          Cookie Policy
        </a>
        <a href="#" className="text-decoration-none text-white py-2 ps-2 m-0 opacity-75">
          Privacy
        </a>
      </div>
    </div>
  );
};

export default SideBar;
