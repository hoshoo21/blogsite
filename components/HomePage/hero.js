import classes from './hero.module.css';
import Image from 'next/image';
const Hero = (props) => {
    return (<section className={classes.hero}>
        <div className={classes.image}>
            <Image src="image/site/naveed.png"
                width={300}
                height={300}
            >   </Image>
        </div>
        <h1>Hi I am Naveed Asad</h1>
        <p> I blog for web development</p>

    </section>);

}

export default Hero;