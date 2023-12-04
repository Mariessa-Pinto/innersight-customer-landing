import styles from './Nav.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav(){
    return(
        <div className={styles.main}>
            <Link href='/'><Image src='/nav_logo.png' width={170} height={38} /></Link>
        </div>
    )
}