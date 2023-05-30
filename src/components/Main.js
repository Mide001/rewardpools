import Navbar from "./Navbar"
import AboutUs from "./AboutUs";
import AboutSection from "./AboutSection";
import CoinPrice from "./CoinPrice";
import CryptoNews from "./CryptoNews";
import NewsletterSubscription from "./Newsletter";
import FAQ from "./FAQ";
import Carousel from "./Carousel";
import Footer from "./Footer";

function Main() {

  const pools = [
    { id: 1, name: "Stake $Help - Earn Nil", APY: 100.93 },
    { id: 2, name: "Stake $Help - Earn Nil" , APY: 12.29 },
    { id: 3, name: "Stake $Help - Earn Nil", APY: 635.29 },
    { id: 4, name: "Stake $Help - Earn Nil", APY: 210.28 }
  ];

  return (
    <>
      <Navbar />
      <AboutUs />
      <Carousel pools={pools} />
      <AboutSection />
      <NewsletterSubscription />
      <CryptoNews />
      <CoinPrice />
      <FAQ />
      <Footer />
    </>
  );
}

export default Main;
