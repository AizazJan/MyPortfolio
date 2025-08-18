import "./project.css";
import ComplySimplify from "../../assets/Projects/Restoran.png";
import OyeeCar from "../../assets/Projects/my portfolio.png";
import EMS from "../../assets/Projects/Deaf .png";

const Project = () => {
  return (
    <div className="Project">
      <div className="background">
        <div className="heading">
          # Project
          <div className="line"></div>
        </div>

        <div className="ParentDiv">
          <div className="ChildDivs">
            <div className="Photo">
              <img className="ProjectImage" src={ComplySimplify} alt="Logo" />
            </div>
            <div className="Technology">
              <p>HTML, CSS, JavaScript</p>
            </div>
            <div className="Details">
              <h3>Restoran App </h3>
              <a
                href="https://restoran-eight-chi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="GitButton">Live {"<~>"}</div>{" "}
              </a>
            </div>
          </div>
          <div className="ChildDivs">
            <div className="Photo">
              <img className="ProjectImage" src={OyeeCar} alt="Logo" />
            </div>
            <div className="Technology">
              <p>HTML, CSS, JavaScript, TypeScript, React</p>
            </div>
            <div className="Details">
              <h3>My Portfolio</h3>
              <a
                href="https://my-portfolio-fyf2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="GitButton">Live {"<~>"}</div>{" "}
              </a>
            </div>
          </div>
          <div className="ChildDivs">
            <div className="Photo">
              <img className="ProjectImage" src={EMS} alt="Logo" />
            </div>
            <div className="Technology">
              <p>HTML , CSS , JavaScript , TYPESCRIPT , REACT , MONGODB </p>
            </div>
            <div className="Details">
              <h3>Deaf & Mute Communication</h3>
              <a
                // href="https://github.com/sahil1962/EnergyManagementSystem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="GitButton">Live {"<~>"}</div>{" "}
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Project;
