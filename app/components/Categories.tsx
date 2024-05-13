import Image from "next/image";

const categories = [
    { id: 1, src: '/icn_category_countryside.jpg', alt: 'Category - Countryside', label: 'Countryside' },
    { id: 2, src: '/icn_category_amazing_views.jpg', alt: 'Category - Amazing views', label: 'Amazing views' },
    { id: 3, src: '/icn_category_amazing_pools.jpg', alt: 'Category - Amazing pools', label: 'Amazing pools' },
    { id: 4, src: '/icn_category_luxe.jpg', alt: 'Category - Luxe', label: 'Luxe' },
    { id: 5, src: '/icn_category_farms.jpg', alt: 'Category - Farms', label: 'Farms' },
    { id: 6, src: '/icn_category_omg.jpg', alt: 'Category - OMG!', label: 'OMG!' },
    { id: 7, src: '/icn_category_beach_front.jpg', alt: 'Category - Beachfront', label: 'Beachfront' },
    { id: 8, src: '/icn_category_castles.jpg', alt: 'Category - Castles', label: 'Castles' },
    { id: 9, src: '/icn_category_cabins.jpg', alt: 'Category - Cabins', label: 'Cabins' },
    { id: 10, src: '/icn_category_treehouses.jpg', alt: 'Category - Treehouses', label: 'Treehouses' },
];

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            {categories.map(category => (
                <div key={category.id} className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-hover hover:opacity-100">
                    <Image
                        src={category.src}
                        alt={category.alt}
                        width={25}
                        height={25}
                    />
                    <span className="text-xs">{category.label}</span>
                </div>
            ))}
        </div>
    );
}

export default Categories;
