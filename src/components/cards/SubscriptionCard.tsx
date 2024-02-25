import React from "react";
import MainButton from "../common/MainButton";
import { Check } from "lucide-react";

interface IProps {
  title: string;
  price: string;
}

function SubscriptionCard({ title, price }: IProps) {
  const options = [
    "2GB SSD",
    "10GB Bandwidth",
    "15 Email Accounts",
    "Unlimited Database",
    "4 Subdomains",
    "1 Parked Domain",
    "2 Websites",
    "Free SSL",
    "Softaculous",
  ];
  return (
    <section className="border border-[#C4C4C4] rounded-[15px] p-8">
      <p className="font-semibold text-[28px] text-black">{title}</p>
      <p className="text-[12px] text-black">
        with all your customers via all conversation channels in one central
        dashboard.
      </p>
      <div className="text-[42px] font-semibold my-8">
        <p>${price}</p>
        <p className="text-[12px] font-regular">Per month</p>
      </div>
      <div>
        <MainButton
          text="Choose this plan"
          classes="w-full shadow-none bg-white border border-black hover:bg-white text-black font-semibold"
        />
      </div>
      <div className="flex flex-col gap-8 my-4">
        {options.map((option, index) => (
          <div className="flex gap-3" key={index}>
            <Check />
            <p>{option}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SubscriptionCard;
