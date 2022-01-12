import { AboutContainer } from "./styles";

const About = () => {
  return (
    <AboutContainer rows="45% 55%" cols="50% 50%">
      <div>
        <h2>Awards & Achievements</h2>
        <ul>
          <li>Excellence Award By The Quality Circle Forum Of India (QCFI)</li>
          <li>Corporate Citizen Award 2016 by Indian Drug Manufacturers' Association</li>
          <li>The Prestigious Annual 'Innovator Award' From BioNJ, New Jersey</li>
          <li>Cardinal Supply Chain Excellence Award For 2015</li>
        </ul>
      </div>

      <div className="contact">
        <div>
          <h3>Contact Us</h3>
        </div>
        <div>
          <h3>Head Office</h3>
          <address>
            XYZ Pharma Limited,<br/>
            Embassy Tower<br/>
            M.G. Road, Bengaluru - 560002
            <br/><br/>
            Phone: +91 9876543210<br/>
            Fax: +91 9123456780<br/><br/>
            contact@xyzpharma.com
          </address>
        </div>
      </div>

      <div className="business">
        <div></div>
        <div>
          <h3>Business</h3>
          <p>We operate 24X7</p>
          <p>From 8:00 a.m. To 8:00 p.m.</p>
        </div>
      </div>
    </AboutContainer>
  );  
};

export default About;
