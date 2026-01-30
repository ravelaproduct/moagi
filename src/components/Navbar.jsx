import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/moagi-logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Check scroll for additional styling if needed (optional for floating, but good for mobile)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Layanan', path: '/layanan' },
        { name: 'Lokasi', path: '/lokasi' },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:pt-6"
            >
                <div className={`
                    w-full max-w-7xl mx-auto 
                    bg-white/90 backdrop-blur-xl border border-slate-200/60 
                    shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                    rounded-2xl md:rounded-full px-4 sm:px-6 py-2.5
                    transition-all duration-300
                    ${scrolled ? 'bg-white/95 shadow-md' : ''}
                `}>
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="flex items-center gap-2 group">
                                <img
                                    className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
                                    src={Logo}
                                    alt="Moagi Laundry"
                                />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1">
                            <div className="flex items-center bg-slate-100/50 p-1 rounded-full border border-slate-200/50 mr-4">
                                {navLinks.map((link) => {
                                    const active = isActive(link.path);
                                    return (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 z-10 ${active ? 'text-moagi-teal-700' : 'text-slate-600 hover:text-moagi-teal-600'
                                                }`}
                                        >
                                            {active && (
                                                <motion.div
                                                    layoutId="navbar-active"
                                                    className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-100/50"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                            <span className="relative z-20">{link.name}</span>
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* CTA Button */}
                            <Link
                                to="/kontak"
                                className="bg-gradient-to-r from-moagi-teal-600 to-moagi-teal-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-moagi-teal-500/20 hover:shadow-moagi-teal-500/40 hover:-translate-y-0.5"
                            >
                                Hubungi Kami
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-full text-slate-600 hover:text-moagi-teal-600 hover:bg-moagi-teal-50 focus:outline-none transition-colors"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, scale: 0.95 }}
                        animate={{ opacity: 1, height: "auto", scale: 1 }}
                        exit={{ opacity: 0, height: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-24 left-4 right-4 z-40 md:hidden origin-top"
                    >
                        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/60 overflow-hidden">
                            <div className="px-4 pt-4 pb-6 space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 rounded-2xl text-base font-semibold transition-all ${isActive(link.path)
                                            ? 'bg-moagi-teal-50 text-moagi-teal-700'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-moagi-teal-600'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="pt-4 mt-2 border-t border-slate-100">
                                    <Link
                                        to="/kontak"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-center bg-moagi-teal-600 text-white px-4 py-3 rounded-2xl font-bold hover:bg-moagi-teal-700 transition-colors shadow-lg shadow-moagi-teal-500/20"
                                    >
                                        Hubungi Kami
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
