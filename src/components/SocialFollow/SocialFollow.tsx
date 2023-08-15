import classes from "./SocialFollow.module.css"

import {BiLogoInstagram, BiLogoWhatsapp} from 'react-icons/bi'
import { useState } from "react";


export function SocialFollow( ) {

  const [wobble, setWobble] = useState(0)

  async function handleWhatsapp() {
    setWobble(2)
    await new Promise(r => setTimeout(r, 2000));
    sendMessage()
  }

  async function handleInstagram() {
    setWobble(3)
    await new Promise(r => setTimeout(r, 2000));
    sendMessage()
  }

  function sendMessage() {
    let message = "Oie Maycon";
    let url = `https://web.whatsapp.com/send?phone=+5535998123863`;
    url += `&text=${encodeURI(message)}&app_absent=0`;
    return url;
  }

  return (
    <div className={classes.container}>
      <a href="https://www.instagram.com/dev.maycon"
        className={classes.socialIcon}>
        <BiLogoInstagram size={48} />
      </a>
      <a href={sendMessage()}
        className={classes.socialIcon}>
        <BiLogoWhatsapp size={48} />
      </a>
    </div>
  )

}