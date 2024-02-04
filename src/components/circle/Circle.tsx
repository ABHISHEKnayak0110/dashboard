import style from "./Circle.module.scss"
interface props {
    extraStyle ?: string
    color ?:string
}
function Circle(props : props) {
  return (
    <div className={`${style.circleWrapper} ${props.extraStyle}`}
      style={props?.color ? {backgroundColor : props.color } : {}}
    ></div>
  )
}

export default Circle