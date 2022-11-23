import Alert from 'react-bootstrap/Alert'


const WarningSign = (props) => {
    return (
    <div>
            <Alert variant={props.something}>No more errors, anymore!</Alert>
    </div>
    )

}

export default WarningSign;