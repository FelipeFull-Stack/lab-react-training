import style from "./style.module.css";

export function Random(props) {
    let str = "=>";

    return (
        <>
            <div className={style.div}>
                Random value between {props.min} and {props.max} {str} {Math.floor(Math.random()*(props.max - props.min) + props.min)}
            </div>
        </>
    );

}