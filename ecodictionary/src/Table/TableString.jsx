import { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './Table.module.css'

export default function TableString(props) {
    const [pressed, setPressed] = useState(false);
    const { id, english, transcription, russian } = props;

    const HandleCancel = () => {
        setPressed(!pressed);
    }
    return (

        <tbody>
            {
                pressed ?
                    <tr>
                        <td>{id}</td>
                        <td><input value={english} /></td>
                        <td><input value={transcription} /></td>
                        <td><input value={russian} /></td>
                        <td>
                            <div className={styles.buttonBlock}>
                                <Button variant="outline-success" onClick={() => { setPressed(false) }} >Save</Button>
                                <Button variant="outline-danger" onClick={HandleCancel}>Cancel</Button>
                            </div>
                        </td>
                    </tr>
                    :
                    <tr>
                        <td>{id}</td>
                        <td>{english}</td>
                        <td>{transcription}</td>
                        <td>{russian}</td>
                        <td>
                            <div className={styles.buttonBlock}>
                                <Button variant="outline-warning" onClick={() => { setPressed(true) }}>Edit</Button>
                                <Button variant="outline-danger">Delete</Button>
                            </div>
                        </td>
                    </tr>
            }
        </tbody>
    )
}