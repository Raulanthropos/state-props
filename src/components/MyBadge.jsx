import { Badge } from "react-bootstrap"

const MyBadge = (props) => {
    return (
        <>
        <Badge style={{ color: props.colour }} variant={props.variant}>{props.textcontent}</Badge>
        </>
    )
}

export default MyBadge;