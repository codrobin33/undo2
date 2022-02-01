import Image from "next/image";

const people = [
    {
        name: 'EltaMD',
        role: 'Sun care and skincare products',
        imageUrl:
            '/img/eltamd_product.jpg',
        bio:
            'EltaMD sun care and skincare products are formulated for every skin type, lifestyle and condition to protect, renew and heal skin health. Find the EltaMD product that is right for you.',
    },
    {
        name: 'Revision',
        role: 'Achieve Healthy, Beautiful Skin',
        imageUrl:
            '/img/revision_product.jpg',
        bio:
            'Revision Skincare was founded to change the way professional skincare results are achieved. We believe youthful-looking skin can be accomplished without ever compromising skin\'s long-term health.',
    },
    {
        name: 'Collagen Elixir',
        role: 'Glow Radiantly, Live Beautifully',
        imageUrl:
            '/img/Collagen-Elixir.jpg',
        bio:
            'Infused with an innovative blend of marine collagen peptides and powerful botanicals, Collagen Elixir™ indulges your skin with both beauty and nourishment from the inside out.',
    },
    {
        name: 'iS CLINICAL',
        role: 'Clinical facials at home',
        imageUrl:
            '/img/iSC_product.jpg',
        bio:
            'To complement our home care products, iS CLINICAL offers an array of luxurious, powerful and dramatically effective professional facial protocols to visually address all skin types and concerns.',
    }
]

const ProductDescriptions = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our products</h2>

                    <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                                    <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                        <Image
                                            className="object-cover shadow-lg rounded-lg"
                                            src={person.imageUrl}
                                            alt=""
                                            layout="fill" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <div className="space-y-4">
                                            <div className="text-lg leading-6 font-medium space-y-1">
                                                <h3>{person.name}</h3>
                                                <p className="text-indigo-700">{person.role}</p>
                                            </div>
                                            <div className="text-lg">
                                                <p className="text-gray-500">{person.bio}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductDescriptions;