import styles from './Nav.module.css'
import Image from 'next/image'

export default function Nav(){
    return(
        <div className={styles.main}>
            <Image src='/nav_logo.png' width={170} height={38} />
        </div>
    )
}