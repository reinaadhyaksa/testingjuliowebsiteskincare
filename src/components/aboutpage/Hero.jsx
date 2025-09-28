import { Badge, Divider, StatsGrid, ProductCard, BackgroundAnimation } from '../Template';
import { HERO_CONFIG } from '../../data/heroConfig';

const Hero = () => {
    return (
        <section className={`relative pt-20 md:pt-10 pb-5 md:pb-10 ${HERO_CONFIG.common.gradient} overflow-hidden mt-5 md:mt-20`}>
            <BackgroundAnimation />
            <div className="container mx-auto px-4 text-center relative z-10">
                <Badge>{HERO_CONFIG.common.badge.content.about}</Badge>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug">
                    <span className="text-white block">TENTANG</span>
                    <span className="gold-gradient bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent block mt-2">
                        AHOER COOL
                    </span>
                </h1>

                <div className="mb-6">
                    <Divider />
                    <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-200 leading-relaxed font-light">
                        Brand skincare premium pertama di Indonesia yang secara eksklusif dirancang untuk
                        memenuhi kebutuhan kulit pria modern dengan pendekatan ilmiah dan elegan.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-12">
                    <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-3 sm:px-6 sm:py-3 rounded-full font-semibold shadow-lg shadow-yellow-500/25 transform hover:scale-105 transition-transform duration-300 text-sm sm:text-base w-full sm:w-auto">
                        <i className="fas fa-certificate mr-2" />
                        BPOM Certified
                    </button>
                    <button className="border-2 border-yellow-500 text-yellow-500 px-4 py-3 sm:px-6 sm:py-3 rounded-full font-semibold backdrop-blur-sm hover:bg-yellow-500/10 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
                        <i className="fas fa-crown mr-2" />
                        Premium Quality
                    </button>
                </div>

                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800/50">
                    <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mb-4 md:mb-6 flex items-center justify-center gap-2">
                        <i className="fas fa-star text-yellow-500" />
                        Produk Unggulan
                        <i className="fas fa-star text-yellow-500" />
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
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

export default Hero;