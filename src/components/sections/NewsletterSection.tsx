import React from "react";
import Header from "../common/Header";
import { Input } from "../ui/input";
import MainButton from "../common/MainButton";

function NewsletterSection() {
  return (
    <section>
      <div>
        <Header title="Lets Design Together" />

        <div className="flex justify-center flex-col gap-4 md:flex-row items-center md:gap-[25px] mt-[50px]">
          <div className="w-full lg:w-[600px]">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="bg-[#F8F8F8] border border-[#AFAFAF] h-[50px]"
            />
          </div>

          <MainButton text="Contact Me" classes="w-[222px]" />
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
