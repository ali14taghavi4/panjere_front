import classes from "./header.module.css";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={`col-9 ${classes.headerRight} `}>
                    <div className={`${classes.imageContainer}`}>
                        <img src="./panjere.png" alt="panjere"/>
                    </div>
                    <span>قیمت روز</span>
                    <span>نمونه ملک در مناطق</span>
                    <span>نشان شده</span>
                    <span>پشتیبانی</span>
                </div>
                <div className={`${classes.headerLeft} col-3`}>
                    <button className={classes.addAdButton}>ثبت اگهی</button>
                    <button className={classes.myAccount}>حساب من</button>
                </div>
            </div>
        </div>
    )
}

export default Header;