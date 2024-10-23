import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Brands from './components/Brands';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import Ss from './components/Ss';
import Testimonial from './components/Testimonial';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignUpPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HomeScreen 
              bold={"SaaS Landing Page Template"}
              desc={"This is a template Figma file, turned into code using React. Learn more at"}
              hsImg={"../assets/main.png"}
            />
            <Brands />
            <Ss />
            <CardSection />
            <Testimonial />
            <HomeScreen 
              bold={`Questions? Let’s talk`}
              desc={"Contact us through our 24/7 live chat. We’re always happy to help!"}
              hsImg={"../assets/questions-gif.gif"}
            />
          </>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
