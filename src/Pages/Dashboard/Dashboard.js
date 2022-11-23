import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const user = <>

        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/listofadmin' >List of Admin</Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/listofbuyers' >List of Buyers</Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/listofsellers' >List of Seller</Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/reporteditems' >Reported Item</Link>
    </>

    const seller = <>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/addproduct' >Add Product</Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/editproduct'  >Edit Product</Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/myproducts' >My Products</Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/mybuyers' >My Buyers</Link>
    </>

    const buyer = <>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/myorders' >My Orders</Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/myprofile'> My Profile</ Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/wishlist' >WishList</Link>
    </>


    return (
        <div>
            <aside className="w-full p-6 sm:w-60 bg-blue-600 text-white mt-10">
                <nav className="space-y-8 text-sm">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold tracking-widest uppercase ">Users</h2>
                        <div className="flex flex-col space-y-1">
                            {user}
                        </div>
                    </div>
                    <hr />
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold tracking-widest uppercase ">Seller</h2>
                        <div className="flex flex-col space-y-1">
                            {seller}
                        </div>
                    </div>
                    <hr />
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold tracking-widest uppercase ">Buyer</h2>
                        <div className="flex flex-col space-y-1">
                            {buyer}
                        </div>
                    </div>

                </nav>
            </aside>
        </div>
    );
};

export default Dashboard;