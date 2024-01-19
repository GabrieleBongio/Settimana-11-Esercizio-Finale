import { Button, Row, Col, Container } from "react-bootstrap";
import { SvgShuffle } from "./svgs/SvgShuffle";
import { SvgPrevious } from "./svgs/SvgPrevious";
import { SvgPlay } from "./svgs/SvgPlay";
import { SvgNext } from "./svgs/SvgNext";
import { SvgRepeat } from "./svgs/SvgRepeat";
import { useEffect, useState } from "react";
import { SvgPause } from "./svgs/SvgPause";
import { usePrevious } from "@uidotdev/usehooks";

const SongBarPlaying = ({ song, audio }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const prevAudio = usePrevious(audio);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  useEffect(() => {
    if (prevAudio) {
      prevAudio.pause();
    }
    if (setIsPlaying) {
      audio.play();
    }
    setIsPlaying(true);
    console.log(isPlaying);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio]);

  const handleClick = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  return (
    <div className="position-sticky bottom-0 bg-dark w-100 py-4">
      <Container>
        <Row className="justify-content-center">
          <Col xs={6} sm={5}>
            <Row className="g-0 align-items-center">
              <Col xs={4} sm={3} xl={2}>
                <img src={song.album.cover_medium} alt="cover song" className="img-fluid"></img>
              </Col>
              <Col xs={8} sm={9} xl={10}>
                <p className="ms-2 fs-7 text-white mb-0">
                  {song.title.length < 16 ? `${song.title}` : `${song.title.substring(0, 16)}...`}
                </p>
                <p className="ms-2 fs-7 text-white mb-0">{song.artist.name}</p>
              </Col>
            </Row>
          </Col>
          <Col xs={5}>
            <div className="d-flex align-items-center justify-content-center">
              <Button variant="dark" className="d-none d-sm-block rounded-5 opacity-50 opacity-100-hover">
                <SvgShuffle></SvgShuffle>
              </Button>
              <Button variant="dark" className="rounded-5 opacity-50 opacity-100-hover">
                <SvgPrevious></SvgPrevious>
              </Button>
              <Button variant="dark" className="rounded-5 opacity-50 opacity-100-hover" onClick={handleClick}>
                {isPlaying ? <SvgPause></SvgPause> : <SvgPlay></SvgPlay>}
              </Button>
              <Button variant="dark" className="rounded-5 opacity-50 opacity-100-hover">
                <SvgNext></SvgNext>
              </Button>
              <Button variant="dark" className="d-none d-sm-blockrounded-5 opacity-50 opacity-100-hover">
                <SvgRepeat></SvgRepeat>
              </Button>
            </div>
            <div className="border border-1 rounded-pill mt-2 opacity-50"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SongBarPlaying;
