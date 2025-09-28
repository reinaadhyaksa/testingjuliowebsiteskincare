export const Consultan = () => {
    const sendToWhatsApp = (formData) => {
        const { name, email, subject, message } = formData;
        const phoneNumber = "6281235272436";
        const whatsappMessage = `Halo, saya ${name} (${email}). Saya ingin berkonsultasi tentang: ${subject}. Pesan saya: ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };

        sendToWhatsApp(formData);
        e.target.reset();
    };

    return (
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-soft-light filter blur-xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
            </div>

            <div className="absolute inset-0 opacity-3">
                <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S10 15.523 10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center justify-center mb-4">
                        <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mr-3 md:mr-4"></div>
                        <span className="text-yellow-500 font-semibold uppercase tracking-wider text-xs md:text-sm">Konsultasi Personal</span>
                        <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent ml-3 md:ml-4"></div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Kirim Pesan</span>
                        <span className="gold-gradient bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent block mt-2">
                            Kepada Ahli Kami
                        </span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
                        Dapatkan konsultasi gratis dari ahli skincare pria profesional. Isi form berikut dan kami akan menghubungi Anda.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                        {/* Form Section */}
                        <div className="group">
                            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 border border-yellow-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-500 h-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center mb-6">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mr-3 md:mr-4">
                                            <i className="fas fa-pen-nib text-white text-sm md:text-lg"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white">Form Konsultasi</h3>
                                            <p className="text-gray-400 text-xs md:text-sm">Isi data dengan lengkap untuk hasil terbaik</p>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="contact-form space-y-4 md:space-y-6">
                                        <div className="form-group">
                                            <label className="block text-gray-300 mb-2 md:mb-3 font-medium text-sm md:text-base" htmlFor="name">
                                                <i className="fas fa-user mr-2 text-yellow-500"></i>
                                                Nama Lengkap
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-2 md:py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 placeholder-gray-500 text-sm md:text-base"
                                                placeholder="Masukkan nama lengkap Anda"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label className="block text-gray-300 mb-2 md:mb-3 font-medium text-sm md:text-base" htmlFor="email">
                                                <i className="fas fa-envelope mr-2 text-yellow-500"></i>
                                                Alamat Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-2 md:py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 placeholder-gray-500 text-sm md:text-base"
                                                placeholder="email@contoh.com"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label className="block text-gray-300 mb-2 md:mb-3 font-medium text-sm md:text-base" htmlFor="subject">
                                                <i className="fas fa-tag mr-2 text-yellow-500"></i>
                                                Jenis Konsultasi
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-2 md:py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 appearance-none text-sm md:text-base"
                                                required
                                            >
                                                <option value="" disabled defaultValue className="text-gray-500">Pilih jenis konsultasi</option>
                                                <option value="🔍 Pertanyaan tentang Produk" className="text-white bg-gray-800">🔍 Pertanyaan tentang Produk</option>
                                                <option value="💆 Konsultasi Perawatan Kulit" className="text-white bg-gray-800">💆 Konsultasi Perawatan Kulit</option>
                                                <option value="🤝 Peluang Kerjasama" className="text-white bg-gray-800">🤝 Peluang Kerjasama</option>
                                                <option value="📝 Keluhan atau Masukan" className="text-white bg-gray-800">📝 Keluhan atau Masukan</option>
                                                <option value="✨ Lainnya" className="text-white bg-gray-800">✨ Lainnya</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label className="block text-gray-300 mb-2 md:mb-3 font-medium text-sm md:text-base" htmlFor="message">
                                                <i className="fas fa-comment-dots mr-2 text-yellow-500"></i>
                                                Detail Pesan
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="4"
                                                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-2 md:py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 placeholder-gray-500 resize-none text-sm md:text-base"
                                                placeholder="Jelaskan kebutuhan atau pertanyaan Anda secara detail..."
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 md:py-4 rounded-xl font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-yellow-500/25 flex items-center justify-center group/btn text-sm md:text-base"
                                        >
                                            <i className="fab fa-whatsapp mr-3 group-hover/btn:translate-x-1 transition-transform"></i>
                                            Kirim via WhatsApp
                                            <i className="fas fa-arrow-right ml-2 group-hover/btn:translate-x-1 transition-transform"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="group">
                            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 border border-yellow-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-500 h-auto relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-center mb-6">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3 md:mr-4">
                                            <i className="fas fa-info-circle text-white text-sm md:text-lg"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white">Informasi Layanan</h3>
                                            <p className="text-gray-400 text-xs md:text-sm">Detail lengkap tentang layanan kami</p>
                                        </div>
                                    </div>

                                    {/* Info Card */}
                                    <div className="space-y-6 md:space-y-8">
                                        <div className="info-card bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-4 md:p-6 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300">
                                            <div className="flex items-start">
                                                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mr-3 md:mr-4 mt-1">
                                                    <i className="fas fa-clock text-white text-xs md:text-sm"></i>
                                                </div>
                                                <div>
                                                    <h4 className="text-yellow-500 font-semibold mb-2 md:mb-3 text-base md:text-lg">🕒 Jam Operasional</h4>
                                                    <div className="space-y-1 md:space-y-2">
                                                        <p className="text-gray-300 flex justify-between text-sm md:text-base">
                                                            <span>Senin - Jumat:</span>
                                                            <span className="text-white font-medium">09:00 - 18:00 WIB</span>
                                                        </p>
                                                        <p className="text-gray-300 flex justify-between text-sm md:text-base">
                                                            <span>Sabtu - Minggu:</span>
                                                            <span className="text-white font-medium">10:00 - 16:00 WIB</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Additional Info Cards */}
                                        <div className="info-card bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-4 md:p-6 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300">
                                            <div className="flex items-start">
                                                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3 md:mr-4 mt-1">
                                                    <i className="fas fa-check-circle text-white text-xs md:text-sm"></i>
                                                </div>
                                                <div>
                                                    <h4 className="text-green-400 font-semibold mb-2 md:mb-3 text-base md:text-lg">✅ Keuntungan Konsultasi</h4>
                                                    <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                                                        <li className="text-gray-300 flex items-center">
                                                            <i className="fas fa-star text-yellow-500 mr-2 text-xs"></i>
                                                            Analisis kulit personal
                                                        </li>
                                                        <li className="text-gray-300 flex items-center">
                                                            <i className="fas fa-star text-yellow-500 mr-2 text-xs"></i>
                                                            Rekomendasi produk tepat
                                                        </li>
                                                        <li className="text-gray-300 flex items-center">
                                                            <i className="fas fa-star text-yellow-500 mr-2 text-xs"></i>
                                                            Gratis tanpa biaya
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Social Media */}
                                    <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700/50">
                                        <h4 className="text-yellow-500 font-semibold mb-4 md:mb-6 text-base md:text-lg flex items-center">
                                            <i className="fas fa-share-alt mr-2 md:mr-3 text-sm md:text-base"></i>
                                            Ikuti Perjalanan Kami
                                        </h4>
                                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 md:gap-6">
                                            {[
                                                { icon: 'fab fa-whatsapp', color: 'from-green-500 to-green-600', name: 'WhatsApp', url: 'https://wa.me/6281234567890' },
                                                { icon: 'fab fa-instagram', color: 'from-pink-500 to-pink-600', name: 'Instagram' },
                                                { icon: 'fab fa-facebook', color: 'from-blue-500 to-blue-600', name: 'Facebook' },
                                                { icon: 'fab fa-tiktok', color: 'from-gray-700 to-black', name: 'TikTok' },
                                                { icon: 'fab fa-youtube', color: 'from-red-500 to-red-600', name: 'YouTube' }
                                            ].map((social) => (
                                                <a
                                                    key={social.name}
                                                    href={social.url || "#"}
                                                    target={social.url ? "_blank" : "_self"}
                                                    className="group/social flex flex-col items-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                                                >
                                                    <div className={`w-10 h-10 md:w-12 md:h-12 aspect-square bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center mb-1 md:mb-2 group-hover/social:shadow-lg transition-shadow`}>
                                                        <i className={`${social.icon} text-white text-sm md:text-base`}></i>
                                                    </div>
                                                    <span className="text-xs md:text-xs">{social.name}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}