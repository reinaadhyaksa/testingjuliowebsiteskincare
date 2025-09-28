import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-95 shadow-lg py-2' : 'bg-black bg-opacity-80 py-3'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="/" className="flex items-center space-x-2">
                        <div className="relative w-10 h-10 md:w-12 md:h-12">
                            <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                    src="https://res.cloudinary.com/du4wegspv/image/upload/f_auto,q_auto/v1758926238/Ahoer-Logo_dc0edf.png"
                                    alt="AHOERCOOL Logo"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none'
                                        e.target.nextSibling.style.display = 'flex'
                                    }}
                                />
                                <div className="hidden w-full h-full items-center justify-center bg-white rounded-full">
                                    <span className="text-black font-bold text-base md:text-lg">AC</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h1 className="text-lg md:text-xl font-bold tracking-wide">
                                <span className="text-white">AHOER</span>
                                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">COOL</span>
                            </h1>
                            <span className="text-[10px] md:text-xs text-gray-300 tracking-wider">FOR MEN</span>
                        </div>
                    </a>
                </div>

                <nav className="hidden lg:flex space-x-6">
                    <Link to={"/"} className="text-white hover:text-yellow-400 transition-all duration-300 font-medium relative group text-sm">
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to={"/produk"} className="text-white hover:text-yellow-400 transition-all duration-300 font-medium relative group text-sm">
                        Produk
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to={"/tentang"} className="text-white hover:text-yellow-400 transition-all duration-300 font-medium relative group text-sm">
                        Tentang
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to={"/kontak"} className="text-white hover:text-yellow-400 transition-all duration-300 font-medium relative group text-sm">
                        Kontak
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </nav>

                <div className="flex items-center space-x-3">
                    <a
                        href="https://wa.me/6281235272436?text=Halo,%20saya%20tertarik%20dengan%20produk%20AHOERCOOL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 text-sm"
                    >
                        <i className="fab fa-whatsapp mr-2"></i>Beli Sekarang
                    </a>

                    <button
                        className="lg:hidden text-white focus:outline-none"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle Menu"
                    >
                        <div className={`w-6 h-5 flex flex-col justify-between transition-transform duration-300 ${isMobileMenuOpen ? 'transform rotate-180' : ''}`}>
                            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            <div className={`lg:hidden bg-black bg-opacity-95 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="container mx-auto px-4 py-3 flex flex-col space-y-2">
                    <Link
                        to={"/"}
                        className="text-white hover:text-yellow-400 transition py-2 border-b border-gray-800 hover:border-yellow-400 text-base"
                        onClick={handleLinkClick}
                    >
                        Home
                    </Link>
                    <Link
                        to={"/produk"}
                        className="text-white hover:text-yellow-400 transition py-2 border-b border-gray-800 hover:border-yellow-400 text-base"
                        onClick={handleLinkClick}
                    >
                        Produk
                    </Link>
                    <Link
                        to={"/tentang"}
                        className="text-white hover:text-yellow-400 transition py-2 border-b border-gray-800 hover:border-yellow-400 text-base"
                        onClick={handleLinkClick}
                    >
                        Tentang
                    </Link>
                    <Link
                        to={"/kontak"}
                        className="text-white hover:text-yellow-400 transition py-2 border-b border-gray-800 hover:border-yellow-400 text-base"
                        onClick={handleLinkClick}
                    >
                        Kontak
                    </Link>
                    <a
                        href="https://wa.me/6281235272436?text=Halo,%20saya%20tertarik%20dengan%20produk%20AHOERCOOL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-2.5 rounded-lg font-medium hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 mt-3 mb-1 mx-2 text-sm"
                        onClick={handleLinkClick}
                    >
                        <i className="fab fa-whatsapp mr-2"></i>Beli Sekarang
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header