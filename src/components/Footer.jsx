const Footer = () => {
    return (
        <footer className="bg-black py-6 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-3 md:mb-0">
                        <a href="/" className="flex items-center">
                            <h2 className="text-xl md:text-2xl font-bold">
                                <span className="text-white">AHOER</span>
                                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">COOL</span>
                            </h2>
                            <span className="ml-2 text-xs md:text-sm text-gray-400">FOR MEN</span>
                        </a>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-gray-400 text-sm md:text-base">© 2023 Ahoer Cool For Men. All rights reserved.</p>
                        <p className="text-gray-500 text-xs md:text-sm mt-1">Skincare Premium untuk Pria Modern</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer