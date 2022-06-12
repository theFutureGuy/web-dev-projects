import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Service from './components/Service/Service';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
    return(
        <div>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Service />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}
export default App