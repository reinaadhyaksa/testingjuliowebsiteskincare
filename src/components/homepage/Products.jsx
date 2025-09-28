const Products = () => {
    const products = [
        {
            id: 1,
            name: "Facial Wash with Charcoal",
            size: "100 ml",
            description: "Pembersih wajah dengan charcoal aktif yang membantu mengangkat kotoran dan minyak berlebih, sekaligus menjaga kulit tetap segar. Cocok digunakan setiap hari untuk pria dengan aktivitas padat.",
            benefits: ["Membersihkan", "Kontrol Minyak", "Rasa Segar"],
            price: "Rp 85.000",
            originalPrice: "Rp 120.000",
            discount: "30%",
            image: "https://res.cloudinary.com/du4wegspv/image/upload/f_auto,q_auto/v1758929497/mosturizer_ua1le7.png",
            badge: "BEST SELLER",
            animation: "fade-right"
        },
        {
            id: 2,
            name: "DNA Salmon Brightening Moisturizer",
            size: "100 ml",
            description: "Moisturizer ringan dengan kandungan DNA Salmon untuk membantu melembapkan sekaligus membuat kulit tampak lebih cerah. Teksturnya cepat meresap tanpa rasa lengket.",
            benefits: ["Mencerahkan", "Melembapkan", "Ringan"],
            price: "Rp 120.000",
            originalPrice: "Rp 150.000",
            discount: "20%",
            image: "https://res.cloudinary.com/du4wegspv/image/upload/f_auto,q_auto/v1758929500/facialwash_xtbzhu.png",
            badge: "NEW",
            animation: "fade-left"
        }
    ]

    const generateWhatsAppMessage = (product) => {
        const message = `Halo! Saya tertarik dengan produk ${product.name} (${product.size}) dengan harga ${product.price}. Apakah produk ini masih tersedia?`;
        return encodeURIComponent(message);
    }

    const getWhatsAppLink = (product) => {
        const phoneNumber = "6281235272436";
        const message = generateWhatsAppMessage(product);
        return `https://wa.me/${phoneNumber}?text=${message}`;
    }

    return (
        <section id="produk" className="py-12 md:py-16 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                        <span className="text-white">Produk </span>
                        <span className="gold-gradient bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                            Utama
                        </span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto px-4">
                        Dua produk perawatan kulit pria yang praktis, simpel, dan efektif untuk menjaga kebersihan serta kesehatan kulit.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {products.map((product) => (
                        <div key={product.id} className="group bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-1">

                            {product.badge && (
                                <div className="absolute top-3 left-3 z-10">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${product.badge === "BEST SELLER" ? "bg-red-500 text-white" : "bg-green-500 text-white"
                                        }`}>
                                        {product.badge}
                                    </span>
                                </div>
                            )}

                            <div className="absolute top-3 right-3 z-10">
                                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                                    {product.discount} OFF
                                </span>
                            </div>

                            <div className="relative h-64 md:h-80 bg-gray-800 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/1024x1536/333333/FFFFFF?text=Product+Image';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-4 md:p-6">
                                <div className="flex justify-between items-start mb-2 md:mb-3">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-1">{product.name}</h3>
                                        <p className="text-gray-400 text-xs md:text-sm">{product.size}</p>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">{product.description}</p>

                                <div className="flex flex-wrap gap-1 md:gap-1.5 mb-3 md:mb-4">
                                    {product.benefits.map((benefit, index) => (
                                        <span key={index} className="bg-yellow-500/10 text-yellow-500 px-1.5 py-0.5 rounded-full text-xs">
                                            {benefit}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-yellow-500 font-bold text-lg md:text-xl">{product.price}</span>
                                            <span className="text-gray-500 line-through text-xs">{product.originalPrice}</span>
                                        </div>
                                        <p className="text-green-400 text-xs">Stok tersedia</p>
                                    </div>
                                    <div className="flex space-x-2">
                                        <a
                                            href={getWhatsAppLink(product)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-green-500 text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-green-600 transition flex items-center text-xs md:text-sm"
                                        >
                                            <i className="fab fa-whatsapp mr-1.5"></i>Beli
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products