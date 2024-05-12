import Image from "next/image";

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover: border-gray-hover hover:opacity-100 ">
                <Image
                    src='/icn_category_countryside.jpg'
                    alt='Category - Countryside'
                    width={25}
                    height={25}
                />
                <span className="text-xs">Countryside</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover: border-gray-hover hover:opacity-100 ">
                <Image
                    src='/icn_category_amazing_views.jpg'
                    alt='Category - Amazing views'
                    width={25}
                    height={25}
                />
                <span className="text-xs">Amazing views</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover: border-gray-hover hover:opacity-100 ">
                <Image
                    src='/icn_category_amazing_pools.jpg'
                    alt='Category - Amazing pools'
                    width={25}
                    height={25}
                />
                <span className="text-xs">Amazing pools</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover: border-gray-hover hover:opacity-100 ">
                <Image
                    src='/icn_category_top_cities.jpg'
                    alt='Category - Top cities'
                    width={25}
                    height={25}
                />
                <span className="text-xs">Top cities</span>
            </div>
        </div>
    )
}

export default Categories;