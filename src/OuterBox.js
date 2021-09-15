import Links from "./components/Links";
import { firstname, GITHUB, lastname, LINKEDIN } from "./constants";

const OuterBox = () => {
    return <>
    <div className="outerBox">
        <div className="name-header">{firstname} {lastname}</div>
        <div className="links">
          <ul>
            <li>{Links(LINKEDIN)}</li>
            <li>{Links(GITHUB)}</li>
          </ul>
        </div>
      </div>
    </>
}
export default OuterBox;