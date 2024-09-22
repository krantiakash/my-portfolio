import React from "react";

const Contact = () => {
  return (
    <>
      <main className="contact_main">
        <div className="heading">
          <h1>Contact</h1>
          <div className="scroll">
            <i className="bx bxs-chevron-down"></i>
          </div>
        </div>

        <div className="info">
          <h1 className="title">Contact Info</h1>
          <div className="info_area">
            <div className="area area_1">
              <i class="bx bxs-phone"></i>
              <span className="icon_title">Phone</span>
              <span className="icon_details">+91 7020701560</span>
            </div>

            <div className="area area_2">
              <i class="bx bxs-envelope"></i>
              <span className="icon_title">Email</span>
              <span className="icon_details">krantiakash5@gmail.com</span>
            </div>

            <div className="area area_3">
              <i class="bx bxs-map"></i>
              <span className="icon_title">Address</span>
              <span className="icon_details">
                Uran Islampur, Maharashtra, 415409
              </span>
            </div>

            <div className="area area_4">
              <i class="bx bxs-user"></i>
              <span className="icon_title">Freelance Available</span>
              <span className="icon_details">
                I am available for Freelance hire
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
