import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../../components/Shared/Loading';


const Customers = () => {



    const [users, setUser] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://repliq-task-server.vercel.app/users`)
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false)

            })
    }, [])

    console.log(users);



    return (

        <div>
            {
                loading ?
                    <Loading></Loading>
                    :
                    <div>
                        <h2 className=' text-4xl text-primary text-center m-4 font-bold'>All Customer</h2>
                        <div className="overflow-x-auto mx-3">
                            <table className="table table-zebra w-full">

                                <thead>
                                    <tr>
                                        <th>Index</th>
                                        <th>Picture</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Details</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users?.map((user, idx) =>
                                            <tr
                                                key={user._id}
                                            >
                                                <th>{idx + 1}</th>
                                                <td>

                                                    <div className="w-12 rounded">
                                                        <img className=' rounded-full' src={user?.photo} alt='' />
                                                    </div>

                                                </td>
                                                <td>{user?.name}</td>
                                                <td>{user?.email}</td>
                                                <td><Link to={`/dashbord/customerDetails/${user?.email}`}><button className=' btn btn-sm'>Details</button></Link></td>

                                            </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Customers;