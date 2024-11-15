import {Navbar} from "../components/Navbar.jsx";
import {Header} from "../components/Header.jsx";
import {Steps} from "../components/Steps.jsx";
import {BgSlider} from "../components/BgSlider.jsx";
import {Testimonials} from "../components/Testimonials.jsx";
import {Upload} from "../components/Upload.jsx";
import {Footer} from "../components/Footer.jsx";

export const Home = () => {
    return (
        <>
            <Header/>
           <Steps/>
            <BgSlider/>
            <Testimonials/>
            <Upload/>
        </>
    )
}