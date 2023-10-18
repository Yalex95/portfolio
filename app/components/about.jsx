import image from "~/assets/img.png";
const About = () => {
  return (
    <div id="about" className="">
      <div className="flex container">
        <div>
          <img src={image} alt="dev" />
        </div>
        <div className="about-me">
          <h2>Yeris AlejanDRa Aguilar</h2>
          <p>
            I skillfully navigated a diverse technology stack, including HTML,
            CSS, SASS, Bootstrap, JavaScript, and jQuery. I demonstrated
            proficiency in version control using Git, with a particular focus on
            platforms like GitHub and Bitbucket. I seamlessly integrated Restful
            APIs, enhancing the functionality and scope of projects.
            Furthermore, I contributed to WordPress theme development, employing
            tools like ACF to create robust and tailored solutions. My expertise
            also extended to React.js, where I crafted dynamic and engaging web
            experiences.
          </p>
          <div className="flex">
            <a href="#" className="btn download">
              Download My CV
            </a>
            <p>Take a Look</p>
          </div>
        </div>
      </div>
      <div className="flex container">
        {/* slider */}
      </div>
    </div>
  );
};

export default About;
