"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 0,
    text: "Years of experience",
  },
  {
    num: 3,
    text: "Project completed",
  },
  {
    num: 20,
    text: "Technologies mastered",
  },
  {
    num: 50,
    text: "Code commits ",
  },
];
const Stats = () => {
  return (
    <section>
      <div className="container mx-auto mb-10">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, i) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start "
                key={i}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  }leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
