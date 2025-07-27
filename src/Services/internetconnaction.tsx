import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Bounce, toast } from 'react-toastify';
import { setNetwork } from '../store/Featuers/Network';

function InternetConnection({ children }) {
    const dispatch = useDispatch();

    const setOnline = () => {
        toast.dismiss();
        dispatch(setNetwork(true));
        toast.success('📡 You are Online', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: 'light',
            transition: Bounce,
        });
    };

    const setOffline = () => {
        toast.dismiss();
        dispatch(setNetwork(false));
        toast.warn('⁉️ You are Offline', {
            position: 'bottom-right',
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: 'light',
            transition: Bounce,
        });
    };

    useEffect(() => {
        dispatch(setNetwork(navigator.onLine));
        window.addEventListener('online', setOnline);
        window.addEventListener('offline', setOffline);
        return () => {
            window.removeEventListener('online', setOnline);
            window.removeEventListener('offline', setOffline);
        };
    }, [dispatch]);

    return <>{children}</>;
}

export default InternetConnection;