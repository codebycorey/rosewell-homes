export default function Contact() {
    return (
        <section id="contact" className="text-gray-700 bg-gray-100 body-font relative">
            <div className="container px-5 py-10 md:py-24 mx-auto">
                <div className="text-center mb-10 md:mb-20">
                    <h3 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                        Contact
                    </h3>
                </div>
                <div className="flex sm:flex-no-wrap flex-wrap justify-center">
                    <div
                        className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
                        style={{ height: "600px" }}
                    >
                        <iframe
                            className="absolute inset-0"
                            style={{
                                filter:
                                    "grayscale(.2) contrast(1.0) opacity(0.5)",
                            }}
                            title="map"
                            marginHeight={0}
                            marginWidth={0}
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.042104315587!2d-76.23801008434631!3d36.79354087994987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89babd02c83de4a5%3A0xf1804e5536afee09!2s2010%20Old%20Greenbrier%20Rd%20Suite%20H%2C%20Chesapeake%2C%20VA%2023320!5e0!3m2!1sen!2sus!4v1595619769500!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            frameBorder={0}
                        ></iframe>
                        <div className="bg-white relative flex flex-wrap py-6">
                            <div className="lg:w-1/2 px-6">
                                <h3 className="title-font font-medium text-gray-900 tracking-widest text-sm">
                                    ADDRESS
                                </h3>
                                <p className="leading-relaxed">
                                    Rosewell Homes, Inc. <br />
                                    2010 Old Greenbrier Road Suite H <br />
                                    Chesapeake, Va. 23320
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h3 className="title-font font-medium text-gray-900 tracking-widest text-sm">
                                    EMAIL
                                </h3>
                                <a href="mailto:eric@rswll.hrcoxmail.com" className="text-teal-500 leading-relaxed">
                                    eric@rswll.hrcoxmail.com
                                </a>
                                <h3 className="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">
                                    PHONE
                                </h3>
                                <p className="hidden md:block leading-relaxed">757-523-0676</p>
                                <a href="tel:757-523-0676" className="md:hidden text-teal-500 leading-relaxed">757-523-0676</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
