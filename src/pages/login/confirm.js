import { useState } from "react";
import classes from "./login.module.css";

const Confirm = () => {
    const [confirmCode, setConfirmCode] = useState("");
    return (
        <>
            <div className={classes.phoneContainer}>
                <label htmlFor="confirm">شماره موبایل</label>
                <input
                    type="number"
                    id="confirm"
                    onChange={(e) => {
                        setConfirmCode(e.target.value)
                    }}
                    value={confirmCode}
                />
            </div>
            <button>تایید</button>
        </>
    )
}

export default Confirm;