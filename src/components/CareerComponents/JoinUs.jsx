import { FaCheck } from "react-icons/fa";

const JoinUs = () => {
    
    return (
        <>
        <section className="md:p-32 p-16 bg-gray-100">
            <div className="w-full container mx-auto">
                <div className="grid md:grid-cols-2 p-2 md:gap-20 gap-10">
                    <div>
                        <h1 className="md:text-4xl text-xl text-gray-700 font-semibold">Come work with us</h1>
                        {/* Version 1 */}
                        {/* <p className="text-justify text-gray-700 md:mt-4 md:text-sm text-xs">CAZA Technology Solutions Inc. is a core banking consultancy services company founded by banking and IT solution consultants with more than 20+ years of experience throughout Asia, Europe, and Middle East</p> */}
                        
                        {/* Version 2 */}
                        <p className="text-justify text-gray-700 md:mt-4 md:text-sm text-xs">
                            <strong>CAZA Technology Solutions Inc.</strong> is a core banking consultancy company founded by
                            experienced banking and IT professionals with over 20 years of T24 implementation expertise
                            across Asia, Europe, and the Middte East.
                        </p>
                        {/* Version 2 */}
                    </div>

                    <div>
                        <h1 className="md:text-4xl text-xl text-gray-700 font-semibold">Why Join Us?</h1>
                        {/* Version 1 */}
                        {/* <p className="text-justify text-gray-700 md:mt-4 md:text-sm text-xs">Be trained and gain exposure to one of the best core banking solution available in the market. Your skills be honed in becoming an effective core banking consultant.</p> */}
                        {/* <ul className="md:text-sm text-xs mt-4">
                            <li className="flex items-center gap-2"><FaCheck className="text-blue-500" /> Champion the mission</li>
                            <li className="flex items-center gap-2"><FaCheck className="text-blue-500" /> Great career options</li>
                            <li className="flex items-center gap-2"><FaCheck className="text-blue-500" /> Full flexibility of life</li>
                        </ul> */}

                        {/* Version 2 */}
                        <p className="text-justify text-gray-700 md:mt-4 md:text-sm text-xs">
                            Get trained and gain hands-on experience with one of the leading core banking
                            solutions in the market. At CAZA, you'll sharpen your skills and grow into a highly
                            effective core banking consultant.
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4 text-xs md:text-sm">
                            <li className="flex items-start gap-2">
                                <FaCheck className="text-blue-500 mt-1 text-[0.875rem] md:text-sm" />
                                <span>
                                    <strong>Champion the mission</strong> – Be part of a team that drives digital transformation in
                                    banking through the implementation of T24/Transact.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheck className="text-blue-500 mt-1 text-[0.875rem] md:text-sm" />
                                <span>
                                    <strong>Explore Great Career Opportunities</strong> – Unlock pathways for growth, learning,
                                    and leadership.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheck className="text-blue-500 mt-1 text-[0.875rem] md:text-sm" />
                                <span>
                                    <strong>Enjoy Life Flexibility</strong> – Achieve a fulfilling work-life balance on your own terms.
                                </span>
                            </li>
                        </ul>
                        {/* Version 2 */}
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full md:p-24 p-16 new_about">
            <div className="text-gray-100 grid md:grid-cols-3 justify-items-center items-center container mx-auto">
                <span className="font-semibold md:text-5xl text-xl md:h-44 h-24 border-4 md:col-span-1 col-auto border-white md:w-44 w-24 flex items-center justify-center rounded-full bg-white bg-opacity-45">100%</span>
                {/* Version 1 */}
                {/* <p className="md:text-lg text-sm md:col-span-2 col-auto mt-5 md:mt-0"><b>CAZA Technology Solutions Inc.</b> deliver value to all the stakeholders and will attain excellence and leadership through such delivery of value. We strive to support the stakeholders in all activities related to us.</p>                         */}
            
                {/* Version 2 */}
                    <p className="md:text-lg text-sm md:col-span-2 col-auto mt-5 md:mt-0">
                        <strong>CAZA Technology Solutions Inc.</strong> is committed to delivering exceptional value to all
                        stakeholders. Through this unwavering dedication, we aim to achieve excellence and industry
                        leadership. We actively support our stkeholders in all related endeavors, ensuring collaborative
                        success and long-term partnerships.
                    </p>
                {/* Version 2 */}
            </div>
        </section>
        </>
    )
}

export default JoinUs;