import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
    return (
        <>
            <Helmet>
                <title>Lokasi Outlet - Moagi Laundry</title>
                <meta name="description" content="Kunjungi outlet Moagi Laundry terdekat atau cek area layanan antar jemput kami." />
            </Helmet>

            <section className="bg-moagi-teal-50 py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">Lokasi Kami</h1>
                    <p className="text-slate-600">
                        Temukan outlet Moagi Laundry terdekat dari lokasi Anda.
                    </p>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Info Card */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                                <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Outlet Pusat</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-moagi-teal-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-slate-800">Alamat</h3>
                                            <p className="text-slate-600 leading-relaxed mt-1">
                                                Jl. Contoh Kebahagiaan No. 88<br />
                                                Jakarta Selatan, DKI Jakarta 12345
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Clock className="w-6 h-6 text-moagi-teal-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-slate-800">Jam Operasional</h3>
                                            <ul className="text-slate-600 mt-1 space-y-1">
                                                <li className="flex justify-between w-40"><span>Senin - Jumat:</span> <span>07.00 - 21.00</span></li>
                                                <li className="flex justify-between w-40"><span>Sabtu - Minggu:</span> <span>08.00 - 20.00</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Phone className="w-6 h-6 text-moagi-teal-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-slate-800">Kontak Outlet</h3>
                                            <p className="text-slate-600 mt-1">+62 812-3456-7890</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100">
                                    <a
                                        href="https://goo.gl/maps/example"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block w-full text-center bg-moagi-teal-50 text-moagi-teal-600 font-bold py-3 rounded-xl hover:bg-moagi-teal-100 transition-colors"
                                    >
                                        Petunjuk Arah
                                    </a>
                                </div>
                            </div>

                            {/* Area Layanan */}
                            <div className="bg-moagi-teal-600 p-8 rounded-2xl shadow-lg text-white">
                                <h3 className="text-xl font-bold mb-4">Area Coverage Antar Jemput</h3>
                                <p className="text-moagi-teal-100 mb-4 text-sm">Gratis antar jemput untuk radius 2km dari outlet.</p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-white rounded-full"></div> Menteng</li>
                                    <li className="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-white rounded-full"></div> Kuningan</li>
                                    <li className="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-white rounded-full"></div> Sudirman</li>
                                    <li className="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-white rounded-full"></div> Tebet</li>
                                </ul>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="lg:col-span-2 h-[400px] lg:h-auto min-h-[500px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.307997637841!2d106.82496467069796!3d-6.223055990264023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4b7dfffff%3A0x6f99092004273292!2sKuningan%2C%20Setiabudi%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Moagi Laundry Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
