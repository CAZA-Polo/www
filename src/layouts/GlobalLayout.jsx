import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import { MdArrowDropUp } from "react-icons/md";
import { useEffect,useState } from 'react';

const GlobalLayout = () => {

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
        window.addEventListener('scroll',onScrollEvent)

        return () => window.removeEventListener('scroll',onScrollEvent); 
    },[])

    return (
        <ScrollToTop>
            <main className="bg-gray-100 h-full">
                <Navbar />
                <Outlet />
                { isVisible && <button onClick={scrollUp} className="fixed right-5 bottom-5 text-gray-100 text-4xl animate-bounce caza__blue"><MdArrowDropUp /></button> }
            </main>
        </ScrollToTop>
    )
}

export default GlobalLayout;