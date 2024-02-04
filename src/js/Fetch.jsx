import { useState, useEffect } from "react";
// import colors from '../json/colors.json';


function Fetch() {
  const [jsonData, setJsonData] = useState(null)
  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        const respose = await fetch("https://randomuser.me/api/");
        const data = await respose.json();
        setJsonData(data);
      }
      catch (error) {
        console.error("Error reading JSON file");
      }
    };

    console.log(jsonData);
    fetchJsonData();
  }, []);

  return (
    // <div className={colors.home_page.background}>
    <div>
      <h1>hello</h1>
      <pre>
        {JSON.stringify(jsonData)}
      </pre>
    </div >
  )
}


export default Fetch
