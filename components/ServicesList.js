/* This example requires Tailwind CSS v2.0+ */
import { LinkIcon } from '@heroicons/react/outline';

const features = [
    {
        name: 'Invite team members',
        description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    { name: 'List view', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
    {
        name: 'Keyboard shortcuts',
        description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    { name: 'Calendars', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
    { name: 'Notifications', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
    { name: 'Boards', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
    { name: 'Reporting', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
    { name: 'Mobile app', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
]

const ServicesShortList = () => {
    return (
        <div className="bg-white  overflow-hidden">
            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 ">
                <svg className="hidden lg:block absolute right-full transform translate-x-2/3 translate-y-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true"><defs><pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"></rect></svg>
                <div>
                    <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">Everything you need</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900">For great Skincare</p>
                    <p className="mt-4 text-lg text-gray-500">
                        Our team is here to help you look and feel your best. Let us Undo those unwanted skin changes.
                    </p>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                    <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <a href="#" className="cursor-pointer  hover:underline">
                                        <LinkIcon className="absolute h-6 w-6 text-indigo-600" aria-hidden="true" />
                                        <span className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</span>
                                    </a>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default ServicesShortList;