import styles from '../../styles/periodicTable.module.css'
import ElementSquare from '../../components/TableElements/ElementSquare'

export default function About() {
    return (
        
        <div className={styles.container}>
            {/* For loop here later? */}
            <ElementSquare Atomic='1' Symbol='H' Name='Hydrogen' Weight='1.008'/>
        </div>
    )
}
