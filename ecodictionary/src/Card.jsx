import styles from './Card.module.css';

export default function Card(props) {
    return (
        <div className={styles.card}>
            <p>{props.english}</p>
            <p>{props.transcription}</p>
            <p>{props.russian}</p>
        </div>
    )
};