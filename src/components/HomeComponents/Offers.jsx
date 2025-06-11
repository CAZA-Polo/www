import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { IoIosArrowDropright } from "react-icons/io";
import { motion } from 'framer-motion';
import animateHook from '../../hooks/animateHook';

const titleVariant = {
    initial: { opacity:0, y:-50, transition:{ duration:0.5 } },
    animate: { opacity:1,y:0, transition:{ duration:0.5 } }
}   

const descVariant = {
    initial: { opacity:0, y:20, transition:{ duration:0.5 } },
    animate: { opacity:1,y:0, transition:{ duration:0.5 } }
}

const cardVariant = {
    initial: { opacity:0, rotateY: 90, transition: { duration: 0.5 } },
    animate: { opacity:1, rotateY:0, transition: { duration: 0.5 } },
}

const Offers = () => {

    const { ref:titleRef,controls:titleControl } = animateHook(titleVariant.animate,titleVariant.initial);
    const { ref:descRef,controls:descControl } = animateHook(descVariant.animate,descVariant.initial);
    const { ref:cardRef,controls:cardControl} = animateHook(cardVariant.animate,cardVariant.initial);

    const [offers,setOffers] = useState([
        {
            id: 1,
            title: 'Staff Augmentation',
            // Version 1
            // description: 'Providing highly skilled, well trained, and experienced T24 consultants to meet the day-to-day IT operational requirements of our clients.',
            // Version 2
            description: (
                <>
                    We provide <strong>highly skilled, well-trained, and experienced T24 consultants</strong> to support the day-to-day IT operational needs of our clients, ensuring reliable and efficient system performance
                </>
            ),
            bgImage: './images/offers/office-workers-banner.jpg'
        },
        {
            id: 2,
            title: 'Onsite Services',
            // Version 1
            // description: 'T24 onsite implementation, development, and support ensuring quality and on-time delivery of projects',

            // Version 2
            description: 'Lead the onsite implementation, development, and support of T24, ensuring high-quality outcomes and timely project delivery.',
            bgImage: './images/offers/maintenance_man.jpg'
        },
        {
            id: 3,
            title: 'Offsite Services',
            // Version 1
            // description: 'T24 offsite development and support. Our offshore model service is a cost effective solution to meet our client\'s requirements',
            
            // Version 2
            description: 'Provides offsite T24 development and support through our offshore delivery model, offering a cost-effective solution tailored to meet client requirements',
            bgImage: './images/offers/DSC0073.jpg'
        },
        {
            id: 4,
            title: '3rd Party Solutions and Interfaces',
            // Version 1
            // description: 'Development of 3rd party solutions and interfaces with T24 core banking using the latest technology and compliance with security and coding standards.',
            
            // Version 2
            description: 'Designed and developed third-party solutions and interfaces integrated with the T24 core banking system, leveraging the latest technologies while ensuring adherence to security protocols and coding standards.',
            bgImage: './images/offers/third-party-app-integration.png'
        },
        {
            id: 5,
            title: 'Skills Enablement and Bootcamp Partnership Programs',
             // Version 1
            // description: 'Provide customer with a customized T24 technical training to build a strong and more engaged workforce during and post implementation',
            
            // Version 2
            description: 'Delivers customized T24 technical training programs to empower clients with a skilled and engaged workforce supporting both implementation and post-deployment phases',
            bgImage: './images/offers/ejkoobxlfcys9tqxpvf4.jpg'
        }

    ])

    return (
        <section className="md:p-24 p-10 container mx-auto">
            <div ref={titleRef} className="text-center flex justify-center">
                <div className="md:w-1/2">
                    <motion.h1 
                    variants={titleVariant}
                    animate={titleControl}
                    initial="initial"
                    className="md:text-5xl text-2xl font-semibold text-gray-700">What we offer</motion.h1>
                    {/* Version 1 */}
                    {/* <motion.p
                    ref={descRef}
                    variants={descVariant}
                    animate={descControl}
                    initial="initial"
                    className="md:text-sm text-xs md:mt-5 mt-2">Onsite and offsite implementation development and support services ensuring quality and cost effective solutions.
                    We also offer staff augmentation.
                    </motion.p> */}

                    {/* Version 2 */}
                    <motion.p
                        ref={descRef}
                        variants={descVariant}
                        animate={descControl}
                        initial="initial"
                        className="md:text-sm text-xs md:mt-5 mt-2">
                            We provide both onsite and offsite implementation, development, and support services delivering high-quality, cost-effective solutions tailored to your needs. Additionally, we offer
                            staff augmentation to help you scale your team with experienced professionals.
                    </motion.p>
                    {/* Version 2 */}
                </div>
            </div>

            {/* For Desktop */}
            <div ref={cardRef} className="md:flex md:flex-wrap justify-center gap-5 mt-10 hidden">
                { offers?.map(offer => (
                    <motion.div key={offer.id}
                    variants={cardVariant}
                    animate={cardControl}
                    initial="initial"
                    className="flex flex-col transition w-1/4 border-2 h-auto border-blue-100 rounded-md shadow-lg overflow-hidden">
                        <div className="w-full h-full overflow-hidden">
                            <img className="w-full h-[199.29px] z-10 object-cover cursor-pointer hover:scale-110 transition" src={offer.bgImage} alt={offer.title} />
                        </div>

                        <div className="p-3 flex flex-col justify-between h-full">
                            <div>
                                <h2 className="font-semibold md:text-lg text-sm">{offer.title}</h2>
                                <p className="md:text-sm text-xs text-justify hyphens-auto">{offer.description}</p>
                            </div>

                            <Link className="mt-3 md:text-sm text-xs text-blue-500 flex items-center gap-1 hover:underline transition font-semibold" to="/services"><IoIosArrowDropright />Learn more</Link>
                        </div>
                    </motion.div>
                )) }
            </div>

            {/* For Mobile */}
            <Carousel className="mt-12 md:hidden block rounded-md overflow-hidden" autoPlay={true} infiniteLoop={true} showThumbs={false} swipeable={true} showIndicators={false}>
                { offers?.map(offer => (
                    <div key={offer.id} className="flex flex-col transition h-full w-full border border-gray-200 rounded-md overflow-hidden">
                        <img className="w-full h-[191.29px] object-cover" src={offer.bgImage} alt={offer.title} />

                        <div className="p-3 flex flex-col justify-between h-full">
                            <div>
                                <h2 className="font-semibold md:text-lg text-sm text-start">{offer.title}</h2>
                                <p className="md:text-sm text-xs text-justify hyphens-auto">{offer.description}</p>
                            </div>

                            <Link className="mt-3 md:text-sm text-xs text-blue-500 flex items-center gap-1 hover:underline transition font-semibold" to="/services"><IoIosArrowDropright />Learn more</Link>
                        </div>
                    </div>
                )) }
            </Carousel>
        </section>
    )
}

export default Offers;  