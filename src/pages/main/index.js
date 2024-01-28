import classes from "./main.module.css"

const Main = () => {
    return (
        <div className={classes.container}>
            <div className={classes.headerContainer}>
                <button>ورود / ثبت نام</button>
            </div>
            <div className={classes.mainContainer}>
                <img src="./panjere.png" alt="panjere"/>
                <input
                    type="text"
                    className={classes.search}
                    placeholder="شهر خود را انتخاب کنید"
                />
                <div className={classes.cities}>
                    <span>تهران</span>
                    <span>مشهد</span>
                    <span>کرج</span>
                    <span>اصفهان</span>
                    <span>شیراز</span>
                    <span>اهواز</span>
                    <span>تبریز</span>
                    <span>کرمانشاه</span>
                    <span>قم</span>
                </div>
            </div>
            <div className={classes.mainFooter}>
                <img src="./link.png" alt="insta"/>
                <img src="./instagram.png" alt="link"/>
                <img src="./telegram.png" alt="tel"/>
            </div>
        </div>
    )
}

export default Main;