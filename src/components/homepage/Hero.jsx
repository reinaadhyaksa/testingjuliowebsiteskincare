import { Badge, Divider, StatsGrid, ProductCard } from '../Template';
import { HERO_CONFIG } from '../../data/heroConfig';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className={`relative pt-20 md:pt-10 pb-5 md:pb-10 ${HERO_CONFIG.common.gradient} overflow-hidden mt-5 md:mt-20`}>
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <Badge>{HERO_CONFIG.common.badge.content.home}</Badge>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-snug">
                        <span className="text-white block">Perawatan Kulit</span>
                        <span className="gold-gradient bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent block mt-2">
                            Untuk Pria Modern
                        </span>
                    </h1>

                    <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed font-light">
                        Produk yang dirancang khusus untuk pria yang peduli pada kesehatan kulit dan penampilan.
                    </p>

                    <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 text-gray-300 leading-relaxed">
                        Koleksi skincare <span className="text-yellow-400 font-semibold">bersertifikat BPOM</span> dengan
                        kombinasi teknologi modern dan bahan alami, memberikan perawatan yang aman dan efektif.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-5 mb-12">
                        <Link to={"/produk"} className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-xl font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-yellow-500/30 flex items-center text-base">
                            <i className="fas fa-crown mr-3 group-hover:rotate-12 transition-transform" />
                            Lihat Produk
                        </Link>
                        <Link to={"/tentang"} className="group bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 hover:border-white transition-all duration-300 transform hover:scale-105 flex items-center text-base backdrop-blur-sm">
                            <i className="fas fa-gem mr-3 group-hover:scale-110 transition-transform" />
                            Tentang Kami
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
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