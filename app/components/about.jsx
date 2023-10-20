import image from "~/assets/img.png";
import Skills from "./skills";
import Tech from "./tech";
const About = () => {
  return (
    <div id="about" className="">
      <div className="container ">
        <div className="row justify-content-between">
          <div className="col-5 img-cont text-end">
              <img src={image} alt="dev" className="img-fluid"/>
           
          </div>
          <div className="col-6">
            <div className="about-me">
              <h2>Yeris AlejanDRa Aguilar</h2>
              <p>
                I skillfully navigated a diverse technology stack, including
                HTML, CSS, SASS, Bootstrap, JavaScript, and jQuery. I
                demonstrated proficiency in version control using Git, with a
                particular focus on platforms like GitHub and Bitbucket. I
                seamlessly integrated Restful APIs, enhancing the functionality
                and scope of projects. Furthermore, I contributed to WordPress
                theme development, employing tools like ACF to create robust and
                tailored solutions. My expertise also extended to React.js,
                where I crafted dynamic and engaging web experiences.
              </p>
              <div className="d-flex download-container">
                <a href="#" className="btn download">
                  Download My CV
                </a>
                <div className="download-btn"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex container">
        {/* slider */}
        <Tech />
      </div>
      <div className="container">
        <Skills />
      </div>
    </div>
  );
};

export default About;
