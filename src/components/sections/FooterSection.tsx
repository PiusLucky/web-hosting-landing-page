import { Heart } from "lucide-react";
import React from "react";

function FooterSection() {
  const serviceLinks = [
    "Domain",
    "Shared Hosting",
    "Cloud Hosting",
    "Private Hosting",
  ];
  const hostingLinks = [
    "Cheap Hosting",
    "Hosting Wordpress",
    "Email Hosting",
    "Hosting Unlimited",
  ];

  const companyLinks = ["About", "Career", "Conatct Us"];

  const helpLinks = ["FAQ", "Help Support"];

  return (
    <section className="gradient p-8 md:p-32">
      <div className=" w-full flex flex-col md:flex-row gap-16 justify-between">
        <div className="md:max-w-[600px]">
          <img src="/images/footer_logo.png" alt="footer logo" />
          <p className="text-[#E6E6E6] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elem
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between flex-grow gap-16">
          <div>
            <p className="text-white font-semibold">Service</p>
            <div className="flex flex-col gap-8 mt-8">
              {serviceLinks.map((data, index) => (
                <p key={index} className="text-[#E6E6E6]">
                  {data}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white font-semibold">Hosting</p>
            <div className="flex flex-col gap-8 mt-8">
              {hostingLinks.map((data, index) => (
                <p key={index} className="text-[#E6E6E6]">
                  {data}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white font-semibold">Company</p>
            <div className="flex flex-col gap-8 mt-8">
              {companyLinks.map((data, index) => (
                <p key={index} className="text-[#E6E6E6]">
                  {data}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white font-semibold">Help</p>
            <div className="flex flex-col gap-8 mt-8">
              {helpLinks.map((data, index) => (
                <p key={index} className="text-[#E6E6E6]">
                  {data}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-white w-full flex gap-4 mt-8">
        <p>Built by Jeremiah </p>
        <Heart color="#fff" className="hidden md:block" />{" "}
        <p>in Lagos. Copyright 2021</p>
      </div>
    </section>
  );
}

export default FooterSection;
