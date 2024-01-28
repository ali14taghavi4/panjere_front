import classes from "./login.module.css";
import Confirm from "./confirm";
import Register from "./register";
import Phone from "./phone";
const Login = () => {
    
    return (
        <div className={classes.loginContainer}>
            <div className={classes.formContainer}>
                <div className={classes.logo}>
                    <img src="./panjere.png" alt="panjere"/>
                </div>
                <span>ورود |‌ ثبت نام</span>
                {/* <Confirm/> */}
                <Register/>
                {/* <Phone/> */}
            </div>            
        </div>
    )
}

export default Login;