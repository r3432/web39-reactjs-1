import Footer from "../../components/user/common/Footer";
import Header from "../../components/user/common/Header";
import Banner from "../../components/user/home/Banner";
import Section from "../../components/user/home/Section";

const Home = () => {
  return (
    <>
      {/* Navigation*/}
      <Header />
      {/* Banner*/}
      <Banner/>
      {/* Section*/}
      <Section/>
      {/* Footer*/}
      <Footer/>
    </>
  );
};

export default Home;
