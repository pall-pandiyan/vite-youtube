import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [jsonData, setJsonData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://randomuser.me/api/");
                setJsonData(response.data);
                setLoading(false)
            }
            catch (error) {
                console.error("Error loading data from randomuser.me!")
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

export default App