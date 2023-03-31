import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";

const rapidapiKey = RAPID_API_KEY;

console.log("api key", rapidapiKey);

const useFetch = (url, query) => {
    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(false);
    const [error, setError] = useState(false);

    const options = (endpoint, query) => ({
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            "X-RapidAPI-Key": rapidapiKey,
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: { ...query },
    });

    const fetchData = async () => {
        setIsloading(true);
        try {
            const response = await axios.request(options(url, query));
            setData(response.data.data);
            setIsloading(false);
        } catch (error) {
            console.log(error);
            setError(error);
            alert("There is an error");
        } finally {
            setIsloading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const reFetch = () => {
        setIsloading(true);
        fetchData();
    };

    return {
        data,
        isloading,
        error,
        reFetch,
    };
};

export default useFetch;
