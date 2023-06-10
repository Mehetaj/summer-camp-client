import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const [axiosSecure] = useAxiosSecure();
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const handleGoogleSignIN = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const user = result.user
                if (result.user) {
                    axiosSecure.post("/users", { name: user.displayName, email: user?.email, photo: photoURL })
                        .then(res => {
                            if (res.data.insertedId) {
                                navigate("/")
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }
    return (
        <div className='flex justify-center items-center'>
            <button onClick={handleGoogleSignIN} className='border border-red-500 py-3 px-10 rounded-full'>Continue With Google</button>
        </div>
    );
};

export default GoogleLogin;