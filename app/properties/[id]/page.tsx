import Image from "next/image";
import ReservationSideBar from "@/app/components/properties/ReservationSideBar";

const PropertyDetailPage = () => {
    return ( 
        <main className="max-w-[1800px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src='/item1.jpg'
                    className="object-cover w-full h-full"
                    alt='item 1'
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                   <h1 className="mb-4 text-4xl"> PropertyDetailPage</h1>

                   <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms 1 bathroom
                   </span>

                   <hr />

                   <div className="py-6 flex items-center space-x-4">
                        <Image 
                        src='/profile_pic_1.jpg'
                        width={50}
                        height={50}
                        className="rounded-full"
                        alt="profile 1"
                        />

                        <p><strong>John Due</strong> is your host</p>
                   </div>

                   <hr />

                   <p className="mt-6 text-lg">
                        sdgkoljfjdgbiuodfbjnmfdigobjmgoibmfboidmnokdbmop[]
                   </p>
                </div>

                <ReservationSideBar />
            </div>
        </main>
     );
}
 
export default PropertyDetailPage;