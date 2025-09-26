import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { RxCross2 } from 'react-icons/rx';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router';

export default function Cart({ handleCart, openCart }) {
    const DrawerList = (
        <Box sx={{ width: 400 }} role="presentation" className="h-full flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Shopping Cart</h2>
                <RxCross2
                    className="w-7 h-7 p-1 bg-primary text-white rounded-full cursor-pointer hover:bg-primary/80 transition"
                    onClick={() => handleCart(false)}
                />
            </div>

            {/* Cart Items */}
            <div className='flex flex-col min-h-[400px]'>
                <div className=" overflow-y-auto">
                    <div className="flex items-center justify-between p-3 border-b border-gray-100 hover:bg-gray-50 transition">
                        {/* Image */}
                        <img
                            className="w-[60px] h-[70px] object-cover rounded-md border border-gray-300"
                            src="https://www.jiomart.com/images/product/original/rv1zalfbjm/sidhidata-women-s-women-s-crepe-printed-patiyala-salwar-suit-dress-material-suit-sea-green-product-images-rv1zalfbjm-2-202406210004.jpg?im=Resize=(600,750)"
                            alt=""
                        />

                        {/* Details */}
                        <div className="flex-1 px-3">
                            <h3 className="font-medium text-sm leading-snug">
                                Lorem ipsum dolor sit amet.
                            </h3>
                            <div className="flex gap-5 mt-1 text-sm font-medium">
                                <span className="text-gray-600">Qty: 2</span>
                                <span className="text-red-500 font-semibold">Price: $25</span>
                            </div>
                        </div>

                        {/* Delete button */}
                        <MdDelete
                            size={22}
                            className="cursor-pointer text-red-500 hover:text-red-700 transition"
                        />
                    </div>
                </div>

                <div className=" overflow-y-auto">
                    <div className="flex items-center justify-between p-3 border-b border-gray-100 hover:bg-gray-50 transition">
                        {/* Image */}
                        <img
                            className="w-[60px] h-[70px] object-cover rounded-md border border-gray-300"
                            src="https://www.jiomart.com/images/product/original/rv1zalfbjm/sidhidata-women-s-women-s-crepe-printed-patiyala-salwar-suit-dress-material-suit-sea-green-product-images-rv1zalfbjm-2-202406210004.jpg?im=Resize=(600,750)"
                            alt=""
                        />

                        {/* Details */}
                        <div className="flex-1 px-3">
                            <h3 className="font-medium text-sm leading-snug">
                                Lorem ipsum dolor sit amet.
                            </h3>
                            <div className="flex gap-5 mt-1 text-sm font-medium">
                                <span className="text-gray-600">Qty: 2</span>
                                <span className="text-red-500 font-semibold">Price: $25</span>
                            </div>
                        </div>

                        {/* Delete button */}
                        <MdDelete
                            size={22}
                            className="cursor-pointer text-red-500 hover:text-red-700 transition"
                        />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className=" p-4 border-t border-gray-200">
                <div className="flex justify-between font-medium">
                    <span className='m'>1 Item</span>
                    <span className='text-primary font-medium'>$85</span>
                </div>
                <div className="flex justify-between mb-3 text-base font-medium  border-b-1 border-gray-300">
                    <span>Total</span>
                    <span className="text-red-500 font-medium">$50</span>
                </div>
                <div className="flex justify-between mb-3 text-base font-medium">
                    <span>Shipping</span>
                    <span className="text-red-500">$8</span>
                </div>
                <div className='flex justify-center gap-4'>
                   <Link to="/viewCart">
                     <button  onClick={() => handleCart(false)} className=' bg-primary cursor-pointer text-white py-2 px-3 rounded-lg hover:bg-primary/90 transition'>View Cart</button>
                   </Link>
                   <Link to="/">
                     <button className=" bg-primary cursor-pointer text-white py-2 px-3 rounded-lg hover:bg-primary/90 transition">
                        Checkout
                    </button>
                   </Link>
                </div>
            </div>
        </Box>
    );

    return (
        <Drawer
            open={openCart}
            anchor="right"
            onClose={() => handleCart(false)}
        >
            {DrawerList}

        </Drawer>
    );
}
