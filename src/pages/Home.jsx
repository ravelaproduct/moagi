import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Timer, Sparkles, Shirt } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Moagi Laundry - Jasa Laundry Profesional & Terpercaya</title>
                <meta name="description" content="Jasa laundry terbaik dengan layanan antar jemput. Bersih, wangi, dan rapi untuk kepuasan Anda." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-sky-50 via-white to-sky-100/50 py-20 lg:py-28 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <motion.div
                            className="lg:w-1/2 text-center lg:text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm">
                                ✨ Solusi Laundry #1 di Kota Anda
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                                Pakaian Bersih, <br className="hidden lg:block" />
                                <span className="text-sky-500">Wangi & Rapi</span> <br className="hidden lg:block" />
                                Tanpa Ribet.
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Layanan laundry profesional dengan fasilitas antar jemput gratis. Kami merawat pakaian Anda dengan teknologi modern dan deterjen premium.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-bold rounded-xl shadow-lg hover:bg-sky-600 hover:shadow-sky-200/50 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    Pesan Sekarang
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                                <Link
                                    to="/layanan"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-bold rounded-xl shadow border border-slate-200 hover:bg-slate-50 transition-all duration-300"
                                >
                                    Lihat Layanan
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:w-1/2 relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="aspect-square rounded-full bg-sky-100/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-3xl -z-10" />
                            {/* Abstract Illustration Representation */}
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-12">
                                    <div className="bg-white p-6 rounded-2xl shadow-xl">
                                        <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 text-sky-600">
                                            <Timer className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-slate-800">Cepat</h3>
                                        <p className="text-sm text-slate-500">Selesai tepat waktu sesuai janji</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-xl">
                                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 text-yellow-600">
                                            <Sparkles className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-slate-800">Bersih</h3>
                                        <p className="text-sm text-slate-500">Noda membandel hilang seketika</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-white p-6 rounded-2xl shadow-xl">
                                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                                            <Shirt className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-slate-800">Rapi</h3>
                                        <p className="text-sm text-slate-500">Setrika uap anti kusut</p>
                                    </div>
                                    <div className="bg-sky-600 p-6 rounded-2xl shadow-xl text-white">
                                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                                            <Truck className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="font-bold">Antar Jemput</h3>
                                        <p className="text-sm text-sky-100">Gratis untuk area tertentu</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-white fill-current">
                        <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Proses Kami</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">Cara Kerja Moagi Laundry</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop Only) */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-sky-100 -z-10 w-full" />

                        {[
                            { step: '01', title: 'Hubungi Kami', desc: 'Pesan via WhatsApp atau Website' },
                            { step: '02', title: 'Pick Up', desc: 'Kurir kami menjemput pakaian kotor' },
                            { step: '03', title: 'Proses Cuci', desc: 'Dicuci, dikeringkan & disetrika' },
                            { step: '04', title: 'Delivery', desc: 'Pakaian bersih diantar kembali' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <div className="w-16 h-16 mx-auto bg-sky-50 rounded-full flex items-center justify-center text-xl font-bold text-sky-600 mb-6 group-hover:scale-110 transition-transform duration-300 border-4 border-white shadow-sm ring-4 ring-sky-50">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-slate-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Highlight */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div className="max-w-2xl">
                            <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">Layanan Unggulan</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">Solusi Mencuci untuk Semua Kebutuhan</h2>
                        </div>
                        <Link to="/layanan" className="hidden md:flex items-center text-sky-600 font-semibold hover:text-sky-700">
                            Lihat Semua Layanan <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Cuci Komplit', price: 'Mulai Rp 6.000/kg', desc: 'Cuci bersih, kering, dan setrika rapi. Siap pakai langsung masuk lemari.' },
                            { title: 'Cuci Bedcover', price: 'Mulai Rp 25.000', desc: 'Perawatan khusus untuk bedcover dan selimut tebal agar tetap lembut.' },
                            { title: 'Cuci Sepatu', price: 'Mulai Rp 35.000', desc: 'Deep cleaning untuk sepatu kesayangan Anda agar terlihat baru kembali.' }
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6">
                                    <Sparkles className="w-7 h-7 text-yellow-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">{service.title}</h3>
                                <p className="text-sky-600 font-semibold mb-4">{service.price}</p>
                                <p className="text-slate-500 mb-6">{service.desc}</p>
                                <Link to="/layanan" className="text-slate-900 font-medium hover:text-sky-600 inline-flex items-center">
                                    Pelajari Lebih Lanjut <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/layanan" className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700">
                            Lihat Semua Layanan <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-sky-600 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                            </svg>
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pakaian Kotor Numpuk? Serahkan pada Kami!</h2>
                            <p className="text-sky-100 text-lg mb-10">Nikmati waktu luang Anda bersama keluarga, biarkan Moagi Laundry yang mengurus cucian Anda.</p>
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center px-10 py-5 bg-yellow-300 text-yellow-900 font-bold rounded-xl shadow-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 text-lg"
                            >
                                Hubungi Lewat WhatsApp
                                <ArrowRight className="ml-2 w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
