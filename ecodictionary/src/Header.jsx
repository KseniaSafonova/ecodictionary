import Button from "./Button";
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <Button title='Table' />
            <Button title='Cards' />
            <Button title='Learn' />
        </div>
    )
}