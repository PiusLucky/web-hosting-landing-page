import React from "react";
import MainButton from "../common/MainButton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function HeroSection() {
  return (
    <section className="flex justify-between gap-16 flex-col md:flex-row items-center mt-32 md:mt-16">
      <div>
        <div>
          <Tabs defaultValue="hosting" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="hosting" className="font-bold">
                Hosting
              </TabsTrigger>
              <TabsTrigger value="domain" className="font-bold">
                Domain
              </TabsTrigger>
              <TabsTrigger value="seo" className="font-bold">
                SEO
              </TabsTrigger>
              <TabsTrigger value="email" className="font-bold">
                Email
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <p className="font-bold text-3xl my-6 md:my-8 md:leading-[4rem] md:text-[64px] text-dark">
          Premium Web Hosting for Your Website
        </p>
        <p className="text-customGray">
          Blazing fast web hosting for individuals and businesses of all sizes
          backed by 24x7x365 Support.
        </p>
        <div className="flex gap-6 mt-16 flex-col md:flex-row">
          <MainButton text="Create an Account" classes="gradient w-[180px]" />
          <MainButton
            text="Choose your plan"
            classes="bg-white border border-black text-black w-[180px] hover:bg-white"
          />
        </div>
      </div>
      <div>
        <img src="/images/working-lady.png" alt="working lady" />
      </div>
    </section>
  );
}

export default HeroSection;
