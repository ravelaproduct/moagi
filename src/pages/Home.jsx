import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Timer, Sparkles, Shirt, Clock, MapPin, WashingMachine } from 'lucide-react';
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
            <section className="relative bg-gradient-to-br from-moagi-teal-50 via-white to-moagi-teal-100 pt-24 md:pt-32 pb-16 lg:pb-24 overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-20 right-10 w-48 md:w-72 h-48 md:h-72 bg-moagi-lime-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-moagi-teal-200/30 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        {/* Left Content */}
                        <motion.div
                            className="lg:w-1/2 text-center lg:text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Badge */}
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 mb-6 md:mb-8 rounded-full bg-moagi-lime-500 text-white font-bold text-xs md:text-sm shadow-lg"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                                Solusi Laundry #1 di Kota Anda
                            </motion.div>

                            {/* Headline */}
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4 md:mb-6">
                                Laundry{' '}
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-moagi-lime-600">Bersih</span>
                                    <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full" height="8" viewBox="0 0 200 12" fill="none">
                                        <path d="M2 10C60 2 140 2 198 10" stroke="#A6C85A" strokeWidth="4" strokeLinecap="round" />
                                    </svg>
                                </span>
                                ,{' '}<br />
                                Wangi, dan<br />
                                Tepat Waktu
                            </h1>

                            {/* Description */}
                            <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Layanan laundry profesional dengan sistem pick up & delivery.<br className="hidden md:block" />
                                Praktis, terpercaya, dan siap melayani setiap hari.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-moagi-lime-500 text-white font-bold rounded-full shadow-xl hover:bg-moagi-lime-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
                                >
                                    Pesan Sekarang
                                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                                </a>
                                <Link
                                    to="/layanan"
                                    className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white text-slate-700 font-bold rounded-full shadow-lg border-2 border-slate-200 hover:border-moagi-teal-400 hover:bg-moagi-teal-50 transition-all duration-300 text-sm md:text-base"
                                >
                                    Lihat Layanan
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            className="lg:w-1/2 relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {/* Main Image */}
                            <div className="relative z-10">
                                <img
                                    src="/model.png"
                                    alt="Moagi Laundry Service"
                                    className="w-full h-auto rounded-3xl"
                                />

                                {/* 24H Express Tag - Top Right */}
                                <motion.div
                                    className="absolute top-4 right-4 bg-moagi-lime-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8, type: "spring" }}
                                >
                                    <Timer className="w-4 h-4" />
                                    <span className="font-bold text-sm">24H Express</span>
                                </motion.div>
                            </div>

                            {/* Floating Badge - Bottom Left */}
                            <motion.div
                                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl border-4 border-moagi-teal-100"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1, type: "spring" }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-moagi-teal-100 rounded-full flex items-center justify-center">
                                        <Truck className="w-6 h-6 text-moagi-teal-600" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">Antar Jemput</div>
                                        <div className="text-xs text-slate-500">Gratis Area Tertentu</div>
                                    </div>
                                </div>
                            </motion.div>
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

            {/* NEW: Self Service Laundry Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-moagi-teal-600 to-moagi-teal-700 rounded-3xl p-6 md:p-12 overflow-hidden relative"
                    >
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                            {/* Left Content */}
                            <div className="lg:w-2/3">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-moagi-lime-500 text-white text-xs font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-wide">
                                        Layanan Baru
                                    </span>
                                </div>

                                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                                    Self Service Laundry
                                </h2>

                                <p className="text-moagi-teal-100 text-base md:text-xl mb-4 md:mb-6 max-w-2xl">
                                    Kini hadir layanan <span className="font-semibold text-white">Self Service Laundry</span> di Kalibata Apartment!
                                    Cuci sendiri dengan mesin modern, hemat waktu dan biaya.
                                </p>

                                <div className="flex items-center gap-2 text-moagi-teal-100 mb-6 md:mb-8 text-sm md:text-base">
                                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-moagi-lime-400" />
                                    <span className="font-medium">Kalibata City Apartment, Jakarta Selatan</span>
                                </div>

                                {/* Features */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                    {[
                                        { icon: WashingMachine, label: 'Mesin Modern' },
                                        { icon: Clock, label: 'Buka 24 Jam' },
                                        { icon: Sparkles, label: 'Bersih & Higienis' },
                                        { icon: Timer, label: 'Proses Cepat' }
                                    ].map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-white">
                                            <div className="w-7 h-7 md:w-8 md:h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                                <feature.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                            </div>
                                            <span className="text-xs md:text-sm font-medium">{feature.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <Link
                                    to="/layanan"
                                    className="inline-flex items-center gap-2 bg-white text-moagi-teal-700 font-bold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-moagi-lime-50 transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
                                >
                                    Lihat Detail Layanan
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                                </Link>
                            </div>

                            {/* Right Visual */}
                            <div className="lg:w-1/3 flex justify-center">
                                <motion.div
                                    className="relative"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <div className="w-48 h-48 md:w-56 md:h-56 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                                        <div className="w-36 h-36 md:w-44 md:h-44 bg-white/20 rounded-full flex items-center justify-center">
                                            <WashingMachine className="w-20 h-20 md:w-24 md:h-24 text-white" />
                                        </div>
                                    </div>
                                    {/* Floating elements */}
                                    <motion.div
                                        className="absolute -top-2 -right-2 bg-moagi-lime-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        NEW!
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10 md:mb-16">
                        <span className="text-moagi-teal-600 font-semibold tracking-wider uppercase text-xs md:text-sm">Proses Kami</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mt-2">Cara Kerja Moagi Laundry</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 relative">
                        {/* Connecting Line (Desktop Only) */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-moagi-teal-100 -z-10 w-full" />

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
                                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-moagi-teal-50 rounded-full flex items-center justify-center text-lg md:text-xl font-bold text-moagi-teal-600 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 border-4 border-white shadow-sm ring-4 ring-moagi-teal-50">
                                    {item.step}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-sm md:text-base text-slate-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Highlight */}
            <section className="py-16 md:py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4">
                        <div className="max-w-2xl text-center md:text-left">
                            <span className="text-moagi-teal-600 font-semibold tracking-wider uppercase text-xs md:text-sm">Layanan Unggulan</span>
                            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mt-2">Solusi Mencuci untuk Semua Kebutuhan</h2>
                        </div>
                        <Link to="/layanan" className="hidden md:flex items-center text-moagi-teal-600 font-semibold hover:text-moagi-teal-700">
                            Lihat Semua Layanan <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { title: 'Cuci Komplit', price: 'Mulai Rp 6.000/kg', desc: 'Cuci bersih, kering, dan setrika rapi. Siap pakai langsung masuk lemari.' },
                            { title: 'Cuci Bedcover', price: 'Mulai Rp 25.000', desc: 'Perawatan khusus untuk bedcover dan selimut tebal agar tetap lembut.' },
                            { title: 'Cuci Sepatu', price: 'Mulai Rp 35.000', desc: 'Deep cleaning untuk sepatu kesayangan Anda agar terlihat baru kembali.' }
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-moagi-lime-50 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                                    <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-moagi-lime-600" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">{service.title}</h3>
                                <p className="text-moagi-teal-600 font-semibold mb-3 md:mb-4 text-sm md:text-base">{service.price}</p>
                                <p className="text-slate-500 mb-4 md:mb-6 text-sm md:text-base">{service.desc}</p>
                                <Link to="/layanan" className="text-slate-900 font-medium hover:text-moagi-teal-600 inline-flex items-center text-sm md:text-base">
                                    Pelajari Lebih Lanjut <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/layanan" className="inline-flex items-center text-moagi-teal-600 font-semibold hover:text-moagi-teal-700">
                            Lihat Semua Layanan <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-moagi-teal-600 rounded-3xl md:rounded-[2.5rem] p-8 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                            </svg>
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">Pakaian Kotor Numpuk? Serahkan pada Kami!</h2>
                            <p className="text-moagi-teal-100 text-base md:text-lg mb-8 md:mb-10">Nikmati waktu luang Anda bersama keluarga, biarkan Moagi Laundry yang mengurus cucian Anda.</p>
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-moagi-lime-500 text-white font-bold rounded-xl shadow-lg hover:bg-moagi-lime-600 transform hover:scale-105 transition-all duration-300 text-base md:text-lg"
                            >
                                Hubungi Lewat WhatsApp
                                <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
