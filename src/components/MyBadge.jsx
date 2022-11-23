import { Badge } from "react-bootstrap"

const MyBadge = (props) => {
    return (
        <>
        <Badge variant={props.variant}>{props.textcontent}</Badge>
        </>
    )
}

export default MyBadge;