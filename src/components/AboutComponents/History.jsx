const History = () => {
    return (
        <section className="md:p-32 p-16 container mx-auto">
            <div className="grid md:grid-cols-2 gap-5 md:gap-0 justify-items-center items-center">
                <div>
                    <h1 className="md:text-3xl text-xl font-semibold text-blue-500">Our History</h1>
                    {/* Version 1 */}
                    {/* <p className="md:text-sm text-xs mt-2 text-justify">
                        CAZA was found in 2016 by banking and IT consultants with more than 20+ years of implementation experience of T24 corebanking solution throughout Asia Pacific and EMEA covering Retail Banking, Corporate Banking, Private Banking, Treasury, Islamic Banking, Microfinance, and Universal Banking.
                    </p> */}
                    
                    {/* Version 2 */}
                    <p className="md:text-sm text-xs mt-2 text-justify">
                        Founded in 2016, CAZA was established by seasoned banking and IT consultants with over 20
                        years of experience implementing the T24 core banking solution across Asia Pacific and EMEA.
                        Our expertise spans a wide range of banking sectors, including Retail Banking, Corporate
                        Banking, Private Banking, Treasury, lslamic Banking, Microfinance, and Universal Banking.
                    </p>
                    {/* Version 2 */}
                </div>
                <img className="md:w-1/2 order-first md:order-last" src="/images/new-caza.jpg" alt="Working Team" />
            </div>
        </section>
    )
}

export default History;