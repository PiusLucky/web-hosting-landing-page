import React from "react";
import MainButton from "../common/MainButton";

function ContactUsSection() {
  return (
    <section>
      <div className="relative flex justify-center flex-col items-center gap-8 bg-[#F7FAFE] py-32 px-16 rounded-[16px]">
        <p className="text-3xl md:text-[64px] text-dark">
          {" "}
          We're here to make your website awesome.
        </p>

        <div className="mt-8">
          <MainButton
            text="Get  in touch with us"
            iconRoute="/images/whatsapp_icon.png"
            classes="gradient"
          />
        </div>

        <div className="absolute bottom-[4rem] left-[-1rem]">
          <img src="/images/t_1_shape.png" alt="triangle shape" />
        </div>
        <div className="absolute top-[-1rem] -ml-[16rem]">
          <img src="/images/t_2_shape.png" alt="triangle shape" />
        </div>
        <div className="absolute bottom-[4rem] right-[-1rem]">
          <img src="/images/t_3_shape.png" alt="triangle shape" />
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
