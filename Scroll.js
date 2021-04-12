// import {useState, useEffect} from 'react';
// import { BsEjectFill } from "react-icons/bs";
// import * as BSIcons from "react-icons/bs";
// export  default function ScrollToTop(){
//     const {pathname} = useLocation();
//     useEffect(() =>{
//         window.scrollTo(0,0);
//     }, [pathname]);
//     return null;
// }
// const Scroll = ({
//     showBelow
// }) =>{
//     const [show, setShow] = useState(showBelow ? false : true)
//     const handleScroll = () => {
//         if (window.pageYOffset>showBelow){
//             if (!show) setShow(true)
//         } else{
//             if (show) setShow(false)
//         }
//     }
//     useEffect(() =>{
//         if (showBelow)
//         {
//             window.addEventListener(`scroll`,handleScroll)
//             return () => window.removeEventListener(`scroll`, handleScroll)
//         }
//     })
//     const handelClick = () =>{
//         window[`scrollTo`]({ top:0, behavior:`smooth`})
//     }
//     return(
//     <div>
//         {show &&
            
        
//         <BSIcons.BsEjectFill onClick={handelClick} className={classes.toTop}>
            
//             </BSIcons.BsEjectFill>
// }
//     </div>
//     )
// }
// export default Scroll;