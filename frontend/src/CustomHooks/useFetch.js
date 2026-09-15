import { useState, useEffect } from "react";

function useFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(url);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setData(null);
        }

        fetch(url, { credentials: "include" }).then(
            (res) => {
                if (!res.ok) {
                    setError("could not fetch data")
                }
                console.log(res.json);

                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false)
            })

        fetchData()
    }, [url])

    console.log(data);

    return { data, loading, error }

}

export default useFetch