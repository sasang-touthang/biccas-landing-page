import React from "react";
import Paywall from "./Paywall";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const plan_data = [
  {
    title: "Free",
    subtitle: "Have a go and test your superpowers",
    yearly_price: "0",
    monthly_price: "0",
    features: [
      "2 Users",
      "2 Files",
      "Public Share & Comments",
      "Chat Support",
      "New Income apps",
    ],
    button: "Signup for free",
  },
  {
    title: "Pro",
    subtitle: "Experiment the power of infinite possibilities",
    yearly_price: "8",
    monthly_price: "15",
    features: [
      "4 Users",
      "All apps",
      "Unlimited editable exports",
      "Folders and collaboration",
      "All incoming apps",
    ],
    button: "Go to pro",
  },
  {
    title: "Business",
    subtitle: "Unveil new superpowers and join the Design League",
    yearly_price: "16",
    monthly_price: "25",
    features: [
      "All the features of pro plan",
      "Account success Manager",
      "Single Sign-On (SSO)",
      "Co-conception program",
      "Collaboration-Soon",
    ],
    button: "Go to Business",
  },
];

function Plan() {
  return (
    <div className="pb-[5rem] xl:pb-[9.25rem] relative">
      <div className="w-full flex flex-col items-center mt-[3.5rem] xl:mt-[5rem] mb-[2rem]">
        <span className="font_inter text-[3.125rem] font-bold text-center leading-[4.5625rem] lg:w-[30.75rem] mb-[2.5rem] relative z-10">
          Choose Plan That's Right For You
        </span>
        <div className="w-[39.625rem] h-[39.625rem] rounded-[39.625rem] bg-[#54BE96] blur-[500px] absolute top-[-10rem] right-[-50rem] "></div>
        <span className="font_inter text-[1.125rem] font-bold text-center text-[#A6A6A6] relative z-10">
          Choose plan that works best for you, feel free to contact us
        </span>
      </div>
      <div>
        <Tab.Group>
          <div className="w-full flex justify-center mb-[4.19rem] relative z-10">
            <Tab.List className="flex w-[21.25rem] h-[4.375rem] rounded-[0.625rem] bg-[#fff] font_inter  box_shadow p-[0.44rem]">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full h-[3.5rem] rounded-lg py-2.5 text-[1.125rem]",
                    "ring-white/60 focus:outline-none",
                    selected
                      ? "bg-[#54BD95] text-white shadow"
                      : "text-black hover:bg-white/[0.12]"
                  )
                }
              >
                Bill Monthly
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full h-[3.5rem] rounded-lg py-2.5 text-[1.125rem]",
                    "ring-white/60 focus:outline-none",
                    selected
                      ? "bg-[#54BD95] text-white shadow"
                      : "text-black hover:bg-white/[0.12"
                  )
                }
              >
                Bill Yearly
              </Tab>
            </Tab.List>
          </div>

          <Tab.Panels className="flex w-full">
            <Tab.Panel className="w-full">
              <div className="flex flex-col items-center gap-7 xl:gap-0 lg:flex-row xl:justify-between">
                {plan_data.map(
                  ({ title, subtitle, monthly_price, features, button }) => (
                    <Paywall
                      title={title}
                      subtitle={subtitle}
                      price={monthly_price}
                      features={features}
                      button={button}
                    />
                  )
                )}
              </div>
            </Tab.Panel>
            <Tab.Panel className="w-full">
              <div className="flex flex-col items-center gap-7 xl:gap-0 lg:flex-row xl:justify-between">
                {plan_data.map(
                  ({ title, subtitle, yearly_price, features, button }) => (
                    <Paywall
                      title={title}
                      subtitle={subtitle}
                      price={yearly_price}
                      features={features}
                      button={button}
                    />
                  )
                )}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Plan;
