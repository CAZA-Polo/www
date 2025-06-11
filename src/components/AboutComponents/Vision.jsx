const Vision = () => {
    return (
        <section className="md:p-32 p-16 flex flex-col gap-20 container mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-3 justify-items-center md:items-start items-center">
                <div className="col-span-2 md:col-auto">
                    <h1 className="md:text-3xl text-xl font-semibold text-blue-500">Our Vision</h1>
                    {/* Version 1 */}
                    {/* <p className="md:text-sm text-xs mt-2 text-justify text-gray-700">
                        To be the leading IT consultancy, services, and solutions provider to banking and finance institutions not only in the Philippines but throughout Asia Pacific and the rest of the world. We aim to provide good quality and cost effective services and solutions to our clients.
                    </p> */}

                    {/* Version 2 */}
                    <p className="md:text-sm text-xs mt-2 text-justify text-gray-700">
                        Our vision is to be the premier provider of IT consultancy, services, and solutions for banking
                        and financial institutions-not only in the Philippines but across Asia Pacific and globally. We are
                        committed to delivering high-quality, cost-effective solutions that meet the evolving needs of
                        our clients.
                    </p>
                    {/* Version 2 */}
                </div>      
                <img className="md:w-1/2 w-auto" src="/images/about/ESTIEM_Vision_square.png" alt="Vision" /> 
            </div>  

            <div className="grid md:grid-cols-2 grid-cols-3 md:gap-0 gap-5 justify-items-center md:items-start items-center">
                <div className="col-span-2 md:col-auto">
                    {/* Version 1 */}
                    {/* <h1 className="md:text-3xl text-xl font-semibold text-blue-500">What Makes us Different</h1> */}
                    {/* <p className="md:text-sm text-xs mt-2 text-justify text-gray-700">
                        CAZA was found in 2016 by banking and IT consultants with more than 20+ years of implementation experience of T24 corebanking solution throughout Asia Pacific and EMEA covering Retail Banking, Corporate Banking, Private Banking, Treasury, Islamic Banking, Microfinance, and Universal Banking.
                    </p> */}

                    {/* Version 2 */}
                        <h1 className="md:text-3xl text-xl font-semibold text-blue-500">What Sets Us Apart</h1>
                        <p className="md:text-sm text-xs mt-2 text-justify text-gray-700">
                            Founded in 2016, CAZA was established by seasoned banking and IT consultants with over 20
                            years of experience implementing the T24 core banking solution across Asia Pacific and EMEA.
                            Our expertise spans a wide range of banking sectors, including Retail Banking, Corporate
                            Banking, Private Banking, Treasury, Islamic Banking, Microfinance, and Universal Banking.
                        </p>
                    {/* Version 2 */}
                </div>      
                <img className="md:w-1/2 w-auto order-first" src="/images/about/Point-of-difference.jpg" alt="Vision" />
            </div>  

            <div className="grid grid-cols-2 justify-items-center">
                <div>
                    <h1 className="md:text-3xl text-xl font-semibold text-blue-500">Offerings</h1>
                    {/* Version 1 */}
                    {/* <ul className="list-disc text-justify md:text-sm text-xs">
                        <li>T24 implementation, development and support - both Onsite and Offsite</li>
                        <li>Staff Augmentation</li>
                        <li>Development of 3rd party solutions and interfaces with T24</li>
                        <li>Customized T24 technical training</li>
                    </ul> */}

                    {/* Version 2 */}
                    <ul className="space-y-2 list-disc md:text-justify md:text-sm text-xs text-gray-700">
                        <li>
                            <h3 className="md:text-base text-xs font-semibold">End-to-End T24 Implementation, Development, and Support</h3>
                            <p className="text-justify">
                                Comprehensive services delivered both onsite and offsite to ensure seamless
                                deployment and ongoing optimization of the T24 platform.
                            </p>
                        </li>
                        <li>
                            <h3 className="md:text-base text-xs font-semibold">Staff Augmentation</h3>
                            <p className="text-justify">
                                Skilled T24 professionals available to enhance your team's capabilities and
                                accelerate project delivery.
                            </p>
                        </li>
                        <li>
                            <h3 className="md:text-base text-xs font-semibold">Third-Party Integration & Interface Development</h3>
                            <p className="text-justify">
                                Custom development of interfaces and seamless integration with third-party
                                systems to extend T24 functionality.
                            </p>
                        </li>
                        <li>
                            <h3 className="md:text-base text-xs font-semibold">Tailored T24 Technical Training</h3>
                            <p className="text-justify">
                                Customized training programs designed to upskill your team in T24 technologies
                                and best practices.
                            </p>
                        </li>
                    </ul>
                    {/* Version 2 */}
                </div>      
                <img src="/images/about/communication.png" alt="Vision" /> 
            </div>  
            
        </section>
    )
}

export default Vision;