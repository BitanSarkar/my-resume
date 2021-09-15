import { savePDF } from "@progress/kendo-react-pdf/dist/es/savePDF";
import { useState } from "react";
import { ABOUT_ME, ABOUT_ME_HEAD, ADDRESS, ADDRESS_HEADER, AGE_HEADER, description, DOB_YEAR, EMAIL, EMAIL_HEADER, firstname, lastname, MY_PHOTO_LINK, PHONE, PHONE_HEADER, SERVER_PDF_LINK, SKILLS_HEADER } from "./constants";


const ResumeBox = () => {
  const [remove, setRemove] = useState(false);
  const printDocument = () =>  {
    setRemove(true)
    setTimeout(()=>{
      const input = document.getElementById('print');
      savePDF(input, { 
        paperSize: 'A4',
        fileName: firstname+"_"+lastname + '_resume.pdf',
        scale: 0.67,
        author: firstname+" "+lastname,
        creator: firstname+" "+lastname,
        title: firstname+ "'s Resume",
        date: new Date()
      });
    },500);
    setTimeout(()=>{setRemove(false)},1000) 
    
  }
    return <>
    <div className="mah-container"><div id="print">
        <div className="jumbo_header">
          <div className="my_image_row">
            <img src={MY_PHOTO_LINK} alt={firstname} className="my_image" width="50%"/>
          </div>
          <div className="details_row">
            <div className="name">{firstname} {lastname}</div>
            <div className="description">{description}</div>
            <button className={"btn btn-light text-dark shadow-sm mt-4 me-4 download"+(remove?"remove":"")} id="download" onClick={printDocument}>Download CV</button>
            <button className={"btn btn-success shadow-sm mt-4 ml-4 hire"+(remove?"remove":"")} id="contactDetails" href="#contact" >Hire Me</button>
          </div>
        </div>
        <div className="mah-resume">
          <div className="container row mb-2">
            <div className="col-5 aboutme mt-4">
              <h2>{ABOUT_ME_HEAD}</h2>
              <p align="justify">{ABOUT_ME}</p>
            </div>
            <div className="col-2"></div>
            <div className="col-5 contactdetails mt-4">
              <div className="row mt-4">
                  <div className="col-6">{AGE_HEADER}</div>
                  <div className="col-6">{new Date().getFullYear() - DOB_YEAR}</div>
              </div>
              <div className="row mt-2">
                  <div className="col-6">{EMAIL_HEADER}</div>
                  <div className="col-6">
                      {EMAIL.map(x=>{
                          return <div>{x}</div>
                      })}
                  </div>
              </div>
              <div className="row mt-2">
                  <div className="col-6">{PHONE_HEADER}</div>
                  <div className="col-6">
                  {PHONE.map(x=>{
                          return <div>{x}</div>
                      })}
                  </div>
              </div>
              <div className="row mt-2">
                  <div className="col-6">{ADDRESS_HEADER}</div>
                  <div className="col-6">
                    {ADDRESS.map(x=>{
                        return <p align="justify">{x}</p>
                    })}
                  </div>
              </div>
            </div>
          </div>
					<hr/>
					<div className="container skills mt-4">
						<h2>{SKILLS_HEADER}</h2>
					</div>
        </div>
      </div></div>
    </>
}
export default ResumeBox;