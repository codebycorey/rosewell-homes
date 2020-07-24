
export default function Services() {
    return (
        <section id="services" className="text-gray-700 body-font">
            <div className="container px-5 py-10 md:py-24 mx-auto">
                <div className="text-center mb-10 md:mb-20">
                    <h3 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Services</h3>
                </div>
                <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center md:mr-8">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-teal-400 mb-5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-current text-white" viewBox="0 0 20 20">
                                <path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z" />
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Commercial</h2>
                            <p className="leading-relaxed text-base">Rosewell brings first-hand knowledge of commercial building ownership, property management and annual
                                budgets. Rosewell provides open communication, exceptional service and delivery of the right product for  the right price.</p>
                            <ul className="mt-5">
                                <li className="border-b-2 border-gray-400">Office Build-Out</li>
                                <li className="border-b-2 border-gray-400">Tenant Improvements</li>
                                <li className="border-b-2 border-gray-400">Building Maintenance Services</li>
                                <li className="border-b-2 border-gray-400">LED Lighting Conversions</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center md:ml-8">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-teal-400 mb-5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-current text-white" viewBox="0 0 20 20">
                                <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" />
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Residential</h2>
                            <p className="leading-relaxed text-base">Rosewell has well over 38 years’ experience in the home building and remodeling business. Your home is comprised of over
                                3000 puzzle pieces, and Rosewell knows how they all go together to work in harmony with each other.</p>
                            <ul className="mt-5">
                                <li className="border-b-2 border-gray-400">Kitchen Remodel</li>
                                <li className="border-b-2 border-gray-400">Bathroom Remodel</li>
                                <li className="border-b-2 border-gray-400">Whole House Remodel / Update</li>
                                <li className="border-b-2 border-gray-400">Exterior Doors and Windows</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
