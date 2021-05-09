import React from "react";
import Details from "../shared/Details";

const JSX = () => {
  const contents = [
      {
          title: 'Mechanism',
          contents: [
              {
                  label: 'Rendering'
              },
              {
                  label: 'Virtual DOM, Change Detection, Diffing Algorithm'
              }
          ]
      },
      {
          title: 'Routing'
      },
      {
          title: 'React-query, Redux'
      },
      {
          title: 'JSX, Typescript'
      },
      {
          title: 'Tools'
      }
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
