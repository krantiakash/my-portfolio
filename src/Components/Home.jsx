import React, { useEffect, useState, useMemo } from "react";

const Home = () => {
  const obj = useMemo(
    () => [
      {
        h1: "I develop",
        span: "Website",
      },
      {
        h1: "I Love",
        span: "HTML",
      },
      {
        h1: "I Love",
        span: "CSS",
      },
      {
        h1: "I Love",
        span: "JavaScript",
      },
    ],
    []
  );

  const [typedH1, setTypedH1] = useState("");
  const [typedSpan, setTypedSpan] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndexH1, setCharIndexH1] = useState(0);
  const [charIndexSpan, setCharIndexSpan] = useState(0);

  useEffect(() => {
    if (index < obj.length) {
      if (charIndexH1 < obj[index].h1.length) {
        const timeout = setTimeout(() => {
          setTypedH1((prev) => prev + obj[index].h1[charIndexH1]);
          setCharIndexH1((prev) => prev + 1);
        }, 150);

        return () => clearTimeout(timeout);
      } else if (charIndexSpan < obj[index].span.length) {
        const timeout = setTimeout(() => {
          setTypedSpan((prev) => prev + obj[index].span[charIndexSpan]);
          setCharIndexSpan((prev) => prev + 1);
        }, 100);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTypedH1("");
          setTypedSpan("");
          setCharIndexH1(0);
          setCharIndexSpan(0);
          setIndex((prev) => (prev + 1) % obj.length);
        }, 1500);

        return () => clearTimeout(timeout);
      }
    }
  }, [index, charIndexH1, charIndexSpan, obj]);

  return (
    <>
      <main className="main">
        <h1>
          {typedH1}
          <span> {typedSpan}</span>
        </h1>
      </main>
    </>
  );
};

export default Home;
