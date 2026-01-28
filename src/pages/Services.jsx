import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Shirt, Sparkles, Clock, CheckCircle, ChevronDown, Crown, Info } from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Cuci Komplit",
        price: "Rp 6.000 / kg",
        desc: "Layanan paling populer. Pakaian dicuci bersih, dikeringkan, dan disetrika rapi dengan pewangi premium.",
        features: ["Cuci & Kering", "Setrika Uap", "Pewangi Premium", "Packing Rapi"]
    },
    {
        id: 2,
        title: "Cuci Kering Lipat",
        price: "Rp 4.000 / kg",
        desc: "Cocok untuk pakaian sehari-hari yang tidak perlu disetrika. Bersih, wangi, dan langsung dilipat rapi.",
        features: ["Cuci & Kering", "Tanpa Setrika", "Pewangi Standard", "Packing Plastik"]
    },
    {
        id: 3,
        title: "Setrika Saja",
        price: "Rp 4.000 / kg",
        desc: "Sudah mencuci sendiri tapi malas menyetrika? Kami rapikan pakaian Anda dengan setrika uap.",
        features: ["Setrika Uap", "Anti Kusut", "Pewangi Semprot", "Gantung / Lipat"]
    },
    {
        id: 4,
        title: "Express Laundry",
        price: "Rp 10.000 / kg",
        desc: "Layanan kilat selesai dalam 4-6 jam. Solusi tepat untuk kebutuhan mendesak.",
        features: ["Selesai 4-6 Jam", "Prioritas Pengerjaan", "Semua Service", "Antar Jemput Prioritas"]
    },
    {
        id: 5,
        title: "Cuci Bedcover",
        price: "Mulai Rp 25.000",
        desc: "Bedcover berbagai ukuran (Single, Queen, King). Dijamin bersih bebas tungau dan wangi.",
        features: ["Deep Cleaning", "Anti Bakteri", "Kering Sempurna", "Packing Tas Besar"]
    },
    {
        id: 6,
        title: "Cuci Sepatu",
        price: "Mulai Rp 35.000",
        desc: "Perawatan khusus untuk berbagai jenis sepatu (Canvas, Leather, Suede).",
        features: ["Deep Clean", "Whitening (Non-Color)", "Parfum Sepatu", "Detailing"]
    },
    {
        id: 7,
        title: "Cuci Karpet",
        price: "Mulai Rp 15.000 / m²",
        desc: "Bersihkan debu dan kotoran mendalam pada karpet Anda. Kembali cerah dan higienis.",
        features: ["Vacuum Debu", "Shampooing", "Bilas Total", "Kering Total"]
    },
    {
        id: 8,
        title: "Cuci Boneka",
        price: "Mulai Rp 10.000",
        desc: "Boneka kesayangan anak kembali bersih dan aman dipeluk. Menggunakan deterjen aman bayi.",
        features: ["Safe Detergent", "Anti Apek", "Bulu Tetap Lembut", "Bentuk Terjaga"]
    }
];

const premiumCategories = {
    "Layanan Premium": [
        { name: "Baju Anak", price: "Rp12.000" },
        { name: "Baju Olaharaga", price: "Rp22.500" },
        { name: "Baju Renang", price: "Rp18.000" },
        { name: "BH", price: "Rp10.000" },
        { name: "Blazer", price: "Rp25.000" },
        { name: "Blouse S", price: "Rp19.000" },
        { name: "Blouse M/L", price: "Rp22.000" },
        { name: "Celana Jeans", price: "Rp25.000" },
        { name: "Celana Kain", price: "Rp18.000" },
        { name: "Gamis Pendek Payet", price: "Rp35.000" },
        { name: "Gamis Pendek Payet", price: "Rp28.000" },
        { name: "Gaun Panjang", price: "Rp25.000" },
        { name: "Gaun Pendek", price: "Rp20.000" },
        { name: "Jaket Bulu Domba", price: "Rp50.000" },
        { name: "Jaket Jeans", price: "Rp25.000" },
        { name: "Jaket Kain", price: "Rp22.000" },
        { name: "Jaket Kulit Asli", price: "Rp125.000" },
        { name: "Jaket Kulit Sintetis", price: "Rp45.000" },
        { name: "Jas Anak", price: "Rp20.000" },
        { name: "Jas Dewasa", price: "Rp25.000" },
        { name: "Jas Stel", price: "Rp35.000" },
        { name: "Jas Stel", price: "Rp12.000" },
        { name: "Jilbab", price: "Rp12.000" },
        { name: "Kaos Baju", price: "Rp15.000" },
        { name: "Kaos Berkerah", price: "Rp17.000" },
        { name: "Kebaya", price: "Rp25.000" },
        { name: "Kemeja", price: "Rp20.000" },
        { name: "Mukena Tipis 1 Set", price: "Rp18.000" },
        { name: "Mukena Tebal 1 Set", price: "Rp25.000" },
        { name: "Rok", price: "Rp15.000" },
        { name: "Safani Stel", price: "Rp24.000" }
    ],
    "Sepatu": [
        { name: "Sneaker Warna", price: "Rp 55.000" },
        { name: "Sneaker Putih", price: "Rp 65.000" },
        { name: "Sepatu Olahraga", price: "Rp 70.000" },
        { name: "Kulit Sintetis", price: "Rp 80.000" },
        { name: "Kulit Asli", price: "Rp. 110.000" }
    ],
    "Karpet/Kasur": [
        { name: "Karpet Tebal /M2", price: "Rp40.000" },
        { name: "Karpet Tipis /M2", price: "Rp25.000" },
        { name: "Kasur Busa", price: "Rp70.000" },
        { name: "Kasur Lipat", price: "Rp100.000" }
    ],
    "Rumah Tangga": [
        { name: "Bantal Kecil", price: "Rp18.000" },
        { name: "Bantal Standar", price: "Rp30.000" },
        { name: "Bed Pad", price: "Rp22.000" },
        { name: "Bedcover Besar", price: "Rp40.000" },
        { name: "Bedcover Sedang", price: "Rp30.000" },
        { name: "Bedcover Jumbo", price: "Rp50.000" },
        { name: "Boneka Besar", price: "Rp50.000" },
        { name: "Boneka Kecil", price: "Rp25.000" },
        { name: "Boneka Sedang", price: "Rp30.000" },
        { name: "Guling", price: "Rp30.000" },
        { name: "Handuk Besar", price: "Rp18.000" },
        { name: "Handuk Kecil", price: "Rp13.000" },
        { name: "Keset", price: "Rp14.000" },
        { name: "Sajadah Kecil", price: "Rp12.000" },
        { name: "Sajadah Besar", price: "Rp15.000" },
        { name: "Sarung Bantal Guling", price: "Rp10.000" },
        { name: "Sarung Sofa", price: "Rp50.000" },
        { name: "Selimut Tipis", price: "Rp22.000" },
        { name: "Selimut Tipis Kecil", price: "Rp18.000" },
        { name: "Sprey Besar 1 Set", price: "Rp25.000" },
        { name: "Sprey Kecil 1 Set", price: "Rp13.000" },
        { name: "Sprey Kecil 1 Set", price: "Rp20.000" },
        { name: "Sleeping Bag", price: "Rp40.000" },
        { name: "Sleeping Bag", price: "Rp40.000" }
    ]
};

export default function Services() {
    const [isPremiumOpen, setIsPremiumOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState("Layanan Premium");

    return (
        <>
            <Helmet>
                <title>Layanan Kami - Moagi Laundry</title>
                <meta name="description" content="Daftar layanan laundry lengkap: kiloan, satuan, sepatu, bedcover, dan karpet." />
            </Helmet>

            <section className="bg-moagi-teal-50 py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">Layanan Kami</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Pilih layanan yang sesuai dengan kebutuhan pakaian dan barang kesayangan Anda.
                    </p>
                </div>
            </section>

            {/* News Announcement Card */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-r from-moagi-teal-500 to-moagi-teal-600 rounded-2xl p-5 md:p-8 shadow-lg"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div className="p-3 bg-white/20 rounded-full">
                                    <Info className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-moagi-lime-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">New</span>
                                    <h3 className="text-lg md:text-2xl font-bold text-white">Self Service Laundry</h3>
                                </div>
                                <p className="text-moagi-teal-50 text-sm md:text-lg">
                                    Sekarang tersedia layanan <span className="font-semibold">Self Service Laundry</span> di <span className="font-semibold">Kalibata Apartment</span>. Cuci sendiri dengan mesin modern dan hemat!
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.id}
                                className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-moagi-teal-200 transition-all duration-300 flex flex-col h-full"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-moagi-teal-50 rounded-xl text-moagi-teal-600">
                                        <Shirt className="w-6 h-6 " />
                                    </div>
                                    {service.title.includes('Express') && (
                                        <div className="px-3 py-1 bg-moagi-lime-100 text-moagi-lime-700 text-xs font-bold rounded-full flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> Kilat
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                                <div className="text-moagi-teal-600 font-bold text-lg mb-4">{service.price}</div>
                                <p className="text-slate-500 text-sm mb-6 flex-grow">{service.desc}</p>

                                <div className="space-y-3 pt-6 border-t border-slate-100">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Layanan Premium Dropdown */}
                    <div className="mt-16">
                        <motion.button
                            onClick={() => setIsPremiumOpen(!isPremiumOpen)}
                            className="w-full bg-gradient-to-r from-moagi-teal-600 to-moagi-teal-700 rounded-2xl p-5 md:p-8 flex items-center justify-between shadow-lg group hover:shadow-xl transition-all"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                        >
                            <div className="flex items-center gap-4 text-left">
                                <div className="p-3 bg-white/20 rounded-xl text-white">
                                    <Sparkles className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-xl md:text-3xl font-bold text-white mb-1">Price List</h2>
                                    <p className="text-moagi-teal-100 text-xs md:text-base">Daftar lengkap harga layanan spesial kami</p>
                                </div>
                            </div>
                            <motion.div
                                animate={{ rotate: isPremiumOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/10 p-2 rounded-full text-white"
                            >
                                <ChevronDown className="w-6 h-6" />
                            </motion.div>
                        </motion.button>

                        <AnimatePresence>
                            {isPremiumOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="mt-6 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                                        {/* Category Tabs */}
                                        <div className="flex flex-wrap border-b border-slate-200 bg-slate-50">
                                            {Object.keys(premiumCategories).map((category) => (
                                                <button
                                                    key={category}
                                                    onClick={() => setActiveCategory(category)}
                                                    className={`flex-1 min-w-[100px] px-3 py-3 md:px-4 md:py-4 font-semibold text-xs md:text-base transition-all ${activeCategory === category
                                                        ? 'bg-white text-moagi-teal-600 border-b-2 border-moagi-teal-600'
                                                        : 'text-slate-600 hover:bg-white/50 hover:text-moagi-teal-600'
                                                        }`}
                                                >
                                                    {category}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Items Grid */}
                                        <div className="p-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                {premiumCategories[activeCategory].map((item, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: idx * 0.02 }}
                                                        className="flex justify-between items-center p-3 rounded-lg hover:bg-moagi-teal-50 transition-colors border border-transparent hover:border-moagi-teal-200"
                                                    >
                                                        <span className="text-slate-700 font-medium text-sm">{item.name}</span>
                                                        <span className="text-moagi-teal-600 font-bold text-sm whitespace-nowrap ml-4">{item.price}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* CTA Banner inside Services */}
                    <div className="mt-16 md:mt-20 bg-moagi-teal-600 rounded-3xl p-6 md:p-12 text-center text-white">
                        <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">Bingung Pilih Layanan?</h2>
                        <p className="text-moagi-teal-100 mb-6 md:mb-8 text-sm md:text-base">Konsultasikan kebutuhan laundry Anda dengan admin kami.</p>
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3 bg-white text-moagi-teal-600 font-bold rounded-xl shadow hover:bg-moagi-teal-50 transition-colors"
                        >
                            Chat Admin Sekarang
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
