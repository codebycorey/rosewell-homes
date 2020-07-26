
export default function Hero() {
    return (
        <section className="text-gray-500 bg-gray-900 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <img src="/large-logo-white.png" alt="" />
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mx-auto">
                        Rosewell Homes
                    </h1>
                    <h2 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white mx-auto">
                        Commercial & Residential Contractor
                    </h2>
                    <p>
                        Rosewell opened our doors back in 1981. We started
                        building modest homes and have transformed with the
                        times to meet the demands of both residential remodeling
                        and commercial improvements.
                    </p>
                    <p>
                        We understand the importance of keeping our customers
                        happy- whether you are the Homeowner, Building Owner,
                        Property Management Group or Agent. Your time is
                        valuable. Our promise is reliable, quality work that you
                        know will be completed on time and as scheduled.
                    </p>
                    <p className="py-5">
                        “Success is the sum of small efforts, repeated day in
                        and day out” - Robert Collier
                    </p>
                    <div className="flex justify-center mx-auto">
                        <a
                            href="/#contact"
                            className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg"
                        >
                            contact
                        </a>
                        <a
                            href="/#services"
                            className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
                        >
                            Services
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="/construction.jpg"
                    />
                </div>
            </div>
        </section>
    );
}
