import './App.css';
import Brands from './components/Brands';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import Ss from './components/Ss';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <>
    <Header />
    <HomeScreen 
    bold={"SaaS Landing Page Template"}
    desc={"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"}
    hsImg={"../assets/main.png"}
    />
    <Brands />
    <Ss />
    <CardSection />
    <Testimonial />
    <HomeScreen 
    bold={`Questions? Let’s talk `}
    desc={"Contact us through our 24/7 live chat.We’re always happy to help!"}
    hsImg={"../assets/GIF.png"}
    />
    <Footer />
    </>
  );
}

export default App;
