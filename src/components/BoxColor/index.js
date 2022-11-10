import style from "./style.module.css";

export function BoxColor(props) {
    let r, g, b;
    r = props.r;
    g = props.g;
    b = props.b;

    if((r<0 || r>255) || (g<0 || g>255) || (b<0 || b>255)){
        return <h1>Numeração de Cor INVALIDA!</h1>
    }

    let hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;



    return (
        <>
            <div className={style.div} style={{backgroundColor: `rgb(${r},${g},${b}`}}>
                rgb({r},{g},{b})<br />
                {hex}
            </div>
        </>
    );
}