import NavBar from "../components/NavBar";
import Header from "../components/Header";

import headerPic from "../img/coming-soon.png";
import Footer from "../components/Footer";

function PodcastView() {
  return (
    <div className="App">
      <NavBar />

      <Header text="Mayra Maldonado Brignoni PODCAST" src={headerPic} />
      <Footer />
    </div>
  );
}
export default PodcastView;
