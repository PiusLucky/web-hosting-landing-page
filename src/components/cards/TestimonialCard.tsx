import React from "react";

interface IProps {
  logo: string;
  review: string;
  name: string;
  position: string;
}

function TestimonialCard({ logo, review, name, position }: IProps) {
  return (
    <div className="shadow-lg py-16 px-16">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div className="relative">
        <p>{review}</p>
        <div className="absolute top-[-1rem] left-[-2rem] opacity-35">
          <img src="/images/small_quote.png" alt="small quote" />
        </div>
      </div>

      <div className="mt-8">
        <p className="font-bold">{name}</p>
        <p className="text-customGray">{position}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
