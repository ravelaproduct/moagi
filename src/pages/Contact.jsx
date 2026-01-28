import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Redirect to WhatsApp with message
        const text = `Halo Moagi Laundry, saya ${formData.name}. %0A${formData.message}%0A%0A(No. Hp: ${formData.phone})`;
        window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Helmet>
                <title>Hubungi Kami - Moagi Laundry</title>
                <meta name="description" content="Hubungi kami untuk pemesanan layanan laundry atau pertanyaan lainnya." />
            </Helmet>

            <section className="bg-moagi-teal-50 py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Hubungi Kami</h1>
                    <p className="text-slate-600">
                        Kami siap membantu kebutuhan laundry Anda. Hubungi kami melalui kanal di bawah ini.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">

                        {/* Contact Info Sidebar */}
                        <div className="md:w-2/5 bg-moagi-teal-600 p-6 md:p-10 text-white flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                                <p className="text-moagi-teal-100 mb-10 leading-relaxed">
                                    Punya pertanyaan seputar layanan kami atau ingin complain? Tim kami siap melayani Anda.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <Phone className="w-6 h-6 text-moagi-lime-400 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-lg">Telepon / WhatsApp</h4>
                                            <p className="text-moagi-teal-100">+62 812-3456-7890</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Mail className="w-6 h-6 text-moagi-lime-400 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-lg">Email</h4>
                                            <p className="text-moagi-teal-100">hello@moagilaundry.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-moagi-lime-400 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-lg">Alamat</h4>
                                            <p className="text-moagi-teal-100">Jl. Contoh Kebahagiaan No. 88, Jakarta Selatan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h4 className="font-semibold mb-4 text-moagi-teal-200">Ikuti Kami</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="md:w-3/5 p-6 md:p-14">
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Kirim Pesan</h3>
                            <p className="text-slate-500 mb-8">Silakan isi form di bawah ini.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-moagi-teal-500 focus:ring-2 focus:ring-moagi-teal-200 outline-none transition-all"
                                        placeholder="Masukkan nama anda"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Nomor WhatsApp</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-moagi-teal-500 focus:ring-2 focus:ring-moagi-teal-200 outline-none transition-all"
                                        placeholder="Contoh: 08123456789"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Pesan / Pertanyaan</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-moagi-teal-500 focus:ring-2 focus:ring-moagi-teal-200 outline-none transition-all resize-none"
                                        placeholder="Tulis pesan anda disini..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-moagi-teal-500 text-white font-bold rounded-xl shadow hover:bg-moagi-teal-600 transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Kirim Pesan
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
