import {useState, useEffect} from 'react'

const useAxios = (configObj) => {
    const {
        axioInstance,
        method,
        url,
        requestConfig = {}
    } = configObj;
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(()={
        const controller = new AbortController();
        
    })
    return [response, error, loading]
}
export default useAxios;