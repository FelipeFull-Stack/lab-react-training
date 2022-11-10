import style from "./style.module.css";

export function Greetings(props) {

    if(props.lang === "de") {
        return <div className={style.div}>
            Hallo {props.children}
        </div>
    }
    if(props.lang === "ne") {
        return <div className={style.div}>
            Hello {props.children}
        </div>
    }
    if(props.lang === "fr") {
        return <div className={style.div}>
            Bonjour {props.children}
        </div>
    }
    if(props.lang === "es") {
        return <div className={style.div}>
            Hola {props.children}
        </div>
    }
}