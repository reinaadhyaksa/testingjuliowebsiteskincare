import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `Halo! Saya ${formData.name}.\n\nSaya ingin ${getSubjectText(formData.subject)}.\n\n📋 *Detail Pesan:*\n${formData.message}\n\n📞 *Kontak Saya:*\n• WhatsApp: ${formData.phone}\n• Email: ${formData.email}\n\nTerima kasih!`;

        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "6281235272436";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk mengirim pesan.');

        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    }

    const getSubjectText = (subjectValue) => {
        const subjects = {
            'konsultasi': 'konsultasi produk skincare',
            'pemesanan': 'melakukan pemesanan produk',
            'keluhan': 'memberikan keluhan atau saran',
            'kerjasama': 'membahas peluang kerjasama',
            'lainnya': 'berbicara mengenai hal lainnya'
        };
        return subjects[subjectValue] || 'berbicara mengenai suatu hal';
    }

    const contactMethods = [
        {
            icon: "fab fa-whatsapp",
            title: "WhatsApp",
            info: "+62 812-3456-7890",
            link: "https://wa.me/6281235272436",
            color: "text-green-500",
            bgColor: "bg-green-500/10",
            hoverColor: "hover:bg-green-500/20"
        },
        {
            icon: "fab fa-instagram",
            title: "Instagram",
            info: "@ahoercoolformen",
            link: "https://instagram.com/ahoercoolformen",
            color: "text-pink-500",
            bgColor: "bg-pink-500/10",
            hoverColor: "hover:bg-pink-500/20"
        },
        {
            icon: "fas fa-envelope",
            title: "Email",
            info: "hello@ahoercool.com",
            link: "mailto:hello@ahoercool.com",
            color: "text-yellow-500",
            bgColor: "bg-yellow-500/10",
            hoverColor: "hover:bg-yellow-500/20"
        },
        {
            icon: "fas fa-map-marker-alt",
            title: "Alamat",
            info: "Jakarta, Indonesia",
            link: "#",
            color: "text-red-500",
            bgColor: "bg-red-500/10",
            hoverColor: "hover:bg-red-500/20"
        }
    ]

    return (
        <section id="kontak" className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                        <span className="text-white">Hubungi </span>
                        <span className="gold-gradient bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                            Kami
                        </span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
                        Tim customer service kami siap membantu menjawab pertanyaan dan memberikan konsultasi skincare gratis.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {/* Left Column - Contact Info */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center">
                            <i className="fas fa-headset mr-2 md:mr-3 text-yellow-500 text-lg md:text-xl"></i>
                            Informasi Kontak
                        </h3>

                        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                            {contactMethods.map((method, index) => (
                                <a
                                    key={index}
                                    href={method.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center space-x-3 md:space-x-4 p-3 md:p-4 ${method.bgColor} rounded-xl border border-gray-700 ${method.hoverColor} transition-all duration-300 group hover:scale-105 hover:shadow-lg`}
                                >
                                    <div className={`${method.color} text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300`}>
                                        <i className={method.icon}></i>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-semibold text-base md:text-lg">{method.title}</h4>
                                        <p className="text-gray-300 text-sm md:text-base">{method.info}</p>
                                    </div>
                                    <div className={`${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm md:text-base`}>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Operating Hours */}
                        <div className="bg-black/50 p-4 md:p-6 rounded-xl border border-gray-700 backdrop-blur-sm">
                            <h4 className="text-white font-semibold mb-3 md:mb-4 flex items-center text-base md:text-lg">
                                <i className="fas fa-clock mr-2 text-yellow-500"></i>
                                Jam Operasional
                            </h4>
                            <div className="space-y-2 md:space-y-3">
                                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                                    <span className="text-gray-300 text-sm md:text-base">Senin - Jumat</span>
                                    <span className="text-white font-medium bg-green-500/20 px-2 py-1 rounded-full text-xs md:text-sm">08:00 - 17:00 WIB</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                                    <span className="text-gray-300 text-sm md:text-base">Sabtu</span>
                                    <span className="text-white font-medium bg-blue-500/20 px-2 py-1 rounded-full text-xs md:text-sm">09:00 - 15:00 WIB</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-gray-300 text-sm md:text-base">Minggu</span>
                                    <span className="text-red-400 font-medium bg-red-500/20 px-2 py-1 rounded-full text-xs md:text-sm">Tutup</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Response Note */}
                        <div className="mt-4 md:mt-6 p-3 md:p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                            <div className="flex items-start space-x-2 md:space-x-3">
                                <i className="fas fa-bolt text-yellow-500 mt-0.5 md:mt-1 text-sm md:text-base"></i>
                                <div>
                                    <p className="text-yellow-500 font-semibold text-xs md:text-sm">Respon Cepat!</p>
                                    <p className="text-yellow-400/80 text-xs">Biasanya kami merespon dalam 5-15 menit pada jam operasional</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-gradient-to-br from-gray-900/80 to-black/80 p-5 md:p-8 rounded-xl md:rounded-2xl border border-gray-700 backdrop-blur-sm shadow-2xl">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center">
                            <i className="fas fa-paper-plane mr-2 md:mr-3 text-yellow-500 text-lg md:text-xl"></i>
                            Kirim Pesan via WhatsApp
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium md:font-semibold text-sm md:text-base" htmlFor="name">
                                        <i className="fas fa-user mr-2 text-yellow-500"></i>
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition duration-300 text-sm md:text-base"
                                        placeholder="Masukkan nama lengkap"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium md:font-semibold text-sm md:text-base" htmlFor="email">
                                        <i className="fas fa-envelope mr-2 text-yellow-500"></i>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition duration-300 text-sm md:text-base"
                                        placeholder="email@contoh.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 font-medium md:font-semibold text-sm md:text-base" htmlFor="phone">
                                    <i className="fab fa-whatsapp mr-2 text-green-500"></i>
                                    Nomor WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition duration-300 text-sm md:text-base"
                                    placeholder="+62 812-3456-7890"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 font-medium md:font-semibold text-sm md:text-base" htmlFor="subject">
                                    <i className="fas fa-tag mr-2 text-yellow-500"></i>
                                    Subjek
                                </label>
                                <select
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition duration-300 text-sm md:text-base"
                                    required
                                >
                                    <option value="">Pilih Subjek</option>
                                    <option value="konsultasi">Konsultasi Produk</option>
                                    <option value="pemesanan">Pemesanan & Pengiriman</option>
                                    <option value="keluhan">Keluhan & Saran</option>
                                    <option value="kerjasama">Peluang Kerjasama</option>
                                    <option value="lainnya">Lainnya</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 font-medium md:font-semibold text-sm md:text-base" htmlFor="message">
                                    <i className="fas fa-comment mr-2 text-yellow-500"></i>
                                    Pesan
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition duration-300 resize-none text-sm md:text-base"
                                    placeholder="Ceritakan kebutuhan skincare Anda..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 md:py-4 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 text-sm md:text-base"
                            >
                                <i className="fab fa-whatsapp mr-2 md:mr-3 group-hover:scale-110 transition-transform"></i>
                                KIRIM VIA WHATSAPP
                                <i className="fas fa-arrow-right ml-2 md:ml-3 group-hover:translate-x-1 transition-transform"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact