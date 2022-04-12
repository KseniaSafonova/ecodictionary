import Button from './Button';
import styles from './Card.module.css';
import { useState } from 'react';

export default function Card(props) {
    const { english, transcription, russian } = props;

    const [pressed, setPressed] = useState(false);

    const handleClick = () => {
        setPressed(!pressed);
    }

    return (
        <div className={styles.card}>
            <p>{english}</p>
            <p>{transcription}</p>

            {
                pressed ? <p>{russian}</p> : <Button title='Показать перевод' />
            }

        </div>
    )
};