import { useState } from "react";
import classes from "./login.module.css";

const Phone = () => {
    const [phone, setPhone] = useState("");
    return (
        <>
            <div className={classes.phoneContainer}>
                <label htmlFor="phone">شماره موبایل</label>
                <input
                    type="number"
                    id="phone"
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}
                    value={phone}
                />
            </div>
            <button>دریافت کد تایید</button>
        </>
    )
}

export default Phone; 