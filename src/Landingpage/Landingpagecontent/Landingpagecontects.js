import { Container } from "@mui/material";
import React from "react";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import aboutsimg from "../../../src/img/aboutus-img.jpg";

const Landingpagecontects = () => {
  return (
    <div>
      <div className="hero-img">
        <div class="hero-container">
          <h1>
            Bettter digital <br></br>experience with Presento
          </h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <button class="btn">Get Started</button>
        </div>
      </div>
      <div className="Aboutus">
        <Container>
          <div className="aboutus-box">
            <div className="about-box-1">
              <h3>Welcome to [Your Company Name] - Your Home Appliance Repair Experts!</h3>
              <p>Bringing Your Appliances Back to Life, One Home at a Time</p>
              <ul>
                <li><DoneAllIcon  sx={{fontSize:20,color:"#e03a3c",marginRight:"10px"}}/>We believe in doing the job right the first time. Our technicians are trained to provide top-quality repairs using the best tools and replacement parts.</li>
                <li><DoneAllIcon sx={{fontSize:20,color:"#e03a3c",marginRight:"10px"}} />We know that your time is precious. That's why we stick to our appointments, arrive on time, and work efficiently to get your appliances back in working order promp</li>
                <li><DoneAllIcon sx={{fontSize:20,color:"#e03a3c",marginRight:"10px"}} />No hidden fees or surprises. We provide clear, upfront pricing, so you know exactly what to expect when you choose us for your appliance repairs.</li>
              </ul>
              <p className="aboutus-contecnt-box-1">At [Your Company Name], we understand the importance of functional home appliances in your daily life. When your appliances break down, it can disrupt your routine and cause inconvenience. That's where we come in! With our team of skilled technicians and a commitment to excellence, we offer comprehensive repair and servicing solutions for a wide range of home appliances, right at your doorstep.</p>
            </div>
            <div className="about-box-2">
              <img src={aboutsimg} />
            </div>
          </div>
        </Container>
      </div>
      <div className="points-box">
saascas
      </div>
    </div>
  );
};

export default Landingpagecontects;
