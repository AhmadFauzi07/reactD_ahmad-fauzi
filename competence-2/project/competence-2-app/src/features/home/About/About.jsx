import React from "react";
import AboutImage from "../../../assets/imgAboutUs.jpg";

const About = () => {
  return (
    <section>
      <div className="container-fluid py-5">
        <h1 className="fw-bold text-uppercase fs-2 text-center text-light">
          About Us
        </h1>
        <div className="row mt-5 d-flex align-items-center">
          <div className="col-md-6 text-light">
            <p className="px-5 mt-4 fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ipsam debitis quidem officiis tenetur soluta, repellendus dolor,
              expedita ratione iure vero. Veritatis autem iure reprehenderit
              vero incidunt, sint ut pariatur! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Dolorem error, deleniti, expedita
              quia dolores repellendus, vero minima consequatur aut facilis
              recusandae harum quis aspernatur quasi quaerat earum deserunt
              ducimus cupiditate.
            </p>
          </div>
          <div className="col-md-6 d-flex">
            <img
              className="img-thumbnail rounded ms-auto"
              src={AboutImage}
              alt="image about us"
              style={{ width: "60%", marginRight: 90 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
