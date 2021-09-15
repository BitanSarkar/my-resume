import { description, firstname, lastname, MY_PHOTO_LINK, SERVER_PDF_LINK } from "./constants";

const ResumeBox = () => {
    return <>
    <div className="mah-container">
        <div className="jumbo_header">
          <div className="my_image_row">
            <img src={MY_PHOTO_LINK} alt={firstname} className="my_image" width="50%"/>
          </div>
          <div className="details_row">
            <div className="name">{firstname} {lastname}</div>
            <div className="description">{description}</div>
            <a className="btn btn-light text-dark shadow-sm mt-4 me-4 download" href={SERVER_PDF_LINK} target="_blank" rel="noreferrer">Download CV</a>
            <button className="btn btn-success shadow-sm mt-4 ml-4 hire" href="#contact" onClick={()=>{}}>Hire Me</button>
          </div>
        </div>
        <div className="mah-resume">
          <div className="row">
            <div className="col-6 aboueme">
              About me
            </div>
            <div className="col-6 contactdetails">
              Contact details
            </div>
          </div>
        </div>
      </div>
    </>
}
export default ResumeBox;