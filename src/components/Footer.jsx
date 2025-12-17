import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Logo from '../assets/moagi-logo.png';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img src={Logo} alt="Moagi Laundry" className="h-10 w-auto" />
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Solusi laundry profesional untuk pakaian bersih, wangi, dan rapi. Melayani dengan hati untuk kepuasan Anda.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-slate-800 mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li><Link to="/" className="hover:text-moagi-teal-600 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-moagi-teal-600 transition-colors">Tentang Kami</Link></li>
                            <li><Link to="/layanan" className="hover:text-moagi-teal-600 transition-colors">Layanan</Link></li>
                            <li><Link to="/lokasi" className="hover:text-moagi-teal-600 transition-colors">Lokasi Outlet</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-slate-800 mb-4">Layanan</h3>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li>Cuci Komplit (Cuci + Setrika)</li>
                            <li>Cuci Kering Lipat</li>
                            <li>Setrika Saja</li>
                            <li>Express Laundry</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-slate-800 mb-4">Hubungi Kami</h3>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-moagi-teal-500 flex-shrink-0" />
                                <span>Jl. Contoh No. 123, Jakarta Selatan, DKI Jakarta</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-moagi-teal-500 flex-shrink-0" />
                                <span>+62 812-3456-7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-moagi-teal-500 flex-shrink-0" />
                                <span>hello@moagilaundry.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Moagi Laundry. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-slate-400 hover:text-moagi-teal-600 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
