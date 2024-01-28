import { useState } from "react";
import classes from "./login.module.css";

const Register = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })
    return (
        <>
            <div className={classes.phoneContainer}>
                <label htmlFor="username">نام کاربری</label>
                <input
                    type=""
                    id="username"
                    onChange={(e) => {
                        setForm({
                            ...form, 
                            username: e.target.value
                        })
                    }}
                    value={form.username}
                />
            </div>
            <div className={classes.phoneContainer}>
                <label htmlFor="email">ایمیل</label>
                <input
                    type="text"
                    id="email"
                    onChange={(e) => {
                        setForm({
                            ...form, 
                            email: e.target.value
                        })
                    }}
                    value={form.email}
                />
            </div>
            <div className={classes.phoneContainer}>
                <label htmlFor="password">رمز عبور</label>
                <input
                    type="text"
                    id="password"
                    onChange={(e) => {
                        setForm({
                            ...form, 
                            password: e.target.value
                        })
                    }}
                    value={form.password}
                />
            </div>
            <button>ثبت نام</button>
        </>
    )
}

export default Register;