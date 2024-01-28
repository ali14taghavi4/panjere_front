import Footer from "../../components/footer";
import Header from "../../components/header";
import classes from "./addPost.module.css";

const AddPost = () => {
    return (
        <div className={classes.addPostContainer}>
            <Header/>
            <div className={classes.addPostPhoto}>
                <span>ثبت آگهی</span>
                <img alt="building" src="./build.png"/>
            </div>
            <Footer/>
        </div>
    )
}

export default AddPost;