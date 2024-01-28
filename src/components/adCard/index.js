import classes from "./card.module.css";

const Card = ({ ad }) => {
    return (
        <div className={`${classes.cardContainer} row`}>
            <div className={`${classes.titleContainer} col-6`}>
                <span className={classes.title}>{ad.title}</span>
                <span className={classes.description}>توضیحات : {ad.description}</span>
            </div>
            <div className={`${classes.detailContainer} col-3`}>
                <span>{ad.price}</span>
                <span>{ad.meter}</span>
                <span>{ad.room}</span>
                <span>{ad.city}</span>
            </div>
            <div className={`${classes.cardImageContainer} col-3`}>
                <img alt="ad" src="./ad.png" />
            </div>
        </div>
    )
}

export default Card;