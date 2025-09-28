export const FAQ = () => {
    const faqData = [
        {
            question: "Bagaimana cara memesan produk Ahoer Cool?",
            answer: "Anda dapat memesan produk Ahoer Cool melalui WhatsApp dengan menghubungi nomor yang tertera di atas atau melalui marketplace resmi kami seperti Tokopedia, Shopee, dan Blibli."
        },
        {
            question: "Apakah produk Ahoer Cool aman untuk kulit sensitif?",
            answer: "Ya, produk Ahoer Cool telah terdaftar BPOM dan diformulasikan khusus untuk kulit pria, termasuk kulit sensitif. Namun, kami menyarankan untuk melakukan tes alergi terlebih dahulu dengan mengoleskan sedikit produk pada area kulit yang kecil."
        },
        {
            question: "Berapa lama waktu pengiriman?",
            answer: "Waktu pengiriman bervariasi tergantung lokasi dan kurir yang dipilih. Untuk area Jabodetabek biasanya 1-2 hari, sedangkan luar Jawa 3-7 hari kerja. Pengiriman same-day delivery tersedia untuk area tertentu."
        },
        {
            question: "Apakah tersedia konsultasi skincare gratis?",
            answer: "Ya, tim ahli kami siap memberikan konsultasi gratis melalui WhatsApp untuk membantu Anda memilih produk yang sesuai dengan jenis kulit dan kebutuhan. Konsultasi tersedia setiap hari pukul 08.00 - 22.00 WIB."
        },
        {
            question: "Bagaimana cara penggunaan produk yang benar?",
            answer: "Untuk hasil optimal, gunakan produk secara rutin sesuai urutan: cleanser → toner → serum → moisturizer. Pastikan wajah bersih sebelum aplikasi dan gunakan sunscreen di pagi hari."
        },
        {
            question: "Apakah produk Ahoer Cool sudah halal?",
            answer: "Ya, semua produk Ahoer Cool telah mendapatkan sertifikat halal dari MUI dan telah terdaftar resmi di BPOM RI."
        },
        {
            question: "Bagaimana kebijakan retur dan refund?",
            answer: "Kami menerima retur untuk produk yang masih tersegel dalam kondisi baik maksimal 7 hari setelah penerimaan. Untuk produk yang sudah dibuka, dapat ditukar dengan produk lain jika terdapat kecacatan produk."
        },
        {
            question: "Apakah ada promo atau diskon khusus member?",
            answer: "Ya, kami memiliki program loyalitas member dengan berbagai benefit seperti diskon khusus, early access ke produk baru, free consultation, dan points yang dapat ditukarkan dengan produk."
        }
    ];

    const toggleFAQ = (index) => {
        const element = document.getElementById(`faq-${index}`);
        const icon = document.getElementById(`icon-${index}`);

        if (element && icon) {
            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden');
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                element.classList.add('hidden');
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        }
    };

    return (
        <section id="faq" className="relative py-16 md:py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-1/4 w-64 h-64 md:w-80 md:h-80 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-1/4 w-56 h-56 md:w-64 md:h-64 bg-yellow-300 rounded-full mix-blend-soft-light filter blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="absolute inset-0 opacity-3">
                <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M11 11h22v22H11V11zm28 28h22v22H39V39zm28-28h22v22H67V11zm0 28h22v22H67V39zM11 67h22v22H11V67zm28 0h22v22H39V67zm28 0h22v22H67V67z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center justify-center mb-4">
                        <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mr-3 md:mr-4"></div>
                        <span className="text-yellow-500 font-semibold uppercase tracking-wider text-xs md:text-sm">Bantuan & Support</span>
                        <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent ml-3 md:ml-4"></div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Pertanyaan</span>
                        <span className="gold-gradient bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent block mt-2">
                            Yang Sering Diajukan
                        </span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
                        Temukan jawaban untuk pertanyaan umum seputar produk, pemesanan, dan layanan Ahoer Cool For Men
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className="group cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700 rounded-xl p-5 md:p-6 hover:border-yellow-500/30 transition-all duration-300 backdrop-blur-sm">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-base md:text-lg font-semibold text-white mb-2 pr-8 leading-relaxed">
                                                {faq.question}
                                            </h3>
                                            <div id={`faq-${index}`} className="hidden transition-all duration-300">
                                                <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent my-3"></div>
                                                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 bg-yellow-500/10 rounded-full flex items-center justify-center group-hover:bg-yellow-500/20 transition-all duration-300 ml-3"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleFAQ(index);
                                            }}
                                        >
                                            <i
                                                id={`icon-${index}`}
                                                className="fas fa-plus text-yellow-500 text-xs transition-transform duration-300"
                                            ></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-8 md:mt-12">
                        <div className="bg-gradient-to-r from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                            <div className="flex items-center justify-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                                    <i className="fas fa-question-circle text-white text-lg"></i>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">
                                    Masih Ada Pertanyaan?
                                </h3>
                            </div>
                            <p className="text-gray-300 mb-6 text-sm md:text-base">
                                Tim support kami siap membantu Anda 7 hari seminggu
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://wa.me/6281235272436"
                                    className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30"
                                >
                                    <i className="fab fa-whatsapp mr-2"></i>
                                    Chat WhatsApp
                                </a>
                                <a
                                    href="mailto:info@ahoercool.com"
                                    className="inline-flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-600"
                                >
                                    <i className="fas fa-envelope mr-2"></i>
                                    Kirim Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}