import styles from '../../styles/Home.module.css'
import {useRouter} from "next/router";

export default function Element() {
    const {
        query: {id}
    } = useRouter();

    return (
        <div className={styles.container}>
            <h1>Viewing {id} for specific element</h1>
        </div>
    )
}
