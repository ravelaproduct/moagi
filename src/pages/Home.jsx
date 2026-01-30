import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    ArrowRight, Truck, Timer, Sparkles, Shirt, Clock, MapPin, WashingMachine,
    Wifi, CreditCard, Droplets, Armchair, ShieldCheck, UserCheck, MessageCircle,
    Leaf, Search, Phone, Star, Crown, RefreshCcw, Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <>
            <Helmet>
                <title>Moagi Laundry - Laundry Mudah untuk Gaya Hidup Serba Cepat</title>
                <meta name="description" content="Cuci mandiri atau serahkan pada tim profesional kami. Nikmati kemudahan sistem digital dengan hasil dan pengalaman laundry yang memuaskan." />
            </Helmet>

            {/* 1. HERO SECTION (ABOVE THE FOLD) */}
            <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-20 overflow-hidden bg-slate-50">
                {/* Dynamic Background */}
                <div className="absolute top-0 left-0 right-0 h-full overflow-hidden z-0">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-moagi-teal-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob"></div>
                    <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-moagi-lime-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-[-20%] right-[20%] w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        {/* Left Content */}
                        <motion.div
                            className="lg:w-1/2 text-center lg:text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-moagi-teal-100 shadow-sm mb-6 text-moagi-teal-700 font-semibold text-sm"
                            >
                                <Sparkles className="w-4 h-4 text-moagi-lime-500" />
                                <span>Solusi Laundry Profesional</span>
                            </motion.div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
                                Laundry Mudah <br />untuk{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-moagi-teal-600 to-moagi-teal-500 relative">
                                    Gaya Hidup
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-moagi-lime-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                    </svg>
                                </span>
                                <br />Serba Cepat
                            </h1>

                            <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                                Cuci mandiri atau serahkan pada tim profesional kami. <br className="hidden lg:block" />
                                Nikmati kemudahan sistem digital dengan hasil dan pengalaman laundry yang memuaskan,
                                melalui proses yang lebih ramah lingkungan.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap">
                                <Link
                                    to="/layanan"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-moagi-lime-500 to-moagi-lime-400 text-white font-bold rounded-full shadow-lg shadow-moagi-lime-500/30 hover:shadow-moagi-lime-500/50 hover:scale-105 transition-all duration-300"
                                >
                                    Laundry Self Service
                                </Link>
                                <Link
                                    to="/layanan"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-moagi-teal-700 font-bold rounded-full shadow-md border border-slate-100 hover:border-moagi-teal-500 hover:text-moagi-teal-600 hover:bg-moagi-teal-50 transition-all duration-300"
                                >
                                    Laundry Full Service
                                </Link>
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-moagi-teal-700 text-white font-bold rounded-full shadow-xl shadow-moagi-teal-700/20 hover:bg-moagi-teal-800 hover:shadow-moagi-teal-700/40 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <Truck className="w-5 h-5 mr-2" />
                                    Pick Up and Delivery
                                </a>
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            className="lg:w-1/2 relative perspective-1000"
                            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <div className="relative z-10 w-full max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500">
                                <div className="absolute inset-0 bg-moagi-teal-500 rounded-[3rem] rotate-3 opacity-20 blur-2xl"></div>
                                <img
                                    src="/model.png"
                                    alt="Moagi Laundry Service"
                                    className="relative w-full h-auto rounded-[2.5rem] shadow-2xl border-4 border-white/50"
                                />

                                {/* Floating Badge */}
                                <motion.div
                                    className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-moagi-lime-100 rounded-full flex items-center justify-center">
                                            <Timer className="w-6 h-6 text-moagi-lime-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 font-medium">Layanan Cepat</p>
                                            <p className="text-lg font-bold text-slate-800">Tepat Waktu</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. LAUNDRY SELF SERVICE SECTION */}
            <section className="py-12 md:py-20 bg-gradient-to-br from-moagi-teal-600 to-moagi-teal-800 text-white relative overflow-hidden">
                {/* Background Patterns */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-moagi-lime-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <motion.div
                                className="grid grid-cols-2 gap-3 sm:gap-4"
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                {[
                                    { icon: Clock, label: '24 Jam' },
                                    { icon: CreditCard, label: 'Qris Payment' },
                                    { icon: Timer, label: 'Proses ± 60 Menit' },
                                    { icon: Droplets, label: 'Free Detergent' },
                                    { icon: Wifi, label: 'Akses Wifi' },
                                    { icon: Armchair, label: 'Lounge' },
                                    { icon: WashingMachine, label: 'Mesin Terawat' }
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl hover:bg-white/20 transition-all duration-300 group flex items-center gap-3 ${idx === 6 ? 'col-span-2 sm:col-span-1' : ''}`}
                                    >
                                        <div className="w-10 h-10 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-moagi-lime-500 transition-colors duration-300">
                                            <item.icon className="w-5 h-5 text-moagi-lime-400 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <span className="font-bold text-sm md:text-base leading-tight">{item.label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div
                            className="lg:w-1/2 order-1 lg:order-2"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-1 rounded-full bg-moagi-lime-500/20 text-moagi-lime-400 font-bold uppercase tracking-wider text-xs mb-4 border border-moagi-lime-500/30">
                                Self Service
                            </div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                                Laundry Self Service untuk Gaya Hidup Baru
                            </h2>
                            <p className="text-lg text-moagi-teal-50 mb-8 leading-relaxed">
                                Gaya “me”-laundry baru yang lebih asik dan tetap produktif.<br />
                                Nikmati pengalaman “me”-laundry dengan mesin yang mudah digunakan, pembayaran yang praktis,
                                tempat yang nyaman, dan waktu yang lebih fleksibel.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/lokasi" className="px-6 py-3 bg-white text-moagi-teal-700 font-bold rounded-xl shadow-lg hover:bg-moagi-lime-50 transition-all transform hover:-translate-y-1">
                                    Lokasi
                                </Link>
                                <Link to="/layanan" className="px-6 py-3 bg-moagi-teal-700 text-white border border-moagi-teal-500 font-bold rounded-xl hover:bg-moagi-teal-600 transition-all transform hover:-translate-y-1">
                                    Pricelist Self Service
                                </Link>
                                <Link to="/layanan" className="px-6 py-3 bg-moagi-teal-700 text-white border border-moagi-teal-500 font-bold rounded-xl hover:bg-moagi-teal-600 transition-all transform hover:-translate-y-1">
                                    Pembelian Detergent & Parfum
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* 3. LAUNDRY FULL SERVICE SECTION */}
            <section className="py-12 md:py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-moagi-teal-50 border border-moagi-teal-100 text-moagi-teal-600 text-xs font-bold uppercase tracking-wider mb-4">
                                <Sparkles className="w-3 h-3" /> Full Service
                            </span>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                                Laundry Full Service untuk Gaya Hidup Praktis dan Bebas Repot
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Percayakan laundry-an mu ke tim profesional kami! <br />
                                Ditangani secara profesional dengan perhatian penuh pada setiap detail,
                                menghasilkan laundry yang rapih melalui proses yang lebih ramah lingkungan
                                tanpa mengorbankan waktu berhargamu.
                            </p>

                            {/* Social Proof */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-moagi-teal-600">15.000+</div>
                                    <div className="text-sm text-slate-500">kg / bulan</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-moagi-teal-600">2.700+</div>
                                    <div className="text-sm text-slate-500">pcs / bulan</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-moagi-teal-600">10</div>
                                    <div className="text-sm text-slate-500">outlets</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-moagi-teal-600">15.000+</div>
                                    <div className="text-sm text-slate-500">customer</div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="lg:w-1/2">
                            <motion.div
                                className="grid grid-cols-2 gap-4 h-full content-center"
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                {[
                                    { icon: Truck, label: 'Pick Up & Delivery' },
                                    { icon: MessageCircle, label: 'Fast Respon' },
                                    { icon: UserCheck, label: 'Tim Profesional' },
                                    { icon: ShieldCheck, label: 'Garansi Cuci' },
                                    { icon: Search, label: 'Proses Detail' },
                                    { icon: Shirt, label: 'Hasil Rapih & Memuaskan' },
                                    { icon: Leaf, label: 'Eco Friendly' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition h-full">
                                        <div className="w-10 h-10 flex-shrink-0 rounded-full bg-moagi-teal-50 flex items-center justify-center text-moagi-teal-600">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-semibold text-slate-700 text-sm md:text-base">{item.label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section >

            {/* 4. HOW WE WORK SECTION */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-moagi-teal-50 border border-moagi-teal-100 text-moagi-teal-600 text-xs font-bold uppercase tracking-wider mb-4">
                            <RefreshCcw className="w-3 h-3" /> Proses Kami
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Dipercaya Karena Proses, Bukan Sekedar Janji</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                no: "1",
                                title: "Sorting & Penghitungan yang Teliti",
                                desc: "Setiap laundry dimulai dengan proses penyortiran dan penghitungan secara menyeluruh. Kami memisahkan pakaian berdasarkan jenis bahan, warna, dan kebutuhan perawatan untuk memastikan setiap item diperlakukan dengan cara yang tepat sejak awal."
                            },
                            {
                                no: "2",
                                title: "Proses Pencucian & Pengeringan Terstandar",
                                desc: "Pencucian dan pengeringan dilakukan menggunakan mesin modern dengan pengaturan yang disesuaikan untuk setiap jenis cucian. Kami menggunakan detergen biodegradable dan proses yang lebih ramah lingkungan untuk menjaga kualitas pakaian sekaligus meminimalkan dampak terhadap lingkungan."
                            },
                            {
                                no: "3",
                                title: "Standar Setrika Rapi & Profesional",
                                desc: "Setiap pakaian disetrika oleh tim berpengalaman dengan standar kerapihan yang konsisten. Perhatian pada detail memastikan pakaian tidak hanya rapi, tetapi juga nyaman dan siap langsung digunakan."
                            },
                            {
                                no: "4",
                                title: "Packing Rapi & Wangi Tahan Lama",
                                desc: "Sebagai tahap akhir, laundry dikemas secara rapi dan higienis dengan aroma eksklusif Moagi Laundry yang segar dan tahan lama— menjaga pakaian tetap bersih, wangi, dan terlindungi hingga sampai ke tangan Anda."
                            }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                className="relative p-6 pt-12 border border-slate-200 rounded-3xl h-full flex flex-col"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="absolute -top-6 left-6 w-12 h-12 bg-moagi-lime-500 text-white text-xl font-bold rounded-full flex items-center justify-center shadow-lg">
                                    {step.no}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed flex-grow">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* 5. GARANSI KEPUASAN MOAGI LAUNDRY */}
            <section className="py-12 md:py-16 bg-moagi-teal-600 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur">
                        <ShieldCheck className="w-8 h-8 text-white" />
                    </div>
                    <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4">
                        <Award className="w-3 h-3" /> Jaminan Mutu
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Garansi Kepuasan Moagi Laundry</h2>
                    <div className="max-w-3xl mx-auto text-lg leading-relaxed space-y-4">
                        <p>Kami percaya, layanan yang baik adalah layanan yang bertanggung jawab.</p>
                        <p className="text-moagi-teal-50">
                            Jika hasil laundry yang Anda terima tidak sesuai dengan standar Moagi Laundry,
                            kami siap memberikan cuci ulang tanpa biaya atau pengembalian dana,
                            sesuai ketentuan yang berlaku.
                        </p>
                        <p>
                            Garansi ini kami berikan sebagai bentuk komitmen kami
                            dalam menjaga kualitas dan kepercayaan pelanggan.
                        </p>
                    </div>
                </div>
            </section >

            {/* 6. PICK UP & DELIVERY SERVICE */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 overflow-hidden">
                        <div className="md:w-1/2">
                            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-moagi-teal-50 border border-moagi-teal-100 text-moagi-teal-600 text-xs font-bold uppercase tracking-wider mb-4">
                                <Truck className="w-3 h-3" /> Antar Jemput
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Laundry Beres Tanpa Harus Keluar Rumah</h2>
                            <p className="text-slate-600 mb-8">
                                Kami menyediakan layanan Pick Up & Delivery Laundry untuk memudahkanmu mencuci tanpa harus datang ke outlet.
                                Laundry dijemput langsung ke lokasimu dan diantar kembali dalam kondisi rapi, wangi, dan siap digunakan.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    "Hubungi Customer Service kami melalui WhatsApp",
                                    "Pilih dan konfirmasikan jenis layanan laundry yang dibutuhkan",
                                    "Lengkapi data diri dan alamat penjemputan",
                                    "Driver kami akan menjemput laundry Anda sesuai jadwal yang disepakati"
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-moagi-teal-100 rounded-full flex items-center justify-center text-moagi-teal-700 font-bold text-sm">
                                            {idx + 1}
                                        </div>
                                        <p className="text-sm font-medium text-slate-700 pt-1">{step}</p>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-moagi-lime-500 text-white font-bold rounded-xl shadow-lg hover:bg-moagi-lime-600 transition"
                            >
                                Order Pick Up & Delivery Laundry
                            </a>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-moagi-teal-200 rounded-full blur-3xl opacity-30"></div>
                                <img src="/delivery-illustration.png" alt="Delivery" className="relative z-10 w-full max-w-md mx-auto"
                                    onError={(e) => { e.target.onerror = null; e.target.src = '/model.png' }} />
                                {/* Fallback image if delivery illustration not exists */}
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* 7. LAYANAN UNGGULAN */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-moagi-teal-50 border border-moagi-teal-100 text-moagi-teal-600 text-xs font-bold uppercase tracking-wider mb-4">
                            <Crown className="w-3 h-3" /> Layanan Unggulan
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                            Layanan Unggulan<br />
                            <span className="text-moagi-teal-600">Dari Pakaian Hingga Perlengkapan Rumah</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Laundry Harian */}
                        <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 h-full flex flex-col">
                            <div className="w-12 h-12 bg-moagi-teal-50 rounded-2xl flex items-center justify-center mb-6">
                                <Shirt className="w-6 h-6 text-moagi-teal-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Laundry Harian</h3>
                            <p className="text-moagi-lime-600 font-bold mb-4">Mulai Rp. 8.000 / kg</p>
                            <ul className="space-y-2 text-slate-600 text-sm flex-grow">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-moagi-teal-300 rounded-full"></div>Cuci Setrika</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-moagi-teal-300 rounded-full"></div>Cuci Lipat</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-moagi-teal-300 rounded-full"></div>Setrika Saja</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-moagi-teal-300 rounded-full"></div>Express</li>
                            </ul>
                        </div>

                        {/* Laundry Satuan */}
                        <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 h-full flex flex-col">
                            <div className="w-12 h-12 bg-moagi-teal-50 rounded-2xl flex items-center justify-center mb-6">
                                <Star className="w-6 h-6 text-moagi-teal-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Laundry Satuan</h3>
                            <p className="text-moagi-lime-600 font-bold mb-4">Mulai Rp. 15.000 / pcs</p>
                            <ul className="space-y-2 text-slate-600 text-sm flex-grow">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-moagi-teal-300 rounded-full"></div>Kaos & Kemeja</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-moagi-teal-300 rounded-full"></div>Jas & Dress</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-moagi-teal-300 rounded-full"></div>Dan lain-lain</li>
                            </ul>
                        </div>

                        {/* Linen & Bedding */}
                        <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 h-full flex flex-col">
                            <div className="w-12 h-12 bg-moagi-teal-50 rounded-2xl flex items-center justify-center mb-6">
                                <Armchair className="w-6 h-6 text-moagi-teal-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Linen & Bedding Care</h3>
                            <p className="text-moagi-lime-600 font-bold mb-4">Mulai Rp. 18.000 / pcs</p>
                            <ul className="space-y-2 text-slate-600 text-sm flex-grow">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-moagi-teal-300 rounded-full"></div>Sprei</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-moagi-teal-300 rounded-full"></div>Selimut</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-moagi-teal-300 rounded-full"></div>Bed Cover</li>
                            </ul>
                        </div>

                        {/* Shoes & Bag */}
                        <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 h-full flex flex-col">
                            <div className="w-12 h-12 bg-moagi-teal-50 rounded-2xl flex items-center justify-center mb-6">
                                <Sparkles className="w-6 h-6 text-moagi-teal-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Shoes & Bag Care</h3>
                            <p className="text-moagi-lime-600 font-bold mb-4">Mulai Rp. 55.000 / pair</p>
                            <ul className="space-y-2 text-slate-600 text-sm flex-grow">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-moagi-teal-300 rounded-full"></div>Sepatu</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-moagi-teal-300 rounded-full"></div>Tas</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-moagi-teal-300 rounded-full"></div>Topi</li>
                            </ul>
                        </div>

                        {/* Home & Baby */}
                        <div className="p-8 border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 h-full flex flex-col">
                            <div className="w-12 h-12 bg-moagi-teal-50 rounded-2xl flex items-center justify-center mb-6">
                                <Leaf className="w-6 h-6 text-moagi-teal-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Home & Baby Care</h3>
                            <p className="text-moagi-lime-600 font-bold mb-4">Mulai Rp. 25.000 / unit</p>
                            <ul className="space-y-2 text-slate-600 text-sm flex-grow">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-moagi-teal-300 rounded-full"></div>Karpet</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-moagi-teal-300 rounded-full"></div>Boneka</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-moagi-teal-300 rounded-full"></div>Stroller & Dll</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/layanan"
                            className="inline-flex items-center justify-center px-8 py-4 bg-moagi-teal-600 text-white font-bold rounded-full shadow-lg hover:bg-moagi-teal-700 transition"
                        >
                            Lihat Layanan dan Harga
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section >
        </>
    );
}
