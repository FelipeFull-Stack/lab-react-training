
import { useState } from "react";
import style from "./style.module.css";
import img1 from "../images/passarinho1.png";
import img2 from "../images/passarinho2.png";

export function ImgState() {

    const [Img, setImg] = useState(img1);

    function handleChangeImg(event) {

        if (event.target.src === img1) {
            setImg(img2);
        }

        if (event.target.src === img2) {
            setImg(img1);
        }

    }

    return (
        <div className={style.container}>
            <button onClick={handleChangeImg}>
                <img src={Img} alt="a" />
            </button>
        </div>
    )
}