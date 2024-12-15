import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.css"

export default () => {
    return (
        <div>
            <h2 className={styles.main}>Hello</h2>
            <Link href={'/'}>Home</Link>
            <br />
            <Image src='/file.svg' alt="" width={100} height={100}></Image>
        </div>
    )
}