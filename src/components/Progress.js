import { ProgressBar } from "react-bootstrap";
const Progress = (props) => {
    return <div className="skill">
        <h5 className="mt-4">{props[0]}</h5>
        <ProgressBar animated variant={props[2]?"success":"info"} now={props[1]} />
    </div>
}
export default Progress;