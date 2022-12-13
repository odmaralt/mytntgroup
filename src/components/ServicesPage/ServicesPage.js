import React from "react";
import "./ServicesPage.css";
export const ServicesPage = () => {
  return (
    <div id="servicesDiv">
      <div id="servDiv">
        <div>
          
          <h1>Renovation</h1>
          <p>We understand that renovating isn't an easy task.</p>
          <p> T&T Group provides:</p>
          <p> - replacing/removing walls and flooring</p>
          <p>- adding rooms</p>
          <p>- rebuilding and working around existing structures</p>
          <img
            src="https://photos.zillowstatic.com/fp/03b6b20dadd11c181c348accb728a091-uncropped_scaled_within_1536_1152.webp"
            alt="A house interior"
            id="renImg"

          />
        </div>
        <div>
          <h1>Commercial</h1>
          <p>
            Our goal is to serve happy customers with the finest craftsmanship.
            We guarantee you excellence on any job you need done, whether it may
            be in small commercial buildings or mid-rise residential buildings.
          </p>
          <img
          id="apartmentImg"
            alt="apartment exterior"
            src="https://photos.zillowstatic.com/fp/8c0064b4294c8a763c9f9a10eec2c69b-cc_ft_1536.webp"
          />
        </div>
        <div>
          <h1>Custom Home</h1>
          <p>
            When it comes to building your dream home, you deserve the finest
            quality. We understand the importance of detail and beauty, so you
            can expect your wants and needs to be fulfilled. You are our top
            priority. Let's build your dream home together!
          </p>
          <img
            id="customId"
            src="https://photos.zillowstatic.com/fp/85fdfccc2c31bcedc014b70a89c4e02d-uncropped_scaled_within_1536_1152.webp"
            alt="A home exterior"
          />
        </div>
      </div>
    </div>
  );
};
