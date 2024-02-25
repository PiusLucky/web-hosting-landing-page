import React from "react";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const card1 = {
    logo: "/images/logo_b_6.png",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem",
    name: "Floyd Miles",
    position: "Vice President, CLI",
  };

  const card2 = {
    logo: "/images/logo_b_1.png",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem",
    name: "Jane Cooper",
    position: "CLO, JPNL",
  };

  const card3 = {
    logo: "/images/logo_b_4.png",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem",
    name: "Kristin Watson",
    position: "Co-Founder, LeeveOn Branding",
  };

  return (
    <section className="flex gap-16 flex-col md:flex-row">
      <div>
        <div className="mb-4">
          <p className="text-[48px] font-bold  text-[#18191]">
            {" "}
            Real Stories from Real Customers
          </p>
          <p>Get inspired by these stories.</p>
        </div>
        <div className="md:ml-16">
          <TestimonialCard {...card1} />
        </div>
      </div>
      <div className="flex flex-col gap-16">
        <div>
          <TestimonialCard {...card2} />
        </div>
        <div>
          <TestimonialCard {...card3} />
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
