import { Fragment } from "react";
import Hero from '../components/HomePage/hero';
const HomePage = (props) => {

    return (
        <Fragment>
            <Hero />
            <FeaturedPosts />
        </Fragment>
    )

};

export default HomePage;