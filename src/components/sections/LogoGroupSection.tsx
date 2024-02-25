import React from "react";

function LogoGroupSection() {
  return (
    <section className="flex justify-between gap-8 flex-col md:flex-row items-center">
      <div className="md:max-w-[500px]">
        <p className="text-[#18191F] font-bold text-[44px]">
          True Cloud Web Hosting
        </p>
        <p className="text-[#18191F] text-[18px] mt-3">
          True Cloud Web Hosting All of the hosting packages we offer are
          deployed instantly on our SSD powered cloud. We don&apos;t use
          dedicated servers that operate on single pieces of hardware. Our
          entire infrastructure is built to be reliable, secure, and scalable.
        </p>
      </div>
      <div className="">
        <img src="/images/group_top.png" alt="partner logo" />
      </div>
    </section>
  );
}

export default LogoGroupSection;
