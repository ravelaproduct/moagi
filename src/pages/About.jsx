import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, Target, Eye, Users, TrendingUp, Award } from 'lucide-react';

export default function About() {
    const fadeUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    };

    return (
        <>
            <Helmet>
                <title>Tentang Kami - Moagi Laundry</title>
                <meta name="description" content="Sejarah, Visi, Misi dan Tim dibalik Moagi Laundry." />
            </Helmet>

            {/* Header */}
            <section className="bg-sky-50 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Tentang Moagi Laundry
                    </motion.h1>
                    <motion.p
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Kami berdedikasi untuk memberikan layanan laundry terbaik dengan standar kebersihan tinggi dan pelayanan yang ramah.
                    </motion.p>
                </div>
            </section>

            {/* Visi Misi */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        <motion.div
                            className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-sky-500"
                            {...fadeUp}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-sky-100 rounded-xl text-sky-600">
                                    <Eye className="w-8 h-8" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-800">Visi Kami</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Menjadi penyedia jasa laundry terdepan yang paling tepercaya, mengutamakan kualitas, inovasi teknologi, dan kepuasan pelanggan di setiap layanannya.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-yellow-400"
                            {...fadeUp}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-yellow-100 rounded-xl text-yellow-600">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-800">Misi Kami</h2>
                            </div>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-yellow-400 flex-shrink-0" />
                                    <span>Memberikan hasil cucian yang bersih, higienis, dan rapi.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-yellow-400 flex-shrink-0" />
                                    <span>Menyediakan layanan antar-jemput yang tepat waktu.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-yellow-400 flex-shrink-0" />
                                    <span>Menggunakan bahan pembersih ramah lingkungan dan aman untuk pakaian.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sejarah & Timeline */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">Perjalanan Kami</h2>
                        <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full" />
                    </div>

                    <div className="max-w-3xl mx-auto relative">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-sky-200 transform -translate-x-1/2 md:translate-x-0 ml-6 md:ml-0" />

                        {/* Timeline Items */}
                        <div className="space-y-12">
                            <motion.div
                                className="relative flex md:justify-end items-center md:items-start"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="hidden md:block w-1/2 p-6 text-right">
                                    <h3 className="text-xl font-bold text-sky-600">2020</h3>
                                    <h4 className="text-lg font-semibold text-slate-800">Awal Berdiri</h4>
                                    <p className="text-slate-500 mt-2">Moagi Laundry didirikan sebagai layanan rumahan sederhana.</p>
                                </div>
                                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-sky-500 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 ml-6 md:ml-0 mt-6 md:mt-2 z-10" />
                                <div className="w-full md:w-1/2 p-6 pl-16 md:pl-12 md:hidden">
                                    {/* Mobile View */}
                                    <h3 className="text-xl font-bold text-sky-600">2020</h3>
                                    <h4 className="text-lg font-semibold text-slate-800">Awal Berdiri</h4>
                                    <p className="text-slate-500 mt-2">Moagi Laundry didirikan sebagai layanan rumahan sederhana.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="relative flex md:justify-start items-center md:items-start"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-full md:w-1/2 p-6 pl-16 md:pl-0 md:pr-12 md:text-right md:hidden">
                                    {/* This is empty/hidden on mobile to keep structure */}
                                </div>

                                <div className="hidden md:block w-1/2" /> {/* Spacer */}

                                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-sky-500 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 ml-6 md:ml-0 mt-6 md:mt-2 z-10" />

                                <div className="w-full md:w-1/2 p-6 pl-16 md:pl-12">
                                    <h3 className="text-xl font-bold text-sky-600">2022</h3>
                                    <h4 className="text-lg font-semibold text-slate-800">Ekspansi Pertama</h4>
                                    <p className="text-slate-500 mt-2">Membuka outlet fisik pertama dan menambah armada antar-jemput.</p>
                                </div>

                                <div className="hidden md:block w-1/2 p-6 text-right absolute left-0 top-0">
                                    {/* Hacky way to alternate sides on desktop without complex logic, simpler: use grid */}
                                </div>
                            </motion.div>

                            {/* Simpler Alternating Timeline for React */}
                            <TimelineItem year="2023" title="Modernisasi" desc="Implementasi sistem digital dan mesin cuci teknologi terbaru." align="left" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategi & Keunggulan */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-800">Strategi Kami</h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Clock, title: "Tepat Waktu", desc: "Komitmen pada jadwal pickup & delivery" },
                            { icon: Award, title: "Quality Control", desc: "Pengecekan ganda sebelum dikemas" },
                            { icon: TrendingUp, title: "Inovasi", desc: "Terus memperbarui teknologi laundry" },
                            { icon: Users, title: "Customer Focus", desc: "Pelayanan ramah dan responsif" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center hover:shadow-md transition-shadow"
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-12 h-12 mx-auto bg-sky-50 rounded-full flex items-center justify-center text-sky-600 mb-4">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

// Helper for Timeline to cleaner code
function TimelineItem({ year, title, desc, align }) {
    // Note: The logic in the main return for timeline was a bit manual. 
    // In a real refactor, create a proper TimelineComponent. 
    // For now, adding the 3rd item manually to match style
    return (
        <motion.div
            className="relative flex md:justify-end items-center md:items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
            <div className="hidden md:block w-1/2 p-6 text-right">
                <h3 className="text-xl font-bold text-sky-600">{year}</h3>
                <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
                <p className="text-slate-500 mt-2">{desc}</p>
            </div>
            <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-sky-500 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 ml-6 md:ml-0 mt-6 md:mt-2 z-10" />
            <div className="w-full md:w-1/2 p-6 pl-16 md:pl-12 md:hidden">
                <h3 className="text-xl font-bold text-sky-600">{year}</h3>
                <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
                <p className="text-slate-500 mt-2">{desc}</p>
            </div>
        </motion.div>
    )
}
