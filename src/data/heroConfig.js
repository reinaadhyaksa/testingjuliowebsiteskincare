export const HERO_CONFIG = {
    common: {
        gradient: "bg-gradient-to-br from-black via-gray-900 to-black",
        badge: {
            base: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-yellow-500/25",
            content: {
                about: "✦ Premium Men's Skincare ✦",
                contact: "✦ Layanan Pelanggan Premium ✦",
                home: "✦ Skincare Pria ✦",
                products: "✦ Premium Men's Skincare ✦"
            }
        },
        divider: "w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4",
        stats: [
            { value: "500+", label: "Pria Percaya Diri" },
            { value: "100%", label: "BPOM Certified" },
            { value: "4.9/5", label: "Premium Rating" }
        ]
    },

    animations: {
        pulse: "animate-pulse-slow",
        hoverScale: "transform hover:scale-105 transition-transform duration-300",
        hoverLift: "transform hover:-translate-y-1 transition-all duration-300"
    },

    products: {
        featured: [
            {
                name: "Facial Wash with Charcoal",
                description: "Membersihkan wajah secara menyeluruh dengan charcoal aktif"
            },
            {
                name: "DNA Salmon Brightening Moisturizer",
                description: "Mencerahkan & melembapkan dengan teknologi DNA Salmon"
            }
        ]
    }
};