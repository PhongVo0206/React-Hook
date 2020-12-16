import {useEffect, useState} from 'react';

const Route = ({path, children}) => {
    const [currentPath, setCurrentPath ] = useState(window.location.pathname);
    useEffect(()=>{
        const onLocationChagne = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', onLocationChagne);
        return () => {
            window.removeEventListener('popstate', onLocationChagne);
        }
    },[]);
    return currentPath === path ? children : null;
};

export default Route;