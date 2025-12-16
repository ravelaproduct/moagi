import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shirt, Sparkles, Clock, CheckCircle } from 'lucide-react';

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

export default function Services() {
    return (
        <>
            <Helmet>
                <title>Layanan Kami - Moagi Laundry</title>
                <meta name="description" content="Daftar layanan laundry lengkap: kiloan, satuan, sepatu, bedcover, dan karpet." />
            </Helmet>

            <section className="bg-sky-50 py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">Layanan Kami</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Pilih layanan yang sesuai dengan kebutuhan pakaian dan barang kesayangan Anda.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.id}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-sky-200 transition-all duration-300 flex flex-col h-full"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-sky-50 rounded-xl text-sky-600">
                                        <Shirt className="w-6 h-6 " />
                                    </div>
                                    {service.title.includes('Express') && (
                                        <div className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> Kilat
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                                <div className="text-sky-600 font-bold text-lg mb-4">{service.price}</div>
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

                    {/* CTA Banner inside Services */}
                    <div className="mt-20 bg-sky-600 rounded-3xl p-8 md:p-12 text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Bingung Pilih Layanan?</h2>
                        <p className="text-sky-100 mb-8">Konsultasikan kebutuhan laundry Anda dengan admin kami.</p>
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3 bg-white text-sky-600 font-bold rounded-xl shadow hover:bg-sky-50 transition-colors"
                        >
                            Chat Admin Sekarang
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
