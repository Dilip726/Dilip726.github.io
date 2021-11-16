import React from "react";
import CallIcon from "@mui/icons-material/Call";
import CodeIcon from "@mui/icons-material/Code";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Main = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const style = {
    display: "flex",
    position: "absolute",
    top: "35%",
    left: "3%",
    margin: "15px",
  };
  const img = {
    width: "100%",
    height: "100vh",
    objectFit:'center'
  };
  const head1 = {
    color: "darkolivegreen",
    margin: "5px",
  };

  return (
    <>
      <div style={{ width: "100%"  }}>
        <div className="head" style={style}>
          <div className="headtitle">
            <h1>
              <WorkspacesIcon /> I'm Dilip Suthar
            </h1>
            <h2 style={head1}>
              <CodeIcon /> FullStack Developer
            </h2>
            <h4 className="number text-success">
              <CallIcon /> Let discuss in Deep :-
              <a href="tel:704-329-9326">704-329-9326</a>
            </h4>
          </div>
        </div>
        <div className="main">
          <img
            src="..\Img\leone-venter-VieM9BdZKFo-unsplash.jpg"
            alt=""
            style={img}
          />
        </div>
      </div>
      <div>
        <section className="about " id="about ">
          <div className="max-width ">
            <Stack spacing={2} sx={{ width: "100%" }}>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  CV Dawnloaded Succesfully
                </Alert>
              </Snackbar>
            </Stack>
            <h2 className="title ">About me</h2>
            <div className="about-content ">
              <div className="column left ">
                <img
                  src="/Img/PicsArt_02-10-05.36.24.jpg"
                  alt=" "
                  style={{ objectFit: "fill", borderRadius: "50%" }}
                />
              </div>
              <div className="cloumn right ">
                <Card sx={{ maxWidth: 600, Height: 300 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      I'm Dilip and Working as a{" "}
                      <span className="text-danger">FullStack Developer</span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Currently I'm pursing my B.Tech _Software Engineering in
                      final year. I had experience in Sales and Marketing (IT
                      Consultansy).I'm good in HTML , CSS and JS , React JS . I
                      have experience in Node JS - Express Js , MongoDB ,
                      Bootstrap , Matarial UI. Currently working as FullStack
                      Developer(MERN) at Stack Summation in Ahmedabad , Gujarat.
                    </Typography>
                  </CardContent>
                </Card>
                <a
                  onClick={handleClick}
                  href="..\Img\CURRICULUM  VITAE  - Dilip Suthar.docx"
                  download="Dilip Suthar"
                >
                  Dawnload CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="main">
        <section className="services" id="services">
          <div className="max-width ">
            <h2 className="title ">My Services</h2>
            <div className="serv-content ">
              <div className="card ">
                <div className="box ">
                  <Card sx={{ maxWidth: 400 }} className="p-2">
                    <CardActionArea>
                      <i className="fas fa-chart-line text-success" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Web Development (Mern)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Let's discuss in deep about project and Grow together
                          !
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              </div>
              <div className="card ">
                <div className="box ">
                  <Card sx={{ maxWidth: 400 }} className="p-2">
                    <CardActionArea>
                      <i className="fas fa-chart-line text-success" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Web Design
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Let's Build amazing and fabulous looking website !
                          Let's contact and Discuss.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              </div>
              <div className="card ">
                <div className="box ">
                  <Card sx={{ maxWidth: 400 }} className="p-2">
                    <CardActionArea>
                      <i className="fas fa-chart-line text-success" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          App Development
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Let's build growing and Amazing application ! Let's
                          discuss futher and Grow together.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="skills" id="skills">
          <div className="max-width ">
            <h2 className="title ">My Skills &amp; Introduction</h2>
            <div className="skills-content ">
              <div className="column left ">
                <div className="text ">Personal Information</div>
                <div className="Personal " id="Personal ">
                  <p></p>
                  <h6>
                    First Name :<span> Dilip </span>
                  </h6>
                  <h6>
                    Last Name : <span> Suthar</span>
                  </h6>
                  <h6>
                    Age <span>: 21</span>
                  </h6>
                  <h6>
                    Freelance <span>: Available</span>
                  </h6>
                  <h6>
                    Email ID <span>: suthardips123000@gmail.com</span>
                  </h6>
                  <h6>
                    Nationality <span>: Indian</span>
                  </h6>
                  <h6>
                    Langueges <span>: English , Hindi , Gujarati</span>
                  </h6>
                  <p />
                </div>
              </div>
              <div className="column right ">
                <div className="bars ">
                  <div className="info ">
                    <span>HTML</span>
                    <span>70%</span>
                  </div>
                  <div className="line html " />
                </div>
                <div className="bars ">
                  <div className="info ">
                    <span>CSS</span>
                    <span>65%</span>
                  </div>
                  <div className="line CSS " />
                </div>
                <div className="bars ">
                  <div className="info ">
                    <span>JavaScript</span>
                    <span>50%</span>
                  </div>
                  <div className="line JS " />
                </div>
                <div className="bars ">
                  <div className="info ">
                    <span>React JS</span>
                    <span>75%</span>
                  </div>
                  <div className="line JS " />
                </div>
                <div className="bars ">
                  <div className="info ">
                    <span>Node Js</span>
                    <span>40%</span>
                  </div>
                  <div className="line NodeJs " />
                </div>
                <div className="bars ">
                  <div className="info ">
                    <span>Express Js</span>
                    <span>35%</span>
                  </div>
                  <div className="line NodeJs " />
                </div>
                <div className="bars ">
                  <div className="info ">
                    <span>MongoDB</span>
                    <span>35%</span>
                  </div>
                  <div className="line MySQL " />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="experience">
        <section className="experience-details">
          <h2 className="title">Experience </h2>
          <div className="max-width">
            <div className="form-experience d-flex justify-content-between my-4 flex-wrap">
              <div className="tcname d-flex flex-wrap">
                <img
                  src="..\Img\png-transparent-emoji-emoticon-gesture-the-finger-index-finger-index-finger-angle-hand-orange-thumbnail.png"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
                <div className="tag mx-4">
                  <h4 className="companyName" id="company">Stack Summation - Full Time</h4>
                  <h5 className="role">FullStack Developer</h5>
                </div>
                <div className="company-links">
                  <a
                    className="company-link"
                    target="_blank"
                    rel="noreferrer"
                    title="Website"
                    href="https://www.stacksummation.com"
                  >
                    <svg
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="date">
                <p>Sep 2021 - Present</p>
                <span>Ahmedabad , Gujarat</span>
              </div>
            </div>
            <div className="form-experience d-flex justify-content-between my-3 flex-wrap">
              <div className="tcname d-flex flex-wrap">
                <img
                  src="..\Img\png-transparent-emoji-emoticon-gesture-the-finger-index-finger-index-finger-angle-hand-orange-thumbnail.png"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
                <div className="tag mx-4">
                  <h4 id="company">Akash TechnoLabs - Internship</h4>
                  <h5 className="role">Node JS Intern</h5>
                </div>
                <div className="company-links">
                  <a
                    className="company-link"
                    target="_blank"
                    rel="noreferrer"
                    title="Website"
                    href="https://akashtechnolabs.com/about-us.php"
                  >
                    <svg
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="date">
                <p>May 2021 - Jul 2021</p>
                <span>Ahmedabad , Gujarat</span>
              </div>
            </div>
            <div className="form-experience d-flex justify-content-between my-3 flex-wrap">
              <div className="tcname d-flex flex-wrap">
                <img
                  src="..\Img\png-transparent-emoji-emoticon-gesture-the-finger-index-finger-index-finger-angle-hand-orange-thumbnail.png"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
                <div className="tag mx-4">
                  <h4 id="company">Mitaja Corporstion - Full Time</h4>
                  <h5 className="role">Bench Sales Recruiter</h5>
                </div>
                <div className="company-links">
                  <a
                    className="company-link"
                    target="_blank"
                    rel="noreferrer"
                    title="Website"
                    href="https://mitajacorp.com/"
                  >
                    <svg
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="date">
                <p>Jan 2021 - May 2021</p>
                <span>Ahmedabad , Gujarat</span>
              </div>
            </div>
            <div className="form-experience d-flex justify-content-between my-3 flex-wrap">
              <div className="tcname d-flex flex-wrap">
                <img
                  src="..\Img\png-transparent-emoji-emoticon-gesture-the-finger-index-finger-index-finger-angle-hand-orange-thumbnail.png"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
                <div className="tag mx-4">
                  <h4 id="company">Dash Technology Inc - Full Time</h4>
                  <h5 className="role">Data Mining Specialist</h5>
                </div>
                <div className="company-links">
                  <a
                    className="company-link"
                    target="_blank"
                    rel="noreferrer"
                    title="Website"
                    href="https://dashtechinc.com/"
                  >
                    <svg
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="date">
                <p>Dec 2020 - May 2020</p>
                <span>Ahmedabad , Gujarat</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className="details d-flex justify-content-center"
        style={{ position: "relative", height: "100vh" }}
      >
        <section
          className="contact container"
          id="contact"
          style={{ position: "absolute", top: "-10px" }}
        >
          <div className="max-width">
            <h2 className="title">Contact Me</h2>
            <div className="details d-flex">
              <div className="contact-content">
                <div className="column left">
                  <div className="text fas fa-paint ">
                    Let's Connect and Grow
                  </div>
                  <div
                    className="d-flex flex-wrap"
                    style={{ wordWrap: "normal" }}
                  >
                    <p>
                      Feel free to get in touch with me.I am always open to
                      discussing new project , creative ideas or opportunity to
                      be part of your vision !
                    </p>
                  </div>
                  <div className="icons d-flex flex-wrap">
                    <i>
                      <a href="https://www.linkedin.com/in/dilip-suthar-a741520/ ">
                        LinkedIn
                      </a>
                    </i>
                    <i>
                      <a href="https://www.instagram.com/sthr__denny_741/ ">
                        Instagram
                      </a>
                    </i>
                    <i>
                      <a href="https://twitter.com/ ">Twitter</a>
                    </i>
                    <i>
                      <a href="https://en-gb.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=100 ">
                        Facebook
                      </a>
                    </i>
                  </div>
                  <div className="icon ">
                    <div className="row ">
                      <div className="info ">
                        <div className="head">Name</div>
                        <div className="sub-title ">Dilip Suthar</div>
                      </div>
                    </div>
                    <div className="row">
                      {/* <i className="fas fa-map-marker-alt " /> */}
                      <div className="info ">
                        <div className="head ">Address</div>
                        <div className="sub-title ">Gujarat ,Ahmedabad</div>
                      </div>
                    </div>
                    <div className="row ">
                      {/* <i className="fas fa-envelope " /> */}
                      <div className="info ">
                        <div className="head "> Email Id</div>
                        <div className="sub-title ">
                          suthardips123000@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className='column right my-5'>
                    <ContactForm />
                  </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="footer">
        <footer>
          {" "}
          <h5 className="footerhead" id="ft">Dilip Suthar - All Rights are reserved © 2021</h5>
        </footer>
      </div>
    </>
  );
};

export default Main;
