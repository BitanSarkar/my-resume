import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ABOUT_ME, ABOUT_ME_HEAD, ADDRESS, ADDRESS_HEADER, AGE_HEADER, description, DOB_YEAR, EMAIL, EMAIL_HEADER, firstname, lastname, MY_PHOTO_LINK, PHONE, PHONE_HEADER, SERVER_PDF_LINK, SKILLS_HEADER } from "./constants";
const printDocument = () =>  {
	const input = document.getElementById('print');
	console.log(input);
	html2canvas(input)
		.then((canvas) => {
			console.log(canvas);
			const imgData = canvas.toDataURL('image/png');
			window.open(imgData)
			const pdf = new jsPDF();
			pdf.addImage(imgData, 'PNG', 0, 0);
			// pdf.output('dataurlnewwindow');
			pdf.save("download.pdf");
		})
	;
}
const ResumeBox = () => {
    return <>
    <div className="mah-container"><div id="print">
        <div className="jumbo_header">
          <div className="my_image_row">
            <img src={MY_PHOTO_LINK} alt={firstname} className="my_image" width="50%"/>
          </div>
          <div className="details_row">
            <div className="name">{firstname} {lastname}</div>
            <div className="description">{description}</div>
            <a className="btn btn-light text-dark shadow-sm mt-4 me-4 download" href={SERVER_PDF_LINK} target="_blank" rel="noreferrer">Download CV</a>
            <button className="btn btn-success shadow-sm mt-4 ml-4 hire" href="#contact" onClick={printDocument}>Hire Me</button>
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