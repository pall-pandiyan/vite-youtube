import { useState, useEffect } from "react";
import api from "../config/api";


const Root = () => {
    const [jsonData, setJsonData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/");
                setJsonData(response.data);
                setLoading(false);
            }
            catch (error) {
                console.error("Error loading data from randomuser.me!");
                // console.error(error);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }
    return <h1>{JSON.stringify(jsonData)}</h1>
}

export default Root