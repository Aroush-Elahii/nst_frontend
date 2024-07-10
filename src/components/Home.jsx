import backgroundImage from "../background.png"; // Import your background image
import logo from "../logo_dark.png"
import { Link } from "react-router-dom";

import './css/Home.css';

function Home() {
  return (
    <>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <nav class="navbar justify-content-between">
          <a class="navbar-brand mr-5"
            style={{ marginLeft: "60px" }}>

            <img src={logo}
              style={{ width: "80px" }}
              alt="" />

          </a>
          <Link to="/login">
            <button className="chat-btn">Sign In</button>
          </Link>
        </nav>
        <div className="overlay">
          <h1>
            Neuron Service <br />
            Tech.
          </h1>
        </div>
      </div>
      <div className="container-fluid my-5">
        <div
          className="row justify-content-center"
          style={{ marginBottom: "200px" }}
        >
          {/* Card 1 */}
          <div className="col-md-3">
            <div
              className="card shadow p-3 mb-5 bg-body "
              style={{ borderRadius: "15px", height:"400px" }}
            >
              {" "}
              {/* Added shadow and rounded corners */}
              <div className="card-body text-center">
                <div className="mb-3">
                  <img
                    style={{ width: "35%" }}
                    className="mb-5"
                    src="https://res.cloudinary.com/dzlmatytu/image/upload/v1714688563/Group_411_hymw8q.png"
                  ></img>
                </div>
                <h5 className="card-title fw-bold mb-4">
                  Effortless Integration
                </h5>{" "}
                {/* Made title bold */}
                <p className="card-text text-muted">
                  Integrate with ease and speed.
                </p>{" "}
                {/* Added text-muted for styling */}
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-3">
            <div
              className="card shadow p-3 mb-5 bg-body "
              style={{ borderRadius: "15px", height:"400px" }}
            >
              {" "}
              {/* Added shadow and rounded corners */}
              <div className="card-body text-center">
                <div className="mb-3">
                  <img
                    style={{ width: "35%" }}
                    className="mb-5"
                    src="https://res.cloudinary.com/dzlmatytu/image/upload/v1714688564/Group_412_hbmpel.png"
                  ></img>
                </div>
                <h5 className="card-title fw-bold mb-4">Quick Response</h5>{" "}
                {/* Made title bold */}
                <p className="card-text text-muted">
                  We provide fast and reliable support.
                </p>{" "}
                {/* Added text-muted for styling */}
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-md-3">
            <div
              className="card shadow p-3 mb-5 bg-body "
              style={{ borderRadius: "15px", height:"400px" }}
            >
              {" "}
              {/* Added shadow and rounded corners */}
              <div className="card-body text-center">
                <div className="mb-3">
                  <img
                    style={{ width: "35%" }}
                    className="mb-5"
                    src="https://res.cloudinary.com/dzlmatytu/image/upload/v1714688563/Group_413_iz5ewn.png"
                  ></img>
                </div>
                <h5 className="card-title fw-bold mb-4">Fully Secured</h5>{" "}
                {/* Made title bold */}
                <p className="card-text text-muted">
                  Your data is safe with industry-standard encryption.
                </p>{" "}
                {/* Added text-muted for styling */}
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="col-md-3">
            <div
              className="card shadow p-3 mb-5 bg-body "
              style={{ borderRadius: "15px", height:"400px" }}
            >
              {" "}
              {/* Added shadow and rounded corners */}
              <div className="card-body text-center">
                <div className="mb-3">
                  <img
                    style={{ width: "35%" }}
                    className="mb-5"
                    src="https://res.cloudinary.com/dzlmatytu/image/upload/v1714688563/Group_414_vdxmdp.png"
                  ></img>
                </div>
                <h5 className="card-title fw-bold mb-4">24/7 Support</h5>{" "}
                {/* Made title bold */}
                <p className="card-text text-muted">
                  We're here for you around the clock.
                </p>{" "}
                {/* Added text-muted for styling */}
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center " style={{marginBottom:"200px"}}>
          {/* Image Column */}
          <div className="col-md-6">
            <img
              src="https://res.cloudinary.com/dcgyigszf/image/upload/v1716417976/Component_1_xxqtxd.png"
              alt="Illustration"
              className="img-fluid illus-img"
            />
          </div>
          {/* Text Content Column */}
          <div className="col-md-6">
            <h2 className="mb-5">How It's Helpful For Our Partners</h2>
            <div className="mb-4">
              <h3 className="h5">
                <i className="bi bi-check2-circle me-2"></i>Ultra fast & Secure
              </h3>
              <p>We provide our customers ultra fast and secure services.</p>
            </div>
            <div className="mb-4">
              <h3 className="h5">
                <i className="bi bi-check2-circle me-2"></i>Allows customization
              </h3>
              <p>We allow our customers customized packages and services.</p>
            </div>
            <div className="mb-4">
              <h3 className="h5">
                <i className="bi bi-check2-circle me-2"></i>Smart contract
              </h3>
              <p>We provide our customers smart contract.</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center my-5 services-row">
  <div className="col-12 text-center mb-4">
    <h2 className="services-title">OUR SERVICES</h2>
  </div>
  <div className="col-md-6 mb-4">
    <div className="service-card text-center">
      <i className="fas fa-robot service-icon mb-3"></i>
      <h5>Customized ChatBot</h5>
      <p className="service-description">Create and deploy personalized chatbots for various applications.</p>
    </div>
  </div>
  <div className="col-md-6 mb-4">
    <div className="service-card text-center">
      <i className="fas fa-cogs service-icon mb-3"></i>
      <h5>API Integration</h5>
      <p className="service-description">Seamlessly integrate APIs to enhance functionality and efficiency.</p>
    </div>
  </div>
  <div className="col-md-6 mb-4">
    <div className="service-card text-center">
      <i className="fas fa-comments service-icon mb-3"></i>
      <h5>Generative and Contextual Response</h5>
      <p className="service-description">Utilize AI to provide accurate and context-aware responses.</p>
    </div>
  </div>
  <div className="col-md-6 mb-4">
    <div className="service-card text-center">
      <i className="fas fa-envelope service-icon mb-3"></i>
      <h5>Integrate with Email and Social Platforms</h5>
      <p className="service-description">Connect with various communication channels for comprehensive outreach.</p>
    </div>
  </div>
</div>


        <div className="row justify-content-center" style={{marginTop:"250px"}}>
          <div className="col-md-3">
            <div className="custom-card border-0 shadow-none mb-5">
              <div className="custom-card-header text-center">
                Consultation
              </div>
              <div className="custom-card-body text-center">
                <p className="custom-card-text">
                  We help you create a clear digital strategy that optimizes your path to comprehensive, technology-led business success.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="custom-card border-0 shadow-none mb-5">
              <div className="custom-card-header text-center">
                Managed Services
              </div>
              <div className="custom-card-body text-center">
                <p className="custom-card-text">
                  Our global Managed Services teams secure your digital investment with 24x7 monitoring, maintenance, and end-to-end support.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="custom-card border-0 shadow-none mb-5">
              <div className="custom-card-header text-center">
                Implementation
              </div>
              <div className="custom-card-body text-center">
                <p className="custom-card-text">
                  Our expertise spans all major technologies and business functions, empowering us to deliver comprehensive business solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center my-5">
          {/* Text Content Column */}
          <div className="col-md-6">
            <h2 className="mb-4" style={{ color: '#4a148c', fontWeight: 'bold' }}>What We Offer?</h2>
            <p style={{ color: '#6c757d' }}>
              Our Service Based model enables all sorts of organizations to use our quality services.
              We accomplish this by continually attracting the brightest minds in modern digital paradigms and platforms.
            </p>
          </div>
          {/* Image Column */}
          <div className="col-md-6 text-center">
            <img
              src="https://res.cloudinary.com/dcgyigszf/image/upload/v1716517327/high-tech-bFuUeyno4L_kjfbgk.png"
              alt="High Tech Illustration"
              className="img-fluid"
              style={{ maxWidth: '80%' }}
            />
          </div>
        </div>




        <div className="row justify-content-center my-5 targeted-industries-row">
          <div className="col-12 text-center mb-4">
            <h2 className="targeted-industries-title">Targeted Industries</h2>
          </div>
          <div className="col-md-4">
            <div className="targeted-industry-card text-center">
              <img
                src="https://res.cloudinary.com/dcgyigszf/image/upload/v1716517529/c4974ed86d9e8974823b278aa315f8d5_2_rrkclj.png"
                alt="Customer Support Agent"
                className="img-fluid industry-img mb-3"
              />
              <h5>Customer Support Agent</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="targeted-industry-card text-center">
              <img
                src="https://res.cloudinary.com/dcgyigszf/image/upload/v1716517529/53aaebede8803acec60d5f11f3295bfb_1_olzbvk.png"
                alt="Banking and Financial Advisory"
                className="img-fluid industry-img mb-3"
              />
              <h5>Banking and Financial Advisory</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="targeted-industry-card text-center">
              <img
                src="https://res.cloudinary.com/dcgyigszf/image/upload/v1716517529/d3f8863a077c5b54e181193d9a70291b_1_rqgpdz.png"
                alt="Educational Assistance"
                className="img-fluid industry-img mb-3"
              />
              <h5>Educational Assistance</h5>
            </div>
          </div>
        </div>

        <div className="row justify-content-center my-5">
          <div className="col-12 text-center">
            <img
              src="https://res.cloudinary.com/dcgyigszf/image/upload/v1716518087/a3a4e87f740c131469dc593452b8d4d2_1_kplkgp.png"
              alt="Welcome Image"
              className="img-fluid"
            />
          </div>
        </div>


        <div className="footer">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 text-left">
        <ul className="social-icons">
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
      <div className="col-md-6 text-right">
        <a href="#" className="footer-link">Privacy Policy</a>
        <a href="#" className="footer-link">Terms Of Use</a>
        <a href="#" className="footer-link">Team</a>
      </div>
    </div>
  </div>
</div>



      </div>
    </>
  );
}

export default Home;
