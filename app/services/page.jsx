"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Custom Website Development",
    description:
        "I can build custom web pages like this one for you. There wil be an initial building cost and maintenance" +
        " fee, depending on the amount of work it takes." +
        " This" +
        " includes a domain name" +
        " of your choice, an e-mail service - so customers can reach you" +
        " via the contact page - and a tool to track the traffic and performance of your webpage. I will propose" +
        " some existing designs for you and you may choose the one that suits your taste.",
    href: "",
  },
  {
    num: "02",
    title: "User Interface Design",
    description:
        "If you want a custom and unique design for you webpage, I am able to create this for you using Figma. For" +
        " this I will need to charge extra.",
    href: "",
  },
  {
    num: "03",
    title: "Long-term employment",
    description:
        "Depending on my current employment situation I am available to join your team as a full-stack" +
        " developer. Please check out my resume or contact me to determine weather I'd be suitable for the position" +
        " you are trying to fill.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                  <div
                      key={index}
                      className="flex-1 flex flex-col justify-start gap-6 group"
                  >
                    {/* top */}
                    <div className="w-full flex justify-between items-center">
                      <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                        {service.num}
                      </div>
                      <Link
                          href={service.href}
                          className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                      >
                        <BsArrowDownRight className="text-primary text-3xl" />
                      </Link>
                    </div>
                    {/* title */}
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                      {service.title}
                    </h2>
                    {/* description */}
                    <p className="text-white/60">{service.description}</p>
                    {/* border */}
                    <div className="border-b border-white/20 w-full"></div>
                  </div>
              );
            })}
          </motion.div>
        </div>
      </section>
  );
};

export default Services;
