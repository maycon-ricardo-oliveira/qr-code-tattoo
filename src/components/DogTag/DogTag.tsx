
import classes from "./DogTag.module.css"
import { tags } from '../../db/dog-tag.js';
import { Tag } from "../Tag/Tag.js";

const DogTag = () => {

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.dogTagCard}>
          {
            tags.map(tag => (
              <Tag data={tag} />
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default DogTag;