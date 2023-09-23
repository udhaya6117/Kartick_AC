import { Container } from "@mui/material";
import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import aboutsimg from "../../../src/img/aboutus-img.jpg";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";
import cardimg1 from "../../img/ac_img_2.jpg";
import cardimg2 from "../../img/ac_img_3.jpg";
import cardimg3 from "../../img/ac_img_4.jpg";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import ConstructionIcon from "@mui/icons-material/Construction";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

const Landingpagecontects = () => {
  return (
    <div>
      <div className="hero-top-maincontect" style={{ paddingTop: "75px",width:"100%" }}>
        <div className="hero-img">
          <div className="hero-container">
           
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.9,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Bettter digital <br></br>experience with Presento
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.0,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              We are team of talented designers making websites with Bootstrap
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.1,
                delay: 1.6,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              class="btn"
            >
              Get Started
            </motion.button>
           
          </div>
        </div>
        <div className="whatsapp">
          <WhatsAppIcon
            sx={{
              color: "#008361",
              fontSize: 40,
              cursor: "pointer",
              backgroundColor: "white",
              padding: "5px",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>
      <div className="Aboutus">
        <Container>
          <div className="aboutus-box">
            <motion.div
              className="about-box-1"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 2.1,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <h3>
                Welcome to [Your Company Name] - Your Home Appliance Repair
                Experts!
              </h3>
              <p>Bringing Your Appliances Back to Life, One Home at a Time</p>
              <ul>
                <li>
                  <DoneAllIcon
                    sx={{ fontSize: 20, color: "#e03a3c", marginRight: "10px" }}
                  />
                  We believe in doing the job right the first time. Our
                  technicians are trained to provide top-quality repairs using
                  the best tools and replacement parts.
                </li>
                <li>
                  <DoneAllIcon
                    sx={{ fontSize: 20, color: "#e03a3c", marginRight: "10px" }}
                  />
                  We know that your time is precious. That's why we stick to our
                  appointments, arrive on time, and work efficiently to get your
                  appliances back in working order promp
                </li>
                <li>
                  <DoneAllIcon
                    sx={{ fontSize: 20, color: "#e03a3c", marginRight: "10px" }}
                  />
                  No hidden fees or surprises. We provide clear, upfront
                  pricing, so you know exactly what to expect when you choose us
                  for your appliance repairs.
                </li>
              </ul>
              <p className="aboutus-contecnt-box-1">
                At [Your Company Name], we understand the importance of
                functional home appliances in your daily life. When your
                appliances break down, it can disrupt your routine and cause
                inconvenience. That's where we come in! With our team of skilled
                technicians and a commitment to excellence, we offer
                comprehensive repair and servicing solutions for a wide range of
                home appliances, right at your doorstep.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.5,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="about-box-2"
            >
              <div>
              <img src={aboutsimg} />
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
      <div className="points-box">
        <Container>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Poppins-Regular",
              color: "white",
            }}
          >
            We're dedicated to bringing your appliances back to life, one home
            at a time. Contact [Your Company Name] today to schedule your
            appliance repair service and experience the difference of having
            true home appliance repair experts on your side.
          </p>
          <div className="points-box-split">
            <div>
              <AcUnitIcon
                className="points-icon"
                sx={{ color: "#e03a3c", fontSize: 40 }}
              />
              <h3>AC Installation</h3>
              <p>
                From cooling issues to strange noises, we can diagnose and fix
                it all.
              </p>
            </div>
            <div>
              <AdminPanelSettingsIcon
                className="points-icon"
                sx={{ color: "#e03a3c", fontSize: 40 }}
              />
              <h3>AC Service</h3>
              <p>
                Whether it's a front-loader or a top-loader, we'll have your
                washing machine working flawlessly.
              </p>
            </div>
            <div>
              <AlignVerticalBottomIcon
                className="points-icon"
                sx={{ color: "#e03a3c", fontSize: 40 }}
              />
              <h3>AC Gas Charging</h3>
              <p>
                We handle electric and gas ovens, stovetops, and ranges with
                precision.
              </p>
            </div>
            <div>
              <BusinessCenterIcon
                className="points-icon"
                sx={{ color: "#e03a3c", fontSize: 40 }}
              />
              <h3>AC Repair/Inspection</h3>
              <p>
                Say goodbye to the pile of dirty dishes. We'll get your
                dishwasher back to its efficient self.
              </p>
            </div>
            <div>
              <AssistantPhotoIcon
                className="points-icon"
                sx={{ color: "#e03a3c", fontSize: 40 }}
              />
              <h3>AC Uninstallation</h3>
              <p>
                Your clothes will be dry and fresh once again with our dryer
                repair services.
              </p>
            </div>
            <div>
              <BrowseGalleryIcon
                className="points-icon"
                sx={{ color: "#e03a3c", fontSize: 40 }}
              />
              <h3>AC Oil Changes</h3>
              <p>
                Don't let a malfunctioning microwave slow you down. We'll make
                it cook and heat like it should.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="services">
        <Container>
          <div class="section-title">
            <h2>Services</h2>
            <p>Check our Services</p>
          </div>
        </Container>
        <div className="services-boxes-contect">
          <Container>
            <div className="services-boxes-splits">
              <div className="card">
                <div className="card-img">
                  <img src={cardimg1} alt="" />
                </div>
                <div className="icoin-box">
                  <ManageAccountsIcon className="services-icon" />
                </div>
                <div className="card-contect">
                  <h3>Installation Services</h3>
                  <p>
                    Define what installation services are and their
                    significance. Explain why people or businesses might seek
                    installation services. Highlight the convenience and
                    benefits of professional installation.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={cardimg2} alt="" />
                </div>
                <div className="icoin-box">
                  <ConstructionIcon className="services-icon" />
                </div>
                <div className="card-contect">
                  <h3>Repair and Maintenance</h3>
                  <p>
                    Discuss the benefits of preventive maintenance, such as cost
                    savings and increased safety. Explain how maintenance can
                    improve energy efficiency and reduce environmental impact.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={cardimg3} alt="" />
                </div>
                <div className="icoin-box">
                  <FlagCircleIcon className="services-icon" />
                </div>
                <div className="card-contect">
                  <h3>Emergency Services</h3>
                  <p>
                    Describe the different types of emergency services,
                    including: Fire services for firefighting and rescue
                    operations. Medical services, including ambulance and
                    emergency medical response.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div id="footer" className="footer">
        <Container>
          <div className="footer-box-split-1">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="footer-content-1">
                <h2>
                  HOME SERVICE<span style={{ color: "#e03a3c" }}>.</span>
                </h2>
                <address>
                  No 3/123 ganga nagar gandhi street 17th street
                  valasaravakkam Chennai 600087
                </address>
                <p
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: "13px",
                    color: "#e03a3c",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Poppins-SemiBold",
                      fontSize: "16px",
                      color: "white",
                      marginRight: "5px",
                    }}
                  >
                    Phone:
                  </span>{" "}
                  9360880958
                </p>
                <p
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: "13px",
                    color: "#e03a3c",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Poppins-SemiBold",
                      fontSize: "16px",
                      color: "white",
                      marginRight: "5px",
                    }}
                  >
                    Email:
                  </span>{" "}
                  wdqwdqw
                </p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="footer-content-2">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <KeyboardArrowRightIcon
                      sx={{ fontSize: "1.1rem", marginRight: "5px" }}
                    />
                    Home
                  </li>
                  <li>
                    {" "}
                    <KeyboardArrowRightIcon
                      sx={{ fontSize: "1.1rem", marginRight: "5px" }}
                    />
                    About{" "}
                  </li>
                  <li>
                    {" "}
                    <KeyboardArrowRightIcon
                      sx={{ fontSize: "1.1rem", marginRight: "5px" }}
                    />
                    Service
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="footer-content-2">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <KeyboardArrowRightIcon
                      sx={{ fontSize: "1.1rem", marginRight: "5px" }}
                    />
                    Installation Services
                  </li>
                  <li>
                    <KeyboardArrowRightIcon
                      sx={{ fontSize: "1.1rem", marginRight: "5px" }}
                    />
                    Repair and Maintenance
                  </li>
                  <li>
                    <KeyboardArrowRightIcon
                      sx={{ fontSize: "1.1rem", marginRight: "5px" }}
                    />
                    Emergency Services
                  </li>
                  <li>
                    <KeyboardArrowRightIcon
                      sx={{ fontSize: "1.1rem", marginRight: "5px" }}
                    />
                    Appliance Repair Experts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
        <div className="footer-2-color">
          <Container>
            <div className="footer-box-split-2">
              <div style={{textAlign:"center"}}>
                <span style={{ color: "#e03a3c" }}>©</span> Copyright{" "}
                <span style={{ color: "#e03a3c" }}>HOME SERVICE</span>. All
                Rights Reserved
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Landingpagecontects;
