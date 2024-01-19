import HomeSection from "./HomeSection";
import SearchBar from "./SearchBar";
import SongBar from "./SongBar";
import TopBar from "./TopBar";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div>
        <TopBar></TopBar>
        <Container className="height-100 px-md-5">
          <SearchBar></SearchBar>
          <HomeSection section_name="Rock" section_query="queen"></HomeSection>
          <HomeSection section_name="Pop" section_query="lady%20gaga"></HomeSection>
          <HomeSection section_name="Rap" section_query="eminem"></HomeSection>
        </Container>
        <SongBar></SongBar>
      </div>
    </>
  );
};

export default Home;
