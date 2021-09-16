import { savePDF } from "@progress/kendo-react-pdf/dist/es/savePDF";
import emailjs,{init} from "emailjs-com";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import EduExp from "./components/EduExp";
import Progress from "./components/Progress";
import WorkExp from "./components/WorkExp";
import { ABOUT_ME, ABOUT_ME_HEAD, ADDRESS, ADDRESS_HEADER, AGE_HEADER, description, DOB_YEAR, EDU_EXP, EDU_HEAD, EMAIL, EMAIL_HEADER, firstname, lastname, LEFT_SKILLS, MY_PHOTO_LINK, PHONE, PHONE_HEADER, RIGHT_SKILLS, SERVICE_ID, SKILLS_HEADER, TEMPLATE_ID, USER_ID, WORK_EXP, WORK_EXP_HEAD } from "./constants";
import useWindowDimensions from "./WindowDim";


const ResumeBox = () => {
  
  const history = useHistory();
  const [remove, setRemove] = useState(false);
  const [disp, setDisplay] = useState(false);
  const {width } = useWindowDimensions();
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const printDocument = () =>  {
    setRemove(true)
    setTimeout(()=>{
      const input = document.getElementById('print');
      savePDF(input, { 
        paperSize: 'A4',
        fileName: firstname+"_"+lastname+year+(month>9?"":"0")+month+day+'_resume.pdf',
        scale: 0.583,
        author: firstname+" "+lastname,
        creator: firstname+" "+lastname,
        title: firstname+ "'s Resume",
        date: date
      });
    },500);
    setTimeout(()=>{setRemove(false)},1000) 
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    init(USER_ID);
    emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,event.target,USER_ID)
    .then(resp => {
      if(resp.status===200){
        setDisplay(false);
        history.push("/")
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        alert(firstname + ", got an email from you. He will contanct you shortly");
      }
    },
    (error) => {
      alert("An error occurred, Please try again", error.text);
    })

  }
  window.addEventListener('click', (event) => {
    let elm = event.target.toString();
    if(elm.indexOf('#contact')!==-1){
      setDisplay(true);
    }
  });
    return <>
    <div className={width<1000?"mah-container_":"mah-container"}><div id="print">
        <div className={remove?"jumbo_header_":"jumbo_header"}>
          <div className="my_image_row">
            <img src={MY_PHOTO_LINK} alt={firstname} className="my_image" width={""+Math.round(width*(Math.max(0.305545 - width/6733,0.08)))+"px"}/>
          </div>
          <div className="details_row">
            <div className="name">{firstname} {lastname}</div>
            <div className="description">{description}</div>
            <button className={"btn btn-light text-dark shadow-sm mt-4 me-4 download"+(remove?"remove":"")} id="download" onClick={printDocument}>Download CV</button>
            <a className={"btn btn-success shadow-sm mt-4 ml-4 hire"+(remove?"remove":"")} id="contactDetails" href="#contact">Hire Me</a>
          </div>
        </div>
        <div className={remove?"mah-resume_":"mah-resume"}>
          <div className="container row mb-2">
            <div className="col-5 aboutme mt-4">
              <h2>{ABOUT_ME_HEAD}</h2>
              <p align="justify">{ABOUT_ME}</p>
            </div>
            <div className="col-2"></div>
            <div className="col-5 contactdetails mt-4">
              <div className="row mt-4">
                  <div className="col-6">{AGE_HEADER}</div>
                  <div className="col-6">{date.getFullYear() - DOB_YEAR}</div>
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
					<div className="row container skills mt-4 mb-2">
            <div className="col-12 mb-4">
              <h2 className="ms-2">{SKILLS_HEADER}</h2>
              <div className="row">
                <div className="col-6">
                  {LEFT_SKILLS.map(x => { 
                    return <div>{Progress([x.skill, x.level])}</div>
                  })}
                </div>
                <div className="col-6">
                  {RIGHT_SKILLS.map(x => { 
                    return <div>{Progress([x.skill, x.level, true])}</div>
                  })}
                </div>
              </div>
            </div>
					</div>
          <hr/>
          <div className="row container work_exp mt-4 mb-2">
            <div className="col-12 mb-4">
              <h2 className="ms-2">{WORK_EXP_HEAD}</h2>
              <div class="timeline">
                {WORK_EXP.map(x=>{
                  return <div>{WorkExp([x.designation, x.company_name, x.timeperiod, x.description, x.type])}</div>
                })}
              </div>
            </div>
					</div>
          <hr/>
          <div className="row container work_exp mt-4 mb-2">
            <div className="col-12 mb-4">
              <h2 className="ms-2">{EDU_HEAD}</h2>
              <div class="timeline">
                {EDU_EXP.map(x=>{
                  return <div>{EduExp([x.degree, x.insitution_name, x.timeperiod, x.score])}</div>
                })}
              </div>
            </div>
					</div>
          <hr/>
          <div class="contant-section px-3 px-lg-4 pb-4" id={disp?"contact":"contact_none"}>
            <h2 class="h3 text mb-3">Contact</h2>
            <div class="row">
              <div class="col-12 d-print-none">
                <div class="my-2">
                  <form onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col-6">
                        <input class="form-control" type="text" id="name" name="name" placeholder="Your Name" required="true"/>
                      </div>
                      <div class="col-6">
                        <input class="form-control" type="email" id="email" name="replyto" placeholder="Your E-mail" required="true"/>
                      </div>
                    </div>
                    <div class="form-group my-2">
                      <textarea class="form-control" style={{resize: "none"}} id="message" name="message" rows="4" placeholder="Your Message" required="true"></textarea>
                    </div>
                    <button class="btn btn-primary mt-2" type="submit">Send</button>
                  </form>
                </div>
              </div>
              </div>
            </div>
        </div>
      </div></div>
    </>
}
export default ResumeBox;