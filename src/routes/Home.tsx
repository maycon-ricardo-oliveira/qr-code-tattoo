import { Party } from "../components/Party/Party";
import { generateRandomSeduce } from "../services/seduces";
import classes from "./Home.module.css"

const Home = () => {

  return (
    <div className={classes.container}>
      <Party data={generateRandomSeduce()}/>
    </div>
  )
}

export default Home;