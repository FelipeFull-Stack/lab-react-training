import style from "./style.module.css";

export function IdCard(props) {
    let height = props.height.toString();
    return (
        <div className={style.container}>
            <img className={style.imgFoto} src={props.picture} alt="foto" />
            <div>
                First name: {props.firstName}<br />
                Last name: {props.lastName}<br />
                Gender: {props.gender}<br />
                Height: {`${height[0]},${height[1]}${height[2]}m`}<br />
                Birth: {props.birth}<br />
            </div>
        </div>
    )
}