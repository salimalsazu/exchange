import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const user = <>

        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/adduser' >Add User</Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/listOfUser' >List of User</Link>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/changerole' >Change Role</Link>
    </>

    const service = <>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/adduser' >Add Product</Link>
        <Link className=' hover:bg-blue-700 py-1' >List of Seller</Link>
        <Link className=' hover:bg-blue-700 py-1' >Edit Product</Link>
    </>

    const client = <>
        <Link className=' hover:bg-blue-700 py-1' to='/dashboard/adduser' >List of Buyer</Link>
        <Link className=' hover:bg-blue-700 py-1' >Payment</Link>
        <Link className=' hover:bg-blue-700 py-1' >Purchase List</Link>
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
                            {service}
                        </div>
                    </div>
                    <hr />
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold tracking-widest uppercase ">Buyer</h2>
                        <div className="flex flex-col space-y-1">
                            {client}
                        </div>
                    </div>

                </nav>
            </aside>
        </div>
    );
};

export default Dashboard;