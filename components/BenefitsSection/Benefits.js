import styles from './Benefits.module.css'
import { useState } from 'react'
import { valuesData } from '../../data/ValuesData'
import { blogData } from '../../data/BlogData'
import Image from 'next/image'
import Link from 'next/link'

export default function Benefits() {

    const [data, setData] = useState(valuesData)
    const [blogInfo, setBlogInfo] = useState(blogData)

    return (
        <div className={styles.main}>
            <div className={styles.benefits}>
                <h2>What Sets Us Apart</h2>
                <div className={styles.benefitsCards}>
                    {
                        data && data.benefit.map((i, index) => {
                            return (
                                <div
                                    key={index}
                                    className={styles.benefitContainer}>
                                    <Image src={i.image} width={207} height={160} />
                                    <h3>{i.title}</h3>
                                    <p>{i.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.blog}>
                {
                    blogInfo && blogInfo.post.map((blog, indexBlog) => {
                        return (
                            <div
                                key={indexBlog}
                                className={styles.blogContainer}>
                                <Link href={blog.link} className={styles.links}>
                                    <Image src={blog.img} width={400} height={200} className={styles.blogImage} />
                                    <div className={styles.blogText}>
                                        <h3>{blog.title}</h3>
                                        <p>{blog.excerpt}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}