import { MailIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const navigation = {
    main: [
        { name: 'Home', href: '/' },
        { name: 'Tattoo', href: '/tattoo' },
        { name: 'Med Spa', href: '/med_spa' },
        { name: 'Acne', href: '/acne' },
        { name: 'RF Body Contouring', href: '/radiofrequency' }
    ],
    social: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/undotoday',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Email',
            href: 'mailto:info@undo.today',
            icon: MailIcon
        }
    ],
}

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className=" py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="px-5 py-2 text-base text-gray-500 hover:text-gray-900 cursor-pointer">
                            <Link href={item.href}>
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                    {navigation.social.map((item) => (
                        <Link key={item.name} href={item.href} >
                            <div className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                        </Link>
                    ))}
                </div>
                <p className="mt-8 text-center text-base text-gray-400">&copy; 2021 Undo Skincare Center. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;