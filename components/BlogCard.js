import Link from 'next/link' ;
import styles from "../styles/BlogCard.module.css" ;

export default function BlogCard ({title,author,coverPhoto,datePublised,slug}){
    return(
        <div className={styles.card}>
            <Link href={"/posts/" + slug}>
                <div className={styles.imgContainer}>
                    Image not working
                </div>
            </Link>
            <div className={styles.text}>
                <h2>{title}</h2>
                <div className={styles.detail}>
                    <div className={styles.author}>
                       Image not working
                       <h3>{author.name}</h3>
                    </div>
                    <div className={styles.date}>
                        {datePublised}
                    </div>
                </div>
            </div>
        </div>
    )
}