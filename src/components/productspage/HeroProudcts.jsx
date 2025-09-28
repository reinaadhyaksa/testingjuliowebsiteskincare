import { Badge, Divider, StatsGrid, ProductCard, BackgroundAnimation } from '../Template';
import { HERO_CONFIG } from '../../data/heroConfig';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className={`relative pt-20 md:pt-10 pb-5 md:pb-10 ${HERO_CONFIG.common.gradient} overflow-hidden mt-5 md:mt-20`}>
            <BackgroundAnimation />

            <div className="container mx-auto px-4 text-center relative z-10">
                <Badge>{HERO_CONFIG.common.badge.content.products}</Badge>

                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight md:leading-snug">
                    <span className="text-white block">Perawatan Wajah</span>
                    <span className="gold-gradient bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent block mt-1 md:mt-2">
                        Untuk Pria Modern
                    </span>
                </h1>

                <div className="mb-6">
                    <Divider />
                    <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-gray-200 leading-relaxed font-light">
                        Temukan rangkaian skincare eksklusif dengan formula khusus pria.
                        <span className="text-yellow-400 font-semibold"> BPOM Terdaftar</span>,
                        memberikan solusi praktis untuk kulit sehat dan percaya diri.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8 md:mb-12">
                    <a href="#produk" className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-yellow-500/30 flex items-center justify-center text-sm sm:text-base w-full sm:w-auto">
                        <i className="fas fa-crown mr-2 sm:mr-3 group-hover:rotate-12 transition-transform" />
                        Lihat Semua Produk
                    </a>
                    <Link to={"/kontak"} className="group bg-transparent border-2 border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold hover:bg-white/10 hover:border-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base w-full sm:w-auto backdrop-blur-sm">
                        <i className="fas fa-comments mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                        Konsultasi Gratis
                    </Link>
                </div>

                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800/50">
                    <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-4 md:mb-6 flex items-center justify-center gap-2">
                        <i className="fas fa-star text-yellow-500 text-xs sm:text-sm" />
                        Produk Unggulan
                        <i className="fas fa-star text-yellow-500 text-xs sm:text-sm" />
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
                        {HERO_CONFIG.products.featured.map((product, index) => (
                            <ProductCard key={index} product={product} index={index} />
                        ))}
                    </div>
                </div>

                <StatsGrid />
            </div>
        </section>
    );
};

export default Hero