import { Seduce } from "../../types/seduce"
import classes from "./Party.module.css"

import Dislike from "../../icons/Dislike";
import Like from "../../icons/Like";
import Superlike from "../../icons/Superlike";
import { useState } from "react";
import { generateRandomSeduce } from "../../services/seduces";
import { SocialFollow } from "../SocialFollow/SocialFollow";

type Props = {
  data: Seduce
}
export function Party({ data } : Props) {

  const [wobble, setWobble] = useState(0)

  async function handleDislike () {
    console.log(wobble)
    setWobble(1)
    await new Promise(r => setTimeout(r, 1000));
    window.close();
  }

  async function handleSuperlike() {
    setWobble(2)
    await new Promise(r => setTimeout(r, 2000));
    sendMessage("super-like")
  }

  async function handleLike() {
    setWobble(3)
    await new Promise(r => setTimeout(r, 2000));
    sendMessage("like")
  }

  function sendMessage(type: "like" | "super-like") {
    let message = type == 'like' ? "Oie Maycon" : generateRandomSeduce().text;
    let url = `https://web.whatsapp.com/send?phone=+5535998123863`;
    url += `&text=${encodeURI(message)}&app_absent=0`;
    window.open(url);
  }

  return (
    <div className={classes.container}>
      <div className={classes.seduceCard} key={data.id}>
        
        <div className={classes.seduceTextContainer}>
          <p className={classes.seduceText}>{data.text}</p>
          {
            data.anwser &&
            <p className="seduceAnwser">{data.anwser}</p>
          }
        </div>
        
        <div className={classes.seduceButtons}>
          <button className={classes.button} onClick={() => handleDislike()}>
            <Dislike />
          </button>
          <button className={classes.button} onClick={() => handleSuperlike()}>
            <Superlike />
          </button>

          <button className={classes.button} onClick={() => handleLike()}>
            <Like />
          </button>

        </div>
      </div>

      <div className={classes.socialFollowCard} >
        <SocialFollow/>
      </div>
    </div>
  )

}