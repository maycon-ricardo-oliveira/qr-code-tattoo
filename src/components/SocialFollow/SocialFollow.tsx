import classes from "./SocialFollow.module.css"
import {BiLogoInstagram, BiLogoWhatsapp} from 'react-icons/bi'

export function SocialFollow( ) {

  function sendMessage() {
    let message = "Oie Maycon";
    let url = `https://wa.me/+5535998123863`;
    url += `?&text=${encodeURI(message)}`;
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