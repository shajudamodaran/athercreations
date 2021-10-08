import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Caretakers from '../../Components/Caretakers/Caretakers'
import Footer from '../../Components/Footer/Footer'
import ImageSlider from '../../Components/ImageSlider/ImageSlider'
import MainHeader from '../../Components/MainHeader/MainHeader'
import MiddleMenu from '../../Components/MiddleMenu/MiddleMenu'
import RitualsTable from '../../Components/Rituals Table/RitualsTable'
import ProgramContainte from '../../Components/TemplePrograms/ProgramContainte'
import { toggleDrawer } from '../../Redux/BooleanSlice'


import './home.css'

function Homepage() {

    const [scrollPosition, setScrollPosition] = useState(0);

   // console.log(scrollPosition);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const dispatch = useDispatch()

    let handleBodyCick=()=>{


    }


  


    return (
        <div style={{backgroundColor:"#F8F9FA",overflow:"hidden"}}>

            <MainHeader scrollPosition={scrollPosition}/>
            <ImageSlider/>
            <MiddleMenu/>

            {/* <span className="malayalam-test">വാഴലിക്കാവ്</span> */}

            <Caretakers/>
            <ProgramContainte/>
            <RitualsTable/>
            <Footer/>
        </div>
    )
}

export default Homepage
