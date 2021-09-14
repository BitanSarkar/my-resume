import { GITHUB, GITHUB_LINK, LINKEDIN, LINKEDIN_LINK } from '../constants';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import './Links.css';
const Links = (links) => {
    let icon = null;
    let acc_link = null;
    if(links===GITHUB){
        icon = <FaGithub/>;
        acc_link = GITHUB_LINK;
    }
    if(links===LINKEDIN){
        icon = <FaLinkedin/>
        acc_link = LINKEDIN_LINK;
    }
    return <a className="links_" href={acc_link} target="_blank" rel="noopener noreferrer"> {icon}</a>;
}
export default Links;