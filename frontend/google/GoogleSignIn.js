import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';


function GoogleSignIn() {
    const handleSuccess = async (response) => {
        try {
            const { credential } = response;

            const result = await axios.post(import.meta.env.VITE_GOOGLE_AUTHORIZED, 
                { token: credential },
                { withCredentials: true } 
            );

            console.log('User logged in:', result.data);

            localStorage.setItem('user', JSON.stringify(result.data));

            
            window.location.href = '/dashboard'; 
        } catch (error) {
            console.error('Google Sign-In failed:', error.response?.data?.message || error.message);
        }
    };

    const handleFailure = () => {
        console.error('Google Sign-In failed');
    };

    return (
        <div>
            <h2>Sign in with Google</h2>
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleFailure}
            />
        </div>
    );
}

export default GoogleSignIn;
