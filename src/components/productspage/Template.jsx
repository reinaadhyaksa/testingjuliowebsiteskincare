export const TestimonialCard = ({ testimonial, delay, index }) => {
    return (
        <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-gray-800/30 to-black/50 rounded-2xl p-4 md:p-6 border border-gray-700/50 group-hover:border-yellow-500/30 transition-all duration-300 h-full backdrop-blur-sm">
                <div className="flex mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                        <i
                            key={i}
                            className={`fas fa-star text-xs md:text-sm ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-600'} mr-0.5`}
                        ></i>
                    ))}
                </div>

                <blockquote className="text-gray-300 mb-4 md:mb-6 leading-relaxed italic text-sm md:text-base">
                    "{testimonial.text}"
                </blockquote>

                <div className="flex items-center">
                    <div className="relative">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg">
                            {testimonial.name.charAt(0)}
                        </div>
                        <div className="absolute -inset-1 bg-yellow-500/20 rounded-full blur-sm"></div>
                    </div>
                    <div className="ml-3 md:ml-4">
                        <h4 className="text-white font-semibold text-sm md:text-base">{testimonial.name}</h4>
                        <p className="text-yellow-500 text-xs md:text-sm">{testimonial.age} Tahun • {testimonial.occupation}</p>
                    </div>
                </div>

                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-700/50">
                    <span className="text-gray-400 text-xs">Menggunakan:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                        {testimonial.products.map((product, i) => (
                            <span
                                key={i}
                                className="bg-yellow-500/10 text-yellow-500 px-2 py-0.5 md:py-1 rounded-full text-xs"
                            >
                                {product}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-yellow-500/30 rounded-tr-2xl"></div>
            </div>
        </div>
    );
};