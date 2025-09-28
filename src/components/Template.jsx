import { HERO_CONFIG } from "../data/heroConfig";

// Komponen tambahan dengan font size yang sesuai
const Badge = ({ children, className = "" }) => (
    <div className="mb-4">
        <span className={`inline-block bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${className}`}>
            {children}
        </span>
    </div>
);

const Divider = () => (
    <div className="w-16 h-0.5 bg-yellow-500 my-4 mx-auto" />
);

const StatsGrid = () => (
    <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto pt-6 border-t border-gray-800/50">
        {[
            { value: '10K+', label: 'Pelanggan' },
            { value: '4.9', label: 'Rating' },
            { value: '50+', label: 'Produk' }
        ].map((stat, index) => (
            <div key={index} className="text-center group">
                <div className="text-lg md:text-xl font-bold text-yellow-500 mb-1 transition-transform duration-300 group-hover:scale-110">
                    {stat.value}
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-wider">
                    {stat.label}
                </div>
            </div>
        ))}
    </div>
);

const ProductCard = ({ product, index }) => (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-4 text-left hover:border-yellow-500/40 transition-all duration-300 group hover:transform hover:-translate-y-1">
        <div className="flex items-center mb-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 group-hover:scale-150 transition-transform" />
            <h3 className="text-white font-semibold text-sm">{product.name}</h3>
        </div>
        <p className="text-gray-400 text-xs">{product.description}</p>
    </div>
);

const BackgroundAnimation = () => (
    <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse" />
        <div
            className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300 rounded-full mix-blend-soft-light filter blur-xl animate-pulse"
            style={{ animationDelay: '2s' }}
        />
    </div>
);

export { Badge, Divider, StatsGrid, ProductCard, BackgroundAnimation }