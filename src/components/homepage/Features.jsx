const Features = () => {
    const features = [
        {
            icon: "fas fa-shield-alt",
            title: "BPOM Terdaftar",
            description: "Produk sudah memiliki izin resmi dari Badan POM, sehingga aman digunakan setiap hari dengan jaminan kualitas terbaik.",
            delay: "200"
        },
        {
            icon: "fas fa-crown",
            title: "Maskulin & Elegan",
            description: "Dirancang khusus untuk pria modern: kuat, percaya diri, dan berkelas dengan formula yang tepat untuk kulit pria.",
            delay: "300"
        },
        {
            icon: "fas fa-shipping-fast",
            title: "Pengiriman Cepat",
            description: "Proses pengiriman ekspres ke seluruh Indonesia dengan packing aman dan rapi untuk menjaga kualitas produk.",
            delay: "400"
        },
        {
            icon: "fas fa-user-check",
            title: "Konsultasi Gratis",
            description: "Tim ahli kami siap membantu konsultasi skincare gratis via WhatsApp untuk rekomendasi produk terbaik.",
            delay: "500"
        },
        {
            icon: "fas fa-award",
            title: "Premium Quality",
            description: "Bahan-bahan pilihan terbaik dengan teknologi modern untuk hasil yang optimal dan terjamin.",
            delay: "600"
        },
        {
            icon: "fas fa-headset",
            title: "Customer Care 24/7",
            description: "Layanan pelanggan siap membantu kapan saja melalui berbagai channel komunikasi yang tersedia.",
            delay: "700"
        }
    ]

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                        <span className="text-white">Mengapa Memilih </span>
                        <span className="gold-gradient bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                            Ahoer Cool?
                        </span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
                        Komitmen kami untuk memberikan pengalaman skincare terbaik bagi pria modern dengan kualitas premium dan pelayanan terdepan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group bg-gradient-to-br from-gray-900 to-black p-5 md:p-6 rounded-xl border border-gray-800 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2">
                            <div className="flex items-start space-x-3 md:space-x-4">
                                <div className="bg-yellow-500/10 p-2 md:p-3 rounded-lg group-hover:bg-yellow-500/20 transition-all duration-300 flex-shrink-0">
                                    <i className={`${feature.icon} text-yellow-500 text-xl md:text-2xl`}></i>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features