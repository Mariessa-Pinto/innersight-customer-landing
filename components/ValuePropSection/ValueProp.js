import GetStartedBtn from '../Buttons/GetStartedBtn'
import styles from './Value.module.css'
import Image from 'next/image'
import phoneBlob from '../../public/phone-mockup_2.svg'

export default function ValueProp() {
    return (
        <div className={styles.main}>
            <Image src='/PurpleBg.png' width={1440} height={700} className={styles.valueBg} />
            <div className={styles.content}>
                <div className={styles.txtContent}>
                    <h1>Write your thoughts. <br />Let AI handle the rest.</h1>
                    <p>
                        Innersight is a journal app that utilizes artificial intelligence to help find problems in your day to day life and give insights on how to covercome these struggles.
                    </p>
                    <p>
                        Your personal mental health companion.
                    </p>
                    <GetStartedBtn />
                </div>
                <div className={styles.imageContent}>
                    <Image src={phoneBlob} className={styles.phoneImg} />
                
                </div>
            </div>
        </div>
    )
}