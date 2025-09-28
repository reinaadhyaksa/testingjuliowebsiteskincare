export const ContactSection = () => {
    return (
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse-slow"></div>
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-yellow-300 rounded-full mix-blend-soft-light filter blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="absolute inset-0 opacity-3">
                <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center justify-center mb-4">
                        <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mr-3 md:mr-4"></div>
                        <span className="text-yellow-500 font-semibold uppercase tracking-wider text-xs md:text-sm">Koneksi Premium</span>
                        <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent ml-3 md:ml-4"></div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Informasi</span>
                        <span className="gold-gradient bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent block mt-2">
                            Kontak Kami
                        </span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
                        Hubungi tim profesional kami untuk konsultasi produk, pemesanan, atau informasi lebih lanjut tentang Ahoer Cool For Men
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {/* WhatsApp Card */}
                    <div className="group">
                        <div className="contact-card bg-gradient-to-br from-gray-900/90 to-black/90 border border-yellow-500/20 rounded-2xl p-6 md:p-8 text-center backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/20">
                                    <i className="fab fa-whatsapp text-2xl md:text-3xl text-white"></i>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">WhatsApp Business</h3>
                                <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                                    Konsultasi langsung dengan ahli skincare kami via WhatsApp. Respon cepat dalam 5 menit.
                                </p>

                                <div className="mt-auto">
                                    <a href="https://wa.me/6281234567890" className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold hover:from-green-400 hover:to-green-500 transition-all duration-300 transform group-hover:scale-105 shadow-lg shadow-green-500/30 w-full text-sm md:text-base">
                                        <i className="fab fa-whatsapp mr-2 text-lg"></i>
                                        +62 812-3456-7890
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="group">
                        <div className="contact-card bg-gradient-to-br from-gray-900/90 to-black/90 border border-yellow-500/20 rounded-2xl p-6 md:p-8 text-center backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/20">
                                    <i className="fas fa-envelope text-2xl md:text-3xl text-white"></i>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Email Professional</h3>
                                <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                                    Kirim pertanyaan detail, feedback, atau kerja sama melalui email resmi kami.
                                </p>

                                <div className="mt-auto">
                                    <a href="mailto:info@ahoercool.com" className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold hover:from-red-400 hover:to-red-500 transition-all duration-300 transform group-hover:scale-105 shadow-lg shadow-red-500/30 w-full text-sm md:text-base">
                                        <i className="fas fa-envelope mr-2 text-lg"></i>
                                        info@ahoercool.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Office Card */}
                    <div className="group">
                        <div className="contact-card bg-gradient-to-br from-gray-900/90 to-black/90 border border-yellow-500/20 rounded-2xl p-6 md:p-8 text-center backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                                    <i className="fas fa-map-marker-alt text-2xl md:text-3xl text-white"></i>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Kantor Pusat</h3>
                                <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                                    Kantor utama Ahoer Cool For Men di Jakarta. Professional dan mudah diakses.
                                </p>

                                <div className="mt-auto">
                                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 text-sm md:text-base">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg"></i>
                                        Jakarta, Indonesia
                                    </div>
                                    <p className="text-gray-400 text-xs md:text-sm mt-3">
                                        📍 Central Business District
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Operating Hours */}
                <div className="mt-12 md:mt-16 text-center">
                    <div className="bg-gradient-to-r from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto backdrop-blur-sm">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center justify-center gap-3">
                            <i className="fas fa-clock text-yellow-500"></i>
                            Jam Operasional Layanan
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
                            <div>
                                <h4 className="text-yellow-500 font-semibold mb-2 text-sm md:text-base">Konsultasi WhatsApp</h4>
                                <p className="text-gray-300 text-sm md:text-base">Setiap Hari: 08:00 - 22:00 WIB</p>
                                <p className="text-green-400 text-xs md:text-sm mt-1">
                                    <i className="fas fa-check-circle mr-1"></i>
                                    Respon cepat 24/7 untuk pemesanan
                                </p>
                            </div>
                            <div>
                                <h4 className="text-yellow-500 font-semibold mb-2 text-sm md:text-base">Layanan Email</h4>
                                <p className="text-gray-300 text-sm md:text-base">Senin - Jumat: 09:00 - 18:00 WIB</p>
                                <p className="text-green-400 text-xs md:text-sm mt-1">
                                    <i className="fas fa-check-circle mr-1"></i>
                                    Balasan maksimal 2 jam kerja
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}