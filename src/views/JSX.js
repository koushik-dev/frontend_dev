import React from "react";
import Details from "../shared/Details";

const JSX = () => {
  const contents = [
    {
      title: "Mechanism",
      contents: [
        {
          label: "Rendering",
        },
        {
          label: "Virtual DOM, Change Detection, Diffing Algorithm",
        },
      ],
    },
    {
      title: "Routing",
      contents: [
        {
          label: "Basics",
          link: "https://reactrouter.com/web/guides/quick-start",
        },
        {
          label: "Simple Implementation",
          link: "https://ui.dev/build-your-own-react-router-v4/",
        },
      ],
    },
    {
      title: "Hooks",
      contents: [
        {
          label: "useState",
        },
        {
          label: "UseEffect",
        },
        {
          label: "References",
          link: "https://reactjs.org/docs/hooks-reference.html",
        },
      ],
    },
    {
      title: "Async calls",
    },
    {
      title: "JSX, Typescript",
    },
    {
      title: "Tools",
      contents: [
        {
          label: "Prettier",
        },
        {
          label: "ESlint",
        },
        {
          label: "Babel",
        },
        {
          label: "Webpack",
        },
      ],
    },
    {
      title: "References",
      contents: [
        {
          label: "Complete Intro to React App",
          link: "https://btholt.github.io/complete-intro-to-react-v6/",
        },
      ],
    },
  ];
  return (
    <main className="html">
      <b className="html__title">What's up for React</b>
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

export default JSX;
