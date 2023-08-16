import classes from "./Tag.module.css"
import { DogTag } from "../../types/dog-tag";

type Props = {
  data: DogTag
}
export function Tag({ data } : Props) {

  return (
    <div className={classes.container}>
      <p className={classes.tagValue}>{data.value}</p>
    </div>
  )

}