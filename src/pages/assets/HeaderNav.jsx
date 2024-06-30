// import { Link, useLocation } from 'react-router-dom';
// import { TfiWorld } from 'react-icons/tfi';
// import { FaAngleRight, FaBars, FaTimes } from 'react-icons/fa';
// import { useEffect, useState } from "react";

// import logoPrincipal from "../../assets/imagenes/logoPrincipal.png"; 
// import logoPrincipal_1 from "../../assets/imagenes/LogoPrincipal_1.png"; 

// const HeaderNav = () => {
//     const [isNavHovered, setIsNavHovered] = useState(false);
//     const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
//     const [isActiveHoverNav, setIsActiveHoverNav] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isActiveSubMenuMobile, setIsActiveSubMenuMobile] = useState(null);

//     const location = useLocation();

//     const handleLinkClick = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//         setIsMobileMenuOpen(false);
//         setHoveredMenuItem(null);
//         setIsActiveHoverNav(null)
//         setIsNavHovered(window.scrollY > 0);
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             if (location.pathname === '/datenschutzrichtlinie' || location.pathname === '/benutzerrechte') {
//                 setIsNavHovered(true);
//             }else{
//                 if (isActiveHoverNav) {
//                     setIsNavHovered(true);
//                 } else {
//                     if (!isMobileMenuOpen) {
//                         setIsNavHovered(window.scrollY > 0);
//                     }
//                 }
//             }
            
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [isActiveHoverNav, isMobileMenuOpen,location.pathname]);

//     const menu2 = [
//         { id:0, path: "/unternehmen/#", label: "Unternehmen", subTema: "Wir wählen die Fachleute aus, die Ihr Unternehmen braucht und fördern neue, der heutigen Zeit angepasste Führungsstile.", subItems: [
//             { path: "/unternehmen/personalauswahl-und-rekrutierung", label: "Personalauswahl und Rekrutierung" },
//             { path: "/unternehmen/personalbewertungen", label: "Personalbewertungen" },
//             { path: "/unternehmen/international", label: "International" },
//             { path: "/unternehmen/funktionen", label: "Funktionen" },
//             { path: "/unternehmen/fachspezifische-suche", label: "Fachspezifische Suche" },
//             { path: "/unternehmen/inklusionsaudit", label: "Inklusionsaudit" },
//         ]},
//         { id:1, path: "/kandidaten/#", label: "Kandidaten", subTema: "Wir unterstützen Sie auf dem Weg zu Ihrer Karriere. Nutzen Sie unsere Stellenangebote, Karriereberatung und digitalen Ressourcen.", subItems: [
//             { path: "/kandidaten/registrieren-sie-ihren-lebenslauf", label: "Registrieren Sie Ihren Lebenslauf" },
//             { path: "/kandidaten/internationales-karrieremanagement", label: "Internationales Karrieremanagement" },
//         ]},
//         { id:2, path: "/wir/#", label: "Wir", subTema: "Erfahren Sie mehr über unser Unternehmen und unsere Werte.", subItems: [
//             { path: "/wir/wer-wir-sind", label: "Wer Wir Sind" },
//             { path: "/wir/unsere-philosophie", label: "Unsere Philosophie" },
//         ]},
//         { id:3, path: "/meine-dienstleistungen", label: "Meine Dienstleistungen", subTema: "Wir bieten Dienstleistungen für Ihre akademische, berufliche und persönliche Entwicklung, einschließlich Studium, Arbeit, Wohnen, Beförderung, Visa und Sprachen.", subItems: [
//             { path: "/meine-dienstleistungen/studium-ausbildung-praktikum", label: "Studium - Ausbildung - Praktikum" },
//             { path: "/meine-dienstleistungen/arbeit-steuern", label: "Arbeit - Steuern" },
//             { path: "/meine-dienstleistungen/wohnen-beförderung", label: "Wohnen - Beförderung" },
//             { path: "/meine-dienstleistungen/visum-sprache", label: "Visum - Sprache" },
//         ]},
//         { id:4, path: "/kontakt", label: "Kontakt" },
//     ];

//     const handleMenuItem = (item) => {
//         setHoveredMenuItem(item.path);
//         setIsActiveHoverNav(item.label);
//         setIsNavHovered(true);
//     };

//     const handleMenuLeaveItem = () => {
//         setHoveredMenuItem(null);
//         setIsActiveHoverNav(null);
//     };

//     const onMouseEnterNavHovered = () => {
//         setIsNavHovered(true);
//     };

//     const onMouseLeaveNavHovered = () => {
//         if (location.pathname === '/datenschutzrichtlinie' || location.pathname === '/benutzerrechte') {
//             setIsNavHovered(true);
//         }else{
//             if (!isMobileMenuOpen) {
//                 setIsNavHovered(window.scrollY > 0);
//             }
//         }
//     };

//     return (
//         <nav className="p-0 w-full z-50 fixed top-0">
//             <div 
//                 className={`h-32 w-full transition-colors duration-300 ${isNavHovered ? 'bg-white' : 'bg-transparent'}`}
//                 onMouseEnter={onMouseEnterNavHovered}
//                 onMouseLeave={onMouseLeaveNavHovered}
//             >
//                 <ul className="flex items-center justify-between h-full px-4 md:px-10">
//                     <li className="text-center py-4 flex">
//                         <Link to="/" onClick={handleLinkClick} className="flex items-center">
//                             {isNavHovered ? (
//                                 <>
//                                     <div className='flex flex-col items-center'>
//                                         <img src={logoPrincipal_1} alt="Logo Principal" className='h-20' />
//                                         <div className="flex flex-col items-center">
//                                             <h2 className={`font-roboto-thin font-medium text-xl transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`}>
//                                                 SANDRA ROGGERO M.
//                                             </h2>
//                                             <span className={`font-bell text-sm -mt-1 transition-colors font-bold duration-300 ${isNavHovered ? 'text-violet-900' : 'text-white'}`}>
//                                                 BERATUNG
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </>
//                             ) : (
//                                 <>
//                                     <div className='flex flex-col items-center'>
//                                         <img src={logoPrincipal} alt="Logo Principal" className='h-20' />
//                                         <div className="flex flex-col items-center">
//                                             <h2 className={`font-roboto-thin font-medium text-xl transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`}>
//                                                 SANDRA ROGGERO M.
//                                             </h2>
//                                             <span className={`font-bell text-sm -mt-1 transition-colors font-bold duration-300 ${isNavHovered ? 'text-violet-900' : 'text-white'}`}>
//                                                 BERATUNG
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </>
//                             )}
//                         </Link>
//                     </li>
//                     <li className="md:hidden flex items-center">
//                         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen) && setIsNavHovered(true)} className={`${isNavHovered ? 'text-gray-700' : 'text-white'}`}>
//                             {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                         </button>
//                     </li>
//                     <li className="hidden md:flex justify-center items-center space-x-2 h-full">
//                         <ul className="flex justify-center items-center h-full">
//                             {menu2.map((item, index) => (
//                                 <li
//                                     key={index}
//                                     className="text-center transition-colors duration-300 h-full flex items-center justify-center hover:cursor-pointer hover:text-white hover:bg-gray-500 w-auto px-8 text-sm"
//                                     onMouseEnter={() => handleMenuItem(item)}
//                                     onMouseLeave={handleMenuLeaveItem}
//                                 >
//                                     <Link
//                                         to={item.path}
//                                         onClick={(e) => {
//                                             if (item.subItems) {
//                                                 e.preventDefault();
//                                                 setHoveredMenuItem(item.path);
//                                             } else {
//                                                 handleLinkClick();
//                                             }
//                                         }}
//                                         className=""
//                                     >
//                                         <p className={`hover:text-white md:text-xs h-full lg:text-sm transition-transform duration-300 transform hover:cursor-pointer hover:translate-y-[-3px] ${isNavHovered ? isActiveHoverNav === item.label ? 'text-white' : 'text-gray-700' : 'text-white'}`}>
//                                             {item.label}
//                                         </p>
//                                     </Link>
//                                     {item.subItems && hoveredMenuItem === item.path && (
//                                         <div
//                                             className="w-full hover:cursor-default absolute top-full left-0 py-6 px-20 text-gray-700 flex-col justify-start items-start bg-white shadow-lg mt-0 space-y-2 border-gray-300 border-t-2"
//                                             onMouseEnter={() => setIsActiveHoverNav(item.label)}
//                                             onMouseLeave={() => setIsActiveHoverNav(null)}
//                                         >
//                                             <h2 className="font-medium text-2xl text-start hover:cursor-text">{item.label}</h2>
//                                             <ul className='text-start flex flex-nowrap space-x-2'>
//                                                 {item?.subTema !== undefined &&
//                                                     <li className='w-1/4 hover:cursor-text'>
//                                                         <p>
//                                                             {item?.subTema}
//                                                         </p>
//                                                     </li>
//                                                 }
//                                                 <li className='w-1/4'>
//                                                     <ul className='space-y-2'>
//                                                         {item.subItems.slice(0, 3).map((subItem, subIndex) => (
//                                                             <li key={subIndex}>
//                                                                 <Link
//                                                                     to={subItem.path}
//                                                                     onClick={handleLinkClick}
//                                                                     className="px-4 text-gray-800 hover:bg-gray-100 text-sm flex items-center hover:cursor-pointer"
//                                                                 >
//                                                                     <FaAngleRight className='' />
//                                                                     {subItem.label}
//                                                                 </Link>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 </li>
//                                                 <li className='w-1/4'>
//                                                     <ul className='space-y-2'>
//                                                         {item.subItems.slice(3).map((subItem, subIndex) => (
//                                                             <li key={subIndex}>
//                                                                 <Link
//                                                                     to={subItem.path}
//                                                                     onClick={handleLinkClick}
//                                                                     className="px-4 text-gray-800 hover:bg-gray-100 text-sm flex items-center hover:cursor-pointer"
//                                                                 >
//                                                                     <FaAngleRight className='' />
//                                                                     {subItem.label}
//                                                                 </Link>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     )}
//                                 </li>
//                             ))}
//                         </ul>
//                         <strong className={`transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`}>|</strong>
//                         <TfiWorld className={`transition-colors duration-300 ${isNavHovered ? 'text-gray-800' : 'text-white'}`} />
//                     </li>
//                 </ul>
//             </div>
//             {isMobileMenuOpen && (
//                 <div className="md:hidden absolute top-32 left-0 w-full bg-white shadow-lg z-40 border-t-gray-300 border-t-border_1">
//                     <ul className="flex flex-col space-y-0 p-2">
//                         {menu2.map((item, index) => (
//                             <li key={index} className={`text-gray-800 hover:bg-bg_favorite_4 text-sm hover:text-white`}>
//                                 <Link
//                                     to={item.path}
//                                     onClick={(e) => {
//                                         setIsActiveSubMenuMobile(item.label);
//                                         if (item.subItems) {
//                                             e.preventDefault();
//                                             setHoveredMenuItem(item.path === hoveredMenuItem ? null : item.path);
//                                         } else {
//                                             handleLinkClick();
//                                         }
//                                     }}
//                                     className={`flex justify-between items-center hover:text-white h-full p-2 ${isActiveSubMenuMobile === item.label ? 'text-white bg-gray-800' : 'text-gray-800 '}`}
//                                 >
//                                     {item.label}
//                                     {item.subItems && <FaAngleRight className="ml-2" />}
//                                 </Link>
//                                 <hr className={`${isActiveSubMenuMobile === item.label ? 'text-white flex w-full' : 'hidden'}`} />
//                                 {item.subItems && hoveredMenuItem === item.path && (
//                                     <ul className={`p-2 bg-gray-800 ${isActiveSubMenuMobile === item.label ? 'text-white' : 'text-gray-700'}`}>
//                                         {item.subItems.map((subItem, subIndex) => (
//                                             <li key={subIndex}>
//                                                 <Link
//                                                     to={subItem.path}
//                                                     onClick={handleLinkClick}
//                                                     className="block py-2 px-1 hover:text-gray-800 hover:bg-white"
//                                                 >
//                                                     {subItem.label}
//                                                 </Link>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// }

// export default HeaderNav;


import React, { useEffect, useState } from "react";
import {BsFillHouseAddFill} from "react-icons/bs";
import {FaAngleDown, FaAngleUp, FaGalacticSenate, FaRegClosedCaptioning, FaRegComment, FaUserCircle} from "react-icons/fa";
import {AiOutlineBell, AiOutlineClose, AiOutlineEye, AiOutlineHeart} from "react-icons/ai";
import {FiAlignJustify} from "react-icons/fi";
import menuData from "./data/menu";
// import { useAppState } from "../../hooks/UseAppState";
// import { LoginStepsType } from "../../types/LoginTypes";
// import ModalLoginRegister from "../modal/ModalLoginRegister";
// import { useUser } from "../../hooks/UseUser";
// import { useAuth } from "../../hooks/UseAuth";
import { CloseOutlined } from "@mui/icons-material";
// import { useAppState } from "../../hooks/UseAppState";
// import { useUser } from "../../hooks/UseUser";
import { TfiWorld } from 'react-icons/tfi';


const HeaderNav=()=>{

    // const {
    //     setLoginModalOpen,
    //     setLoginStep,
    //     // loggedUser
    // } = useAppState();

    // const {
    //     getUserPerfil
    // } = useUser();

    // const {
    //     logOut
    // } = useAuth();

    const [hoverMenu,setHoverMenu] = useState(false);
    const [activeMenu, setActiveMenu] =useState(null);
    const [activeMenuMobile,setActiveMenuMobile] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeCloseMenuMobile,setActiveCloseMenuMobile]= useState(false);
    const [windowHeight, setWindowHeight] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const [isActive,setIsActive]=useState(false);
    const [activeMenuUser,setActiveMenuUser] = useState(false);

    const [showUser,setShowUser]=useState(false);

    const [activeAyuda,setActiveAyuda] = useState(false);

    // useEffect(()=>{
    //     getUserPerfil();
    // },[localStorage]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setActiveMenuMobile(false);
                setActiveCloseMenuMobile(false);
            }
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if(hoverMenu === true || activeMenuUser === true){
                setScrolled(true);
            }else{
                if (window.scrollY > 0) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }; 
      }, [hoverMenu,activeMenuUser]);

    const MenuItem = ({ label, isActive, onMouseOver, onMouseOut,submenus }) => (
        <ul className="w-full ">
            <li
                className={`text-base hidden h-full space-x-0 py-1 px-2 lg:flex items-center justify-center hover:cursor-pointer font-semibold ${scrolled ? 'text-gray-800' : 'text-white'}`}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
            >
                <button className={`${submenus.length > 0 ? (isActive ? 'border-b-min1 border-orange-800' :''): (isActive ? 'text-orange-800' :'')}    `}>{label}</button>
                {label !== "Proyectos" && label !== "Amoblamientos" && (
                    <>
                        <FaAngleDown
                            className={`${isActive ? "hidden" : ""}`}
                        />
                        <FaAngleUp
                            className={`${isActive ? "" : "hidden"}`}
                        />
                    </>
                )}
            </li>
        </ul>
    );

    const [menuDataState, setMenuDataState] = useState(
        menuData.map(() => false) // Inicializar todos los menús como cerrados
    );
    const [submenuStates, setSubmenuStates] = useState(
        menuData.map(() => false) // Inicializar todos los submenús como cerrados
    );

    const handleMenuItemHover=(menuId)=>{
        setActiveMenu(menuId);
        setScrolled(true); 
        setHoverMenu(true);

    }
    const handleMenuItemLeave=()=>{
        setActiveMenu(null);
        setScrolled(window.scrollY > 0); 
        setHoverMenu(false);    
    }
    
    const handleClickSubMenuMobile = (index,submenus) => {
        setMenuDataState((prevState) => {
            const newState = prevState.map((_, i) => (i === index ? !prevState[i] : false));
            return newState;
        });
    };
    const handleClickSubMenuMobile_ = (index) => {
        setSubmenuStates((prevState) => {
            const newState = prevState.map((_, i) => (i === index ? !prevState[i] : false));
            return newState;
        });
    };


    const Submenu = ({ title, options,index }) => (
        <div className="w-full h-full px-2 text-base font-bold text-gray-500">
            <h2 className="text-lg text-gray-700">{title}</h2>
            <ul className=" text-gray-700 font-normal text-normal space-y-1">
                {options.map((option) => (
                    <li key={option} className="cursor-pointer w-auto hover:bg-gray-200 px-2 ">{option}</li>
                ))}
            </ul>
        </div>
    );

    const Submenumobile = ({ title, options,index}) => (
        <div className="w-full h-full px-4 text-base font-bold text-gray-500 bg-slate-100">
            <button 
                className={`${submenuStates[index]?'bg-gray-200':''}  font-medium py-2 w-full flex justify-between items-center`}
                onClick={() => handleClickSubMenuMobile_(index)}
            >
                <p>{title}</p>
                <FaAngleDown className={`${submenuStates[index] ? "hidden" : ""}`} />
                <FaAngleUp className={`${submenuStates[index] ? "" : "hidden"}`} />
            </button>
            <hr className=" border-gray-300"/>
            <ul className={`text-gray-700 px-2  font-normal text-normal space-y-2 py-2`}>
                {
                    submenuStates[index] && options && (
                        options?.map((option) => (
                            <li key={option}>{option}</li>
                        ))
                    )
                }
            </ul>
        </div>
    );

    //------------------------------------------------------------------------------------------- 

    const MouseOverScrolled=()=>{
        if(activeMenuMobile === false){
            setScrolled(true); 
            setHoverMenu(true);
        }
        
    }

    const MouseOutScrolled=()=>{
        if(activeMenuMobile === false){
            setScrolled(window.scrollY > 0); 
            setHoverMenu(false);
        }
    }

    const handleClickAyuda=()=>{
        setActiveAyuda(true);
    }

    

    return(
        <div className="fixed z-50 w-full">
            <div className="w-full">
                <ul className={`${activeMenuMobile ? 'bg-slate-200' : ''} ${scrolled ? (activeMenu  ? (activeMenu !== "_Proyectos" && activeMenu !== "_Amoblamientos" ? 'bg-white ' : 'bg-white border-gray-500 border-b-border_1') : 'bg-white border-gray-500 border-b-border_1 ') : ''} flex justify-between w-full mx-auto md:flex-row items-center h-28 px-10`}
                    onMouseOver={MouseOverScrolled}
                    onMouseOut={MouseOutScrolled}
                >
                    <li className=" w-auto flex flex-nowrap h-full">
                        {
                            scrolled ? (
                                <>
                                    <div className='flex flex-col items-center'>
                                        <img
                                            src="/images/logo.png"
                                            alt="Logo Principal"
                                            className='h-16' 
                                        />
                                        <div className="flex flex-col items-center">
                                            <h2 className={`font-roboto-thin font-medium text-xl transition-colors duration-300 text-gray-900`}>
                                                ROGGMAN
                                            </h2>
                                            <span className={`font-bell text-sm -mt-1 transition-colors font-bold duration-300 text-violet-900`}>
                                                CONSULTING
                                            </span>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className='flex flex-col items-center'>
                                        <img
                                            src="/images/logo.png"
                                            alt="Logo Principal"
                                            className='h-16' 
                                        />
                                        <div className="flex flex-col items-center">
                                            <h2 className={`font-roboto-thin font-medium text-xl transition-colors duration-300 text-white`}>
                                                ROGGMAN
                                            </h2>
                                            <span className={`font-bell text-sm -mt-1 transition-colors font-bold duration-300 text-white`}>
                                                CONSULTING
                                            </span>
                                        </div>
                                    </div>
                            )
                        }
                    </li>
                    <li className=" w-auto flex flex-nowrap h-full">
                        {menuData.map(({ id, label, submenus }) => (
                            <ul key={id} className="w-auto h-full">
                                <li
                                    className={`text-base hidden h-full space-x-0 py-0 px-2 lg:flex items-center justify-center hover:cursor-pointer  font-normal ${scrolled ? 'text-gray-800' : 'text-white'}`}
                                    onMouseOver={() => handleMenuItemHover(id)}
                                    onMouseOut={handleMenuItemLeave}
                                >
                                    <button className={`${submenus.length > 0 ? (activeMenu === id ? 'border-b-border_1 border-red-800 ' : '') : (activeMenu === id ? 'text-red-800' : '')}`}>
                                        {label}
                                    </button>
                                    <>
                                        <FaAngleDown className={`${activeMenu === id ? "hidden" : ""}`} />
                                        <FaAngleUp className={`${activeMenu === id ? "" : "hidden"}`} />
                                    </>
                                </li>
                                
                            </ul>
                        ))}
                        <div
                                    className={` space-x-2 text-base hidden h-full py-0 px-2 lg:flex items-center justify-center hover:cursor-pointer  font-normal ${scrolled ? 'text-gray-800' : 'text-white'}`}
                        
                        >
                            <strong className={`transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}>|</strong>
                            <TfiWorld className={`transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
                        </div>
                        
                    </li>
                    {/* <li className="  w-auto ">
                        <ul className="w-full flex items-center justify-center flex-nowrap space-x-4">
                            <li className=" text-white font-bold text-lg h-full ">
                                <button 
                                    className=" hidden h-12 px-5 rounded-lg text-white bg-gray-600 font-semibold w-full text-base md:flex items-center space-x-2">
                                    <span>Publica tus inmuebles</span>
                                    <BsFillHouseAddFill className="text-2xl"/>
                                </button>
                            </li>
                            <li className=" flex justify-center items-center h-20 " onMouseEnter={handleOverMenuUser} onMouseLeave={handleOutMenuUser}>
                                <button 
                                    className={` ${loggedUser?.data?.correo ? '' : `${scrolled ? 'bg-gray-200 border-gray-600 hover:bg-gray-300': 'bg-gray-600 hover:bg-gray-700'} border-min1 rounded-lg` }   h-12  px-3  text-gray-700 font-bold flex items-center  justify-center `}
                                    onClick={handleClickMenuUser}
                                >
                                    {
                                        loggedUser?.data?.correo ? (<>
                                            <div className={`h-10 w-10 flex items-center justify-center rounded-full  text-xl ${scrolled ? 'text-gray-200 bg-gray-600' : 'text-gray-600 bg-gray-200'} hidden lg:flex`}>
                                                {loggedUser?.data?.correo[0].toUpperCase()}
                                            </div>
                                            <FaAngleDown className={`${showUser ? 'hidden':''} ${scrolled ? 'text-gray-600 ' : 'text-gray-200 '}`} />
                                            <FaAngleUp className={`${showUser ? '':'hidden'} ${scrolled ? 'text-gray-600 ' : 'text-gray-200 '}`} />
                                        </>):(<>
                                            <FaUserCircle className={`text-3xl ${scrolled ? 'text-gray-600' : 'text-gray-200'} hidden lg:flex`}/>
                                            {
                                                (activeCloseMenuMobile) ? (<>
                                                    <CloseOutlined className="text-3xl "/>
                                                </>):(<>
                                                    <FiAlignJustify className={`text-3xl ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}/> 
                                                </>)
                                            }
                                        </>)
                                    }
                                </button>
                            </li>
                        </ul>
                    </li> */}
                </ul>
            </div>
            {/* menu */}
            <div className="w-full flex items-center justify-center relative"> 
                {menuData.map(({ id, submenus, label }, index) => (
                    <div
                        key={id}
                        className={`w-11/12 bg-white shadow-md border border-gray-200 h-auto ${activeMenu === id ? "" : "hidden"} px-2 rounded-lg py-5 flex flex-nowrap transition-all duration-300 ease-in-out`}
                        onMouseEnter={() => handleMenuItemHover(id)}
                        onMouseLeave={handleMenuItemLeave}
                    >
                        {submenus?.map(({ submenuTitle, submenuOptions }, i) => (
                            <div key={submenuTitle} className="flex flex-col w-full px-5 py-5">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{submenuTitle}</h3>
                                <ul className="grid grid-cols-1 w-full md:grid-cols-2 gap-3 text-sm">
                                    <div>
                                        {submenuOptions.slice(0, 3).map(option => (
                                            <li key={option} className="text-gray-600 hover:text-gray-800 transition-colors duration-200 py-2 px-2 cursor-pointer w-full">
                                                {option}
                                            </li>
                                        ))}
                                    </div>
                                    <div>
                                        {submenuOptions.slice(3).map(option => (
                                            <li key={option} className="text-gray-600 hover:text-gray-800 transition-colors duration-200 py-2 px-2 cursor-pointer w-full">
                                                {option}
                                            </li>
                                        ))}
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>


            {/* submenu user */}
            {/* <div className={`w-full items-center justify-end relative px-5 hidden lg:flex`} >
                <div className={`w-w_23_ bg-gray-100 h-auto ${activeMenuUser === false ? "hidden" : ""} rounded-lg py-4 px-6 `} onMouseEnter={handleOverMenuUser} onMouseLeave={handleOutMenuUser} >
                    { loggedUser?.data?.correo ? <>
                        {loggedUser?.data?.nombre && <p>{loggedUser?.data?.nombre}</p>}
                        <p className={`${loggedUser?.data?.nombre ? "text-gray-500 font-semibold" : "text-gray-800 font-semibold"} `}>{loggedUser?.data?.correo}</p>
                    </>:<>
                        <p className="text-gray-500 font-medium text-sm">Ingresa y accede a los avisos que contactaste, tus favoritos y las búsquedas guardadas</p>
                        <button className="w-full text-center py-2 bg-gray-500 hover:bg-gray-600 rounded-lg my-1 text-white font-bold text-base" onClick={handleClickIniciarSesion}>Iniciar Sesión</button>
                    </>}
                    <hr  className="w-full border-gray-500 my-1" />
                    <ul className="w-full space-y-1 px-2 my-2 text-gray-700 text-sm">
                        <li className="flex items-center flex-nowrap space-x-2 p-1 hover:bg-gray-200 hover:cursor-pointer ">
                            <FaRegComment />
                            <p>Avisos Contactados</p>
                        </li>
                        <li className="flex items-center flex-nowrap space-x-2 p-1 hover:bg-gray-200 hover:cursor-pointer ">
                            <AiOutlineHeart />
                            <p>Favoritos</p>
                        </li>
                        <li className="flex items-center flex-nowrap space-x-2 p-1 hover:bg-gray-200 hover:cursor-pointer ">
                            <AiOutlineBell />
                            <p>Búsquedas y alertas</p>
                        </li>
                        <li className="flex items-center flex-nowrap space-x-2 p-1 hover:bg-gray-200 hover:cursor-pointer ">
                            <AiOutlineEye />
                            <p>Historial</p>
                        </li>
                        <hr  className="w-full border-gray-500 my-1" />
                        <li className="p-1 hover:bg-gray-200 hover:cursor-pointer ">
                            <p>Mi cuenta</p>
                        </li>
                        <li className="p-1 hover:bg-gray-200 hover:cursor-pointer ">
                            <p>Ajustes de notificaciones</p>
                        </li>
                        { loggedUser?.data?.correo && 
                        <>
                            <hr  className="w-full border-gray-500 my-1" />
                            <li className=" p-1">
                                <p>Ayuda</p>
                            </li>
                            <li className="hover:cursor-pointer hover:bg-gray-300 p-1" onClick={handleCerrarSesion}>
                                <p className="text-red-700" >Cerrar Sesión</p>
                            </li>
                        </>
                    }
                    </ul>
                </div>
            </div> */}
            {/* menu mobile */}
            <div className={`${activeMenuMobile?'':'hidden'} bg-gray-100 w-full  lg:hidden overflow-auto p-4`} style={{ height: windowHeight - 80 }}>
                <p className="text-gray-500 font-medium my-2">Ingresa y accede a los avisos que contactaste, tus favoritos y las búsquedas guardadas</p>
                {/* <button className="w-full text-center py-2 bg-gray-500 hover:bg-gray-600 rounded-lg my-1 text-white font-bold text-base" onClick={handleClickIniciarSesion}>Iniciar Sesión</button> */}
                {/* <hr className="border-gray-300 w-full mt-2"/>
                <ul className="w-full space-y-0 px-2 py-4 text-gray-700">
                    <li className="flex items-center flex-nowrap space-x-2 hover:bg-gray-200 hover:cursor-pointer py-2 px-1">
                        <FaRegComment />
                        <p>Avisos Contactados</p>
                    </li>
                    <li className="flex items-center flex-nowrap space-x-2 hover:bg-gray-200 hover:cursor-pointer py-2 px-1">
                        <AiOutlineHeart />
                        <p>Favoritos</p>
                    </li>
                    <li className="flex items-center flex-nowrap space-x-2 hover:bg-gray-200 hover:cursor-pointer py-2 px-1">
                        <AiOutlineBell />
                        <p>Búsquedas y alertas</p>
                    </li>
                    <li className="flex items-center flex-nowrap space-x-2 hover:bg-gray-200 hover:cursor-pointer py-2 px-1">
                        <AiOutlineEye />
                        <p>Historial</p>
                    </li>
                    <li className="hover:bg-gray-200 hover:cursor-pointer py-2 px-1">
                        <p>Mi cuenta</p>
                    </li>
                    <li className="hover:bg-gray-200 hover:cursor-pointer py-2 px-1">
                        <p>Ajustes de notificaciones</p>
                    </li>
                </ul>
                <hr className="border-gray-300 w-full "/> 
                <button className="w-full text-center py-2 bg-gray-500 hover:bg-gray-600 rounded-lg my-1 text-white font-bold text-base flex items-center justify-center space-x-2">
                    <span>Publica tu inmueble</span>
                    <BsFillHouseAddFill className="text-2xl"/>
                </button>

                <hr className="border-gray-300 w-full pb-2  md:hidden"/> */}
                {menuData.map(({ id, submenus, label }, index)=>(
                    
                    <div
                    key={id}
                    className={`w-full py-2`}
                    >
                    <button
                    // className={`${menuDataState[index] ? (index == 3 && index == 4 ? 'hover:bg-gray-200' : 'bg-gray-200') : ''} flex items-center justify-between font-medium w-full py-2 px-2 border-b-min1 hover:bg-gray-200 hover:cursor-pointer`}
                    className={`${menuDataState[index] && index !== 3 && index !== 4 ? 'bg-gray-200' : ''} flex items-center justify-between font-medium w-full py-2 px-2 border-b-min1 hover:bg-gray-200 hover:cursor-pointer`}
                    onClick={() => handleClickSubMenuMobile(index,submenus)}
                >
                        <p>{label}</p>
                        {
                            (label !== "Proyectos" && label !== "Amoblamientos" && 
                            (<>
                            <FaAngleDown className={`${menuDataState[index] ? "hidden" : ""}`} />
                            <FaAngleUp className={`${menuDataState[index] ? "" : "hidden"}`} />
                            </>)
                            )
                        }
                        
                    </button>
                    {
                        menuDataState[index] && submenus && (
                            submenus?.map(({ submenuTitle, submenuOptions }, i) => (
                                <Submenumobile key={submenuTitle} title={submenuTitle} options={submenuOptions} index={i}/>
                                ))
                        )
                    }

                    </div>
                ))}
                <button className={` ${activeAyuda === false ? '' : 'hover:bg-gray-200'} flex items-center justify-between font-medium w-full py-2 px-2 border-b-min1 hover:bg-gray-200 hover:cursor-pointer`}
                    onClick={handleClickAyuda}
                >
                    <p>Ayuda</p>
                </button>
            </div>
        </div>
        
    )
}

export default HeaderNav;