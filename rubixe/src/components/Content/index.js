import "./index.css";

const Content = () => {
  return (
    <div>
      <div className="first-container">
        <div id="overlay">
          <div className="heading-container">
            <h1 className="first-heading">
              <span className="big-span">TECH</span>
              <br />
              <span className="small-span">FOR</span> TEENS
            </h1>
            <p className="first-para">
              CARVING FUTURE TECHNOLOGY PROFESSIONALS OUT OF YOUNG MINDS
            </p>
          </div>
        </div>
        <div className="first"></div>
      </div>
      <div className="second">
        <div className="second-content-lg">
          <div className="second-content">
            <h2 className="second-heading">WHO WE ARE</h2>
            <p className="second-para">
              Rubixe™ is a global technology company specializing in disruptive
              technologies - Artificial Intelligence (AI). Machine Learning.
              Robotic Process Automation (RPA).BlockChain, and Internet of
              Things (IoT).
              <br />
              <br />
              Rubixe mission is to enable businesses to leverage the full
              potential of disruptive technologies and stay competitive in the
              market, turning complex challenges into solutions, providing a
              strategic competitive advantage that are more efficient, effective
              and predictable.
            </p>
          </div>
          <div className="image-container">
            <img
              src="https://img.freepik.com/free-photo/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime_146671-16288.jpg?size=626&ext=jpg&ga=GA1.2.1069133899.1676538911&semt=ais"
              className="second-image"
            />
          </div>
        </div>
        <div className="second-content-sm">
          <h2 className="second-heading">WHO WE ARE</h2>
          <p className="second-para">
            Rubixe™ is a global technology company specializing in disruptive
            technologies - Artificial Intelligence (AI). Machine Learning.
            Robotic Process Automation (RPA).BlockChain, and Internet of Things
            (IoT).
            <br />
            <br />
            Rubixe mission is to enable businesses to leverage the full
            potential of disruptive technologies and stay competitive in the
            market, turning complex challenges into solutions, providing a
            strategic competitive advantage that are more efficient, effective
            and predictable.
          </p>
          <div>
            <img
              src="https://img.freepik.com/free-photo/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime_146671-16288.jpg?size=626&ext=jpg&ga=GA1.2.1069133899.1676538911&semt=ais"
              className="second-image"
            />
          </div>
        </div>
      </div>
      <div class="third">
        <h2 className="third-heading">WHERE WE STARTED</h2>
        <p className="third-para">
          We started in 2015, With a passionate team who want to bring
          game-changing solutions through disrupting technologies. We expertise
          in delivering enterprise-level solutions in the field of Artificial
          Intelligence (AI), Cyber Security, Robotic Process Automation (RPA),
          Internet of Things (loT), and BlockChain technology.
        </p>
      </div>
      <div className="fourth">
        <h2>TECH FOR TEENS - A RUBIXE &#174; INITIATIVE</h2>
        <div className="cards">
          <div className={`card card1`}>
            <div className="header">
              <div className="numberbox">
                <p className="number">01</p>
              </div>
            </div>
            <div className="card-body">
              <img
                className="icon"
                src="https://res.cloudinary.com/dtc4skqpg/image/upload/v1676548885/ai_yq53jv.png"
              />
              <p>Introducing AI to children in an age appropriate manner.</p>
            </div>
          </div>
          <div className={`card card2`}>
            <div className="card-body">
              <p>
                Gain awareness on AI and build an interactive story around it.
              </p>
              <img
                className="icon"
                src="https://res.cloudinary.com/dtc4skqpg/image/upload/v1676548883/artificial-intelligence_hv6alf.png"
              />
            </div>
            <div className="header">
              <div className="numberbox">
                <p className="number">02</p>
              </div>
            </div>
          </div>
          <div className={`card card3`}>
            <div className="header">
              <div className="numberbox">
                <p className="number">03</p>
              </div>
            </div>
            <div className="card-body">
              <img
                className="icon"
                src="https://res.cloudinary.com/dtc4skqpg/image/upload/v1676548885/artificial-intelligence_1_mcrjkd.png"
              />
              <p>Acquire programming skills in a user-friendly format.</p>
            </div>
          </div>
          <div className={`card card4`}>
            <div className="card-body">
              <p>Exposure to mini projects on diverse topics.</p>
              <img
                className="icon"
                src="https://res.cloudinary.com/dtc4skqpg/image/upload/v1676548884/management-service_leg173.png"
              />
            </div>
            <div className="header">
              <div className="numberbox">
                <p className="number">04</p>
              </div>
            </div>
          </div>
          <div className={`card card5`}>
            <div className="header">
              <div className="numberbox">
                <p className="number">05</p>
              </div>
            </div>
            <div className="card-body">
              <img
                className="icon"
                src="https://res.cloudinary.com/dtc4skqpg/image/upload/v1676548885/education_v8qpez.png"
              />
              <p>Train the tecahers programme.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
