import Card from "../../components/adCard";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Filter from "./components/filter";
import classes from "./home.module.css";

const ads = [
    {
        price: 180,
        city: "تهران، نیاوران",
        room: "۲ خواب",
        meter: 170,
        description: "خوش نقشه، نور عالی، پارکینگ بدون مزاحم",
        title: "تراس دار بدون مشرف ویو رو به کوه فاز ۶"
    },
    {
        price: 180,
        city: "تهران، نیاوران",
        room: "۲ خواب",
        meter: 170,
        description: "خوش نقشه، نور عالی، پارکینگ بدون مزاحم",
        title: "تراس دار بدون مشرف ویو رو به کوه فاز ۶"
    },
    {
        price: 180,
        city: "تهران، نیاوران",
        room: "۲ خواب",
        meter: 170,
        description: "خوش نقشه، نور عالی، پارکینگ بدون مزاحم",
        title: "تراس دار بدون مشرف ویو رو به کوه فاز ۶"
    },
    {
        price: 180,
        city: "تهران، نیاوران",
        room: "۲ خواب",
        meter: 170,
        description: "خوش نقشه، نور عالی، پارکینگ بدون مزاحم",
        title: "تراس دار بدون مشرف ویو رو به کوه فاز ۶"
    },
    {
        price: 180,
        city: "تهران، نیاوران",
        room: "۲ خواب",
        meter: 170,
        description: "خوش نقشه، نور عالی، پارکینگ بدون مزاحم",
        title: "تراس دار بدون مشرف ویو رو به کوه فاز ۶"
    },
    {
        price: 180,
        city: "تهران، نیاوران",
        room: "۲ خواب",
        meter: 170,
        description: "خوش نقشه، نور عالی، پارکینگ بدون مزاحم",
        title: "تراس دار بدون مشرف ویو رو به کوه فاز ۶"
    }
]


const Home = () => {
    return (
        <div className={classes.homeContainer}>
            <Header/>
            <div className={`${classes.adsContainer} container-fluid`}>
                <div className="row">
                    <div className="col-3">
                        <Filter/>
                    </div>
                    <div className={`${classes.cardsContainer} col-9`}>
                        {
                            ads.map(ad => (
                                <Card
                                    ad={ad}
                                />
                            ))
                        }
                        <button className={classes.moreButton}>نمایش بیشتر</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;