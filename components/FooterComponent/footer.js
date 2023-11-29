import styles from './Footer.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.linksContainer}>
          <div className={styles.aboutContainer}>
            <h3>About</h3>
            <h6>Our Story</h6>
            <Link className={styles.link} href="https://innersight-blog.vercel.app/team"><h6>Meet the Team</h6></Link>
            <Link className={styles.link} href="https://innersight-blog.vercel.app/"><h6>Blog</h6></Link>
          </div>
          <div className={styles.supportContainer}>
            <h3>Support</h3>
            <h6>Crisis Support Resources</h6>
            <h6>Terms of Service</h6>
            <h6>Privacy Policy</h6>
          </div>
          <div className={styles.contactContainer}>
            <h3>Contact Us</h3>
            <h6> hello@innersight.com</h6>
            <h6>3700 Willingdon Ave, <br />
              Burnaby BC <br />
              V5G 3H2</h6>
          </div>
        </div>
        <div className={styles.socialsContainer}>
          <div className={styles.socials}>
            <Image src="/socials/insta.png" width={40} height={40} />
            <Image src="/socials/linkedin.png" width={40} height={40} />
            <Image src="/socials/facebook.png" width={40} height={40} />
            <Image src="/socials/x.png" width={30} height={30} />
          </div>
          <div className={styles.downloadBtn}>
            <Image src="/playstore.png" width={16} height={21} />
            <p>Download the App</p>
          </div>
        </div>
      </div>
    </>
  );
}
