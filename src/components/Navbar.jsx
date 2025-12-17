import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/moagi-logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Layanan', path: '/layanan' },
        { name: 'Lokasi', path: '/lokasi' },
        // Kontak removed from here to be handled separately as A CTA
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isOpen ? 'bg-white' : 'bg-white/80 backdrop-blur-lg'
            } border-b border-white/20 shadow-sm`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <img className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" src={Logo} alt="Moagi Laundry" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex items-baseline space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative text-sm font-medium transition-colors duration-300 ${isActive(link.path)
                                        ? 'text-moagi-teal-600'
                                        : 'text-slate-600 hover:text-moagi-teal-600'
                                        } group`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-moagi-teal-600 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <Link
                            to="/kontak"
                            className="bg-moagi-teal-500 hover:bg-moagi-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-moagi-teal-500/30 hover:shadow-moagi-teal-500/40 transform hover:-translate-y-0.5"
                        >
                            Hubungi Kami
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-moagi-teal-600 hover:bg-moagi-teal-50 focus:outline-none transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="bg-white px-4 pt-2 pb-6 space-y-2 border-t border-slate-100 shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors ${isActive(link.path)
                                ? 'text-moagi-teal-600 bg-moagi-teal-50'
                                : 'text-slate-600 hover:text-moagi-teal-600 hover:bg-gray-50'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 px-3">
                        <Link
                            to="/kontak"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-moagi-teal-500 hover:bg-moagi-teal-600 text-white px-4 py-3 rounded-xl font-semibold transition-colors shadow-md"
                        >
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
