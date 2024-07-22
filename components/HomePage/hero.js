import classes from './hero.module.css';
import Image from 'next/image';
const Hero = (props) => {
    return (<section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/naveed.png"
                width={300}
                height={300}
            />
        </div>
        <h1>Hi I am Naveed Asad</h1>
        <p> I wirtes blogs for web development</p>

    </section>);

}

export default Hero;