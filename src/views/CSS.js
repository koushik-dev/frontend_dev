import React from "react";
import Details from "../shared/Details";

const CSS = () => {
  const contents = [
    {
      title: "Typography - em, rem",
    },
  ];
  return (
    <main className="html">
      <b className="html__title">What's up for CSS</b>
      <article className="html__contents">
        {contents.map((cont) => (
          <Details key={cont?.title} title={cont?.title}>
            {cont?.contents}
          </Details>
        ))}
      </article>
    </main>
  );
};

export default CSS;
