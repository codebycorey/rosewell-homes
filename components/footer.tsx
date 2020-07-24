
export default function Footer() {
    return (
        <footer className="text-gray-300 bg-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap justify-between md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h4 className="title-font font-medium text-white tracking-widest text-sm mb-3">ADDRESS</h4>
                        <address className="text-gray-400 mb-10">
                            Rosewell Homes, Inc. <br />
                            2010 Old Greenbrier Road <br />
                            Suite H <br />
                            Chesapeake, Va. 23320 <br />
                        </address>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h4 className="title-font font-medium text-white tracking-widest text-sm mb-3">CONTACT</h4>
                        <div className="text-gray-400 mb-10">
                            Office: 757-523-0676 ext. 2 <br />
                            Fax: 757-523-0662 <br />
                            Cell: 757-404-1853 <br />
                            Email: eric@rswll.hrcoxmail.com
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h4 className="title-font font-medium text-white tracking-widest text-sm mb-3">License</h4>
                        <div className="list-none mb-10">
                            <p className="text-gray-400">State of Virginia Class A #2705026330</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <img src="/CVBIA.png" alt="CVBIA"/>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-teal-300 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Rosewell Homes</span>
                </a>
                <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">© 2020 Rosewell Homes</p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-gray-600 text-sm">
                    Designed by <a href="https://coreyodonnell.dev" className="text-gray-400 ml-1" target="_blank" rel="noopener noreferrer">coreyodonnell.dev</a>
                </span>
                </div>
            </div>
            </footer>
    )
}
