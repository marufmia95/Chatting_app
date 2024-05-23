import Lottie from 'lottie-react';
import React from 'react';
import aniRegistraion from '../../../public/animations/registration.json'


const Registration = () => {
    return (
        <div className='registration bg-secondary h-screen'>
           <div  className="container flex mx-auto items-center">
           <h1>Welcome to massingeing App</h1>

           <div className='w-[40%] login_registration_animation '>
            <Lottie animationData={aniRegistraion} className='w-[100%] mt-[60px]' />
            </div>

            </div>
        </div>
    );
};

export default Registration;