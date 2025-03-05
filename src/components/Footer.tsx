import { NavLink } from "react-router-dom";
import {
    Facebook,
    Twitter,
    Linkedin,
    Youtube,
    Instagram,
    Rss
} from 'lucide-react';
import logo from '../assets/logo.svg';

const Footer = () => {
    const navLinks = [
        { id: 1, text: 'Competitions', to: '/guest-competitions/' },
        { id: 2, text: 'Works', to: '/guest-works/' },
        { id: 3, text: 'Policy', to: '/guest-policy/' },
        { id: 4, text: 'Results', to: '/guest-results/' },
        { id: 5, text: 'Experts', to: '/guest-experts/' },
        { id: 6, text: 'About us', to: '/guest-about/' }
    ];

    const socialLinks = [
        { Icon: Facebook, href: '#' },
        { Icon: Twitter, href: '#' },
        { Icon: Linkedin, href: '#' },
        { Icon: Youtube, href: '#' },
        { Icon: Instagram, href: '#' },
        { Icon: Rss, href: '#' }
    ];

    return (
        <footer className="w-full px-4 lg:px-0 container mx-auto pt-10 pb-7 mt-24 border-t-2 border-orange-300">
            <div className="px-4 py-6">
                <div className="flex justify-around md:items-center gap-6">
                    <div className="flex items-center justify-center md:justify-start">
                        <div className="flex flex-col items-center">
                            <img src={logo} alt="BeFirst Logo" className="h-20 w-20" />
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <p className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-2">
                            <span className="text-orange-500">📍</span>
                            ABC Company, 123 East, 17th Street, St. Louis 10001
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                            <span className="text-orange-500">📞</span>
                            (123) 456-7890
                        </p>
                        <div className="flex items-center mt-5 justify-center md:justify-start gap-2 text-gray-600">
                            <p className="text-gray-600">Social Media</p>
                            {socialLinks.map(({ Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className="text-orange-400 hover:text-orange-500 transition-colors"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
                        <nav className="flex flex-wrap justify-center gap-6">
                            {navLinks.map(link => (
                                <NavLink
                                    key={link.id}
                                    to={link.to}
                                    className={({ isActive }) =>
                                        isActive ? "text-orange-500" : "text-gray-600 hover:text-orange-500"
                                    }
                                >
                                    {link.text}
                                </NavLink>
                            ))}
                        </nav>
                        <p className="text-gray-500 text-sm">
                            Copyright © 2025 • Be First
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
