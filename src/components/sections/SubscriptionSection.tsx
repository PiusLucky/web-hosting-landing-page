import React from "react";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubscriptionCard from "../cards/SubscriptionCard";

function SubscriptionSection() {
  const data = [
    {
      title: "Starter",
      price: "2.80",
    },
    {
      title: "Standard",
      price: "4.20",
    },
    {
      title: "Suprem",
      price: "7.00",
    },
  ];
  return (
    <section>
      <div>
        <p className="text-3xl md:text-[50px] text-black text-center font-semibold">
          Ready to get started with Lemon Wares?
        </p>
        <p className="text-center my-8">Choose the package that suits you</p>
        <div className="flex justify-center items-center gap-4">
          <p>Monthly</p>
          <div>
            <Switch
              id="subscription"
              color="#FF5D5D"
              className="data-[state=checked]:bg-[#FF5D5D] "
            />
          </div>

          <div className="flex gap-4 items-center">
            <p>Yearly</p>
            <span className="bg-[#FFE87A] text-black rounded-[8px]  px-2 py-1">
              20% discount
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Tabs defaultValue="basic" className="md:w-[400px]">
          <TabsList>
            <TabsTrigger value="basic" className="font-bold md:w-[200px]">
              Basic
            </TabsTrigger>
            <TabsTrigger value="premium" className="font-bold md:w-[200px]">
              Premium
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex flex-col md:flex-row  justify-around gap-16 mt-12">
        {data.map((sub, index) => (
          <SubscriptionCard title={sub.title} price={sub.price} key={index} />
        ))}
      </div>
    </section>
  );
}

export default SubscriptionSection;
