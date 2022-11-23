import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { authContext } from '../../../ContextProvider/ContextProvider';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

    const { createUser } = useContext(authContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();




    const handleAddUser = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const users = {
                    name: data.name,
                    email: data.email,
                    role: data.role
                }

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(users)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire({
                            text: 'User Added Succefully'
                        })
                        navigate('/dashboard/listOfUser')
                    })

            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    text: 'Something Wrong ! Try Again.'
                })
            })
    }




    return (
        <div>
            <form onSubmit={handleSubmit(handleAddUser)} novalidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg ng-untouched ng-pristine ng-valid  bg-blue-600 text-white">
                <label for="username" className="self-start text-xs font-semibold"> Name</label>
                <input {...register('name')} className="flex items-center text-black h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2" />
                <label for="password" className="self-start mt-3 text-xsfont-semibold">Email</label>
                <input {...register('email')} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" />
                <label for="password" className="self-start mt-3 text-xsfont-semibold">Password</label>
                <input {...register('password')} className="flex items-center h-12 text-black px-4 mt-2 rounded focus:outline-none focus:ring-2" />

                <label for="password" className="self-start mt-3 text-xsfont-semibold">Role</label>
                <select className='mt-5 py-2 text-black' {...register('role')}>
                    <option className='text-black' > Admin</option>
                    <option className='text-black' > Editor</option>
                </select>
                <button type="submit" className="flex items-center justify-center bg-white text-black mt-5 h-12 ">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;