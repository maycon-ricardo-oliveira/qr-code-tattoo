import { Party } from "../components/Party/Party";
import { getCurrentApp } from "../services/configs";
import { generateRandomSeduce } from "../services/seduces";
import DogTag from "../components/DogTag/DogTag";
import classes from "./Home.module.css"
import { useEffect, useState } from "react";

const Home = () => {

  const [currentApp, setCurrentApp] = useState('Party');

  useEffect(() => {
    getApp()
  }, [])

  async function getApp() {
    const result = await getCurrentApp();
    setCurrentApp(result)
  }
  
  return (
    <div className={classes.container}>
      {
        currentApp == 'Party' 
        ? <Party data={generateRandomSeduce()}/> 
        : <DogTag />
      }
    </div>
  )
}

export default Home;