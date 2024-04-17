import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { MdArrowDropUp } from "react-icons/md";
import { useEffect,useState,useContext } from 'react';
import CookiePop from '../components/CookiePop';
import { GlobalContext } from '../helpers/GlobalContext';

const GlobalLayout = () => {

    const { cookieUserResponse,cookiePop } = useContext(GlobalContext);
    const { showCookiePop } = cookiePop;
 
    const [isVisible,setIsVisible] = useState(true);
    const onScrollEvent = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(winScroll > 200) {
            setIsVisible(true)
        } else {
            setIsVisible(false);
        }
    }

    const scrollUp = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        setIsVisible(false);
        window.addEventListener('scroll',onScrollEvent);

        return () => window.removeEventListener('scroll',onScrollEvent); 
    },[]);

    return (
            <main>
            <div className="global__bg w-auto object-cover">
                <Navbar />
                <Outlet />
                { isVisible && <button onClick={scrollUp} className="fixed right-5 bottom-5 text-gray-200  text-4xl animate-bounce bg-blue-500"><MdArrowDropUp /></button> }
                <CookiePop /> 
                { isVisible && <button onClick={scrollUp} className="fixed right-5 bottom-5 text-gray-200 text-4xl animate-bounce bg-blue-500"><MdArrowDropUp /></button> }
                <CookiePop />
                </div>
            </main>
    )
}

export default GlobalLayout;