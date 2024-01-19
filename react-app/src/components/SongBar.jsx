import { Button, Row, Col, Container } from "react-bootstrap";
import { SvgShuffle } from "./svgs/SvgShuffle";
import { SvgPrevious } from "./svgs/SvgPrevious";
import { SvgPlay } from "./svgs/SvgPlay";
import { SvgNext } from "./svgs/SvgNext";
import { SvgRepeat } from "./svgs/SvgRepeat";
import { useSelector } from "react-redux";
import SongBarPlaying from "./SongBarPlaying";

const SongBar = () => {
  const { song } = useSelector((state) => state.song);

  if (song) {
    return <SongBarPlaying song={song} audio={new Audio(song.preview)}></SongBarPlaying>;
  } else {
    return (
      <div className="position-sticky bottom-0 bg-dark w-100 py-4">
        <Container>
          <Row className="justify-content-center">
            <Col xs={5}>
              <div className="d-flex align-items-center justify-content-center">
                <Button variant="dark" className="rounded-5 opacity-50 opacity-100-hover">
                  <SvgShuffle></SvgShuffle>
                </Button>
                <Button variant="dark" className="rounded-5 opacity-50 opacity-100-hover">
                  <SvgPrevious></SvgPrevious>
                </Button>
                <Button variant="dark" className="rounded-5 opacity-50 opacity-100-hover">
                  <SvgPlay></SvgPlay>
                </Button>
                <Button variant="dark" className="rounded-5 opacity-50 opacity-100-hover">
                  <SvgNext></SvgNext>
                </Button>
                <Button variant="dark" className="rounded-5 opacity-50 opacity-100-hover">
                  <SvgRepeat></SvgRepeat>
                </Button>
              </div>
              <div className="border border-1 rounded-pill mt-2 opacity-50"></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default SongBar;
