import React from "react";

function CustomerSection() {
  return (
    <section className="flex justify-between gap-8 flex-col md:flex-row items-center">
      <div className="md:max-w-[500px]">
        <p className="text-[#18191F] font-bold text-[44px]">
          We serve over 100 Nigerian Websites
        </p>
        <p className="text-[#18191F] text-[18px] mt-3">
          Connect LemonWares with your favourite tools that you use daily and
          keep things on track.
        </p>
      </div>
      <div className="">
        <img src="/images/bottom_logo_group.png" alt="partner logo" />
      </div>
    </section>
  );
}

export default CustomerSection;
