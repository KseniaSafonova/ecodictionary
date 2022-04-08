import { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './Table.module.css'

export default function TableString(props) {
    const [pressed, setPressed] = useState(false);


    const HandleClick = () => {
        setPressed(!pressed);
    }

    const HandleCancel = () => {

    }
    return (

        <tbody>
            {
                pressed ?
                    <tr>
                        <td>{props.id}</td>
                        <td><input /></td>
                        <td><input /></td>
                        <td><input /></td>
                        <td>
                            <div className={styles.buttonBlock}>
                                <Button variant="outline-success" onClick={HandleCancel} >Success</Button>
                                <Button variant="outline-danger">Delete</Button>
                            </div>
                        </td>
                    </tr>
                    :
                    <tr>
                        <td>{props.id}</td>
                        <td>{props.english}</td>
                        <td>{props.transcription}</td>
                        <td>{props.russian}</td>
                        <td>
                            <div className={styles.buttonBlock}>
                                <Button variant="outline-warning" onClick={HandleClick} >Edit</Button>
                                <Button variant="outline-danger">Delete</Button>
                            </div>
                        </td>
                    </tr>
            }
        </tbody>
    )
}