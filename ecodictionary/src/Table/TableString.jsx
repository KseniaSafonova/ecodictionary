import { Button } from 'react-bootstrap';

export default function TableString(props) {
    return (

        <tbody>
            <tr>
                <td>{props.id}</td>
                <td>{props.english}</td>
                <td>{props.transcription}</td>
                <td>{props.russian}</td>
                <td><Button variant="outline-warning">Edit</Button>
                    <Button variant="outline-danger">Delete</Button>
                </td>
            </tr>
        </tbody>

    )
}