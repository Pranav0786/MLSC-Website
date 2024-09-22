import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./TimeLine.css"; // Assuming your CSS is stored here 

const Timeline = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    // Check for window width and update class for mobile devices
    if (window.innerWidth < 768) {
      const leftItems = document.querySelectorAll(".js--fadeInLeft");
      leftItems.forEach((item) => {
        item.classList.remove("js--fadeInLeft");
        item.classList.add("js--fadeInRight");
      });

      sr.reveal(".js--fadeInRight", {
        origin: "right",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800,
      });
    } else {
      sr.reveal(".js--fadeInLeft", {
        origin: "left",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800,
      });

      sr.reveal(".js--fadeInRight", {
        origin: "right",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800,
      });
    }

    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }, []);

  return (
    <section className="timeline">
      <div className="container">
        {/* Timeline Item 1 */}
        <div className="timeline-item">
          <div className="timeline-img"></div>
          <div className="timeline-content js--fadeInLeft">
            <h2>Founding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="timeline-item">
          <div className="timeline-img"></div>
          <div className="timeline-content js--fadeInRight">
            <h2>Growth Expansion</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Timeline;
