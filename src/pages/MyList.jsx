
import { MdDelete } from 'react-icons/md';
import MyAccountSideBar from '../component/MyAccountSideBar';
import { Button, TextField } from '@mui/material';
import { RxCross2 } from 'react-icons/rx';
const MyList = () => {
    return (
        <section className='py-10 w-full bg-[#F1F3F6]'>
            <div className="container flex gap-5">
                <MyAccountSideBar />
                <div className="col2 w-[80%] p-5 shadow-md bg-white">
                   <div>
                     <h1 className='font-[500]'>My List</h1>
                     <p className='text-[14px] text-gray-500'>There are 2 product in list</p>
                   </div>
                    <div className=" overflow-y-auto">
                        <div className="flex items-center justify-between p-3 border-b border-gray-100 hover:bg-gray-50 transition">
                            {/* Image */}
                            <img className="w-[60px] h-[70px] object-cover rounded-md border border-gray-300"
                                src="https://www.jiomart.com/images/product/original/rv1zalfbjm/sidhidata-women-s-women-s-crepe-printed-patiyala-salwar-suit-dress-material-suit-sea-green-product-images-rv1zalfbjm-2-202406210004.jpg?im=Resize=(600,750)"
                                alt="" />

                            {/* Details */}
                            <div className="flex-1 px-3">
                                <h3 className="font-medium text-sm leading-snug">
                                    Lorem ipsum dolor sit amet.
                                </h3>
                                <div className="flex gap-5 mt-1 text-sm font-medium">
                                    <span className="text-gray-600">Qty: 2</span>
                                    <span className="text-red-500 font-semibold">Price: $25</span>
                                </div>
                                <button className='bg-primary py-1 px-2 text-white rounded-md cursor-pointer mt-3 hover:opacity-90'>Add To Cart</button>
                            </div>

                            {/* Delete button */}
                            <RxCross2 size={22} className="cursor-pointer text-red-500 hover:text-red-700 transition" />
                        </div>
                    </div>

                    <div className=" overflow-y-auto">
                        <div className="flex items-center justify-between p-3 border-b border-gray-100 hover:bg-gray-50 transition">
                            {/* Image */}
                            <img className="w-[60px] h-[70px] object-cover rounded-md border border-gray-300"
                                src="https://www.jiomart.com/images/product/original/rv1zalfbjm/sidhidata-women-s-women-s-crepe-printed-patiyala-salwar-suit-dress-material-suit-sea-green-product-images-rv1zalfbjm-2-202406210004.jpg?im=Resize=(600,750)"
                                alt="" />

                            {/* Details */}
                            <div className="flex-1 px-3">
                                <h3 className="font-medium text-sm leading-snug">
                                    Lorem ipsum dolor sit amet.
                                </h3>
                                <div className="flex gap-5 mt-1 text-sm font-medium">
                                    <span className="text-gray-600">Qty: 2</span>
                                    <span className="text-red-500 font-semibold">Price: $25</span>
                                </div>
                                <button className='bg-primary py-1 px-2 text-white rounded-md cursor-pointer mt-3 hover:opacity-90'>Add To Cart</button>
                            </div>

                            {/* Delete button */}
                            <RxCross2 size={22} className="cursor-pointer text-red-500 hover:text-red-700 transition" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyList