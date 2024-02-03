import { useState, useEffect } from "react";
import colors from '../json/colors.json';

function App() {

  // const [colors, setColors] = useState(null)
  // useEffect(() => {
  //   const fetchColors = async() => {
  //     try {
  //       const respose = await fetch("/home/rx7/projects/training/react/vite/vite-youtube/src/json/colors.json");
  //       const data = respose.json();
  //       setColors(data);
  //     }
  //     catch (error) {
  //       console.error("Error reading JSON file");
  //     }
  //   };

  //   console.log(colors);
  //   fetchColors();
  // }, []);


  return (
    <div className={colors.home_page.background}>
      <h1>hello</h1>
    </div>

  )
}


export default App
