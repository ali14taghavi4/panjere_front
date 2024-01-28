import classes from "./footer.module.css";

const Footer = () => {
    return (
        <div className={classes.footerContainer}>
            <div className="row h-75">
                <div className={`${classes.column} col-3`}>
                    <span>پنجره</span>
                    <span>درباره پنجره</span>
                    <span>بلاگ</span>
                    <span>فرصت های شغلی</span>
                    <span>میانگین قیمت مناطق تهران</span>
                </div>
                <div className={`${classes.column} col-3`}>
                    <span>راهنمای مشتریان</span>
                    <span>سوالات متداول</span>
                    <span>قوانین و مقررات</span>
                    <span>راهنما</span>
                    <span>تماس با پشتیبانی</span>
                </div>
                <div className={`${classes.xContainer} col-6`}> 
                    <img alt="x1" src="./x1.png"/>
                    <img alt="x2" src="./x2.png"/>
                    <img alt="x3" src="./x3.png"/>
                </div>
            </div>
            <div className={`${classes.footerFooter} h-25`}>
                <span>کلیه حقوق وبسایت پنجره متعلق به شرکت راهین دیجیتال است</span>
                <img alt="panjere" src="./panjere.png"/>
            </div>
        </div>
    )
}

export default Footer;