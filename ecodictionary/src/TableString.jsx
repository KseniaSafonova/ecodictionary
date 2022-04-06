

export default function TableString(props) {
    return (

        <tbody>
            <tr>
                <td>{props.id}</td>
                <td>{props.english}</td>
                <td>{props.transcription}</td>
                <td>{props.russian}</td>
            </tr>
        </tbody>

    )
}