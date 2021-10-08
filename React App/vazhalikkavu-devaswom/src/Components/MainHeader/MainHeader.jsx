import React, { useEffect, useState } from 'react'
import { CloseNavSmall, OpenNavSmall } from '../../Icons/Icons'
import './mainheader.css'
import logo from '../../Images/Logos/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from '../../Redux/BooleanSlice'
import { handleNavigation } from '../../Helpers/helpers'
import { useHistory, useLocation } from 'react-router'
import { setActivePage } from '../../Redux/ActivePageSlice'
import { PAGE_NAMES } from '../../Constants/Constants'

function MainHeader({ scrollPosition }) {


    const count = useSelector((state) => state.booleanSlice.drawer_state)
    const activePageRedux = useSelector((state) => state.activePageSlice)
    let [drawerStatus, setDrawerStatus] = useState(false)
    let history= useHistory()
    const location = useLocation();
    let [activeState,setActiveState] = useState(location.pathname?location.pathname:"/")
    const dispatch = useDispatch()


    useEffect(() => {

        setActiveState(activePageRedux)
        console.log(activeState,PAGE_NAMES[1]);
       
    }, [activePageRedux])


    useEffect(() => {
        setDrawerStatus(count)
        setActiveState(location.pathname?location.pathname:"/")

    }, [])



    useEffect(() => {
        setDrawerStatus(count)
        console.log(drawerStatus);

    }, [count])



   
    let handleNavigation=(page)=>{
        
        dispatch(setActivePage(page))
        history.push(page)
    }


    let handleNavigationSmall=(page)=>{
        
        dispatch(setActivePage(page))
        history.push(page)
        dispatch(toggleDrawer())
    }




 


    return (
        <div className={scrollPosition > 10 ? "header-scrolled p-2 no-scrollbar" : "header p-2 no-scrollbar"}>

            <div className="large-header-menu w-100 p-2" id="header">


                <div className="d-flex flex-row justify-content-center align-items-center ps-4" >
                    <img src={logo} alt="" className="logo-img" />
                    <span className="header-tittle" >{'{io- hm-g-en-¡m-hv `-K-h-Xn- -t£{Xw-'}</span>
                </div>


                <div>
                    <span className={activeState==PAGE_NAMES[0]?"active-header-menu":"inactive-header-menu"} onClick={()=>{handleNavigation(PAGE_NAMES[0])}}>Home</span>
                    <span className={activeState==PAGE_NAMES[1]?"active-header-menu":"inactive-header-menu"} onClick={()=>{handleNavigation(PAGE_NAMES[1])}}>About</span>
                    <span className={activeState==PAGE_NAMES[2]?"active-header-menu":"inactive-header-menu"} onClick={()=>{handleNavigation(PAGE_NAMES[2])}}>Photo Gallery</span>
                    <span className={activeState==PAGE_NAMES[3]?"active-header-menu":"inactive-header-menu"} onClick={()=>{handleNavigation(PAGE_NAMES[3])}}>Offering</span>
                    <span className={activeState==PAGE_NAMES[4]?"active-header-menu":"inactive-header-menu"}>Pooja Times</span>
                    <span className={activeState==PAGE_NAMES[5]?"active-header-menu":"inactive-header-menu"}>Contact Us</span>



                </div>
            </div>

            <div className="small-header-menu w-100 p-2">

                <div className="d-flex flex-row justify-content-center align-items-center ps-1" >
                    <img src={logo} alt="" className="logo-img" />
                    <span className="header-tittle" >{'{io- hm-g-en-¡m-hv `-K-h-Xn- -t£{Xw-'}</span>
                </div>

                
                <div onClick={() => { dispatch(toggleDrawer()) }}>

                    <OpenNavSmall />


                </div>

                <div className={drawerStatus ? "nav-drawer" : "nav-drawer-hidden"} id="navDrawer">

                    <div className="d-flex flex-row justify-content-end mt-1 me-1" onClick={() => { dispatch(toggleDrawer()) }}>
                        <CloseNavSmall />

                    </div>


                    <div className="d-flex flex-row justify-content-center p-4 mt-4 w-100">
                        <img src={logo} alt="" style={{maxWidth:"80%"}}/>
                    </div>

                    <div className="mt-2">
                        <ul className="nav-ul">
                            <li className={activeState==PAGE_NAMES[0]?"active-nav-text":null} onClick={()=>{handleNavigationSmall(PAGE_NAMES[0])}}>Home</li>
                            <li className={activeState==PAGE_NAMES[1]?"active-nav-text":null} onClick={()=>{handleNavigationSmall(PAGE_NAMES[1])}}>About</li>
                            <li className={activeState==PAGE_NAMES[2]?"active-nav-text":null} onClick={()=>{handleNavigationSmall(PAGE_NAMES[2])}}>Photo Gallery</li>
                            <li className={activeState==PAGE_NAMES[3]?"active-nav-text":null} onClick={()=>{handleNavigationSmall(PAGE_NAMES[3])}}>Offering</li>
                            <li className={activeState==PAGE_NAMES[4]?"active-nav-text":null} onClick={()=>{handleNavigationSmall(PAGE_NAMES[4])}}>Pooja Times</li>
                            <li className={activeState==PAGE_NAMES[5]?"active-nav-text":null} onClick={()=>{handleNavigationSmall(PAGE_NAMES[5])}}>Contact Us</li>
                        </ul>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default MainHeader
