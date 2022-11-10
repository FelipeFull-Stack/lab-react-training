import style from "./style.module.css";

export function CreditCard(props) {



    return (
        <>
            <div className={style.div} style={{backgroundColor: props.bgColor, color: props.color}}>
                <div className={style.subDiv && style.type}>{props.type}</div>
                <div className={style.subDiv && style.number}>**** **** **** {props.number[12]}{props.number[13]}{props.number[14]}{props.number[15]}</div>
                <div className={style.subDiv && style.text}>
                    Expires: {props.expirationMonth}/{props.expirationYear} {props.bank}<br />
                    {props.owner}
                </div>
            </div>
        </>
    );
}