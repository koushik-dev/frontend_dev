import React from "react";
import Details from "../shared/Details";

const CSS = () => {
  const contents = [
    {
      title: 'CSS Specificity'
    },
    {
      title: 'Pseudo elements',
      contents: [
        {
          label: '::before & ::after'
        },
        {
          label: '::first-line, ::first-letter, ::marker, ::selection'
        }
      ]
    },
    {
      title: 'Pseudo Classes',
      contents: [
        {
          label: ':hover, :focus'
        },
        {
          label: ':active, :visited, :disabled'
        },
        {
          label: ':nth-child, :nth-of-type, :target'
        },
        {
          label: ':checked'
        }
      ]
    },
    {
      title: "Typography - em, rem, ch, px",
    },
    {
      title: "Box-sizing",
    },
    {
      title: "Grid System",
      contents: [
        {
          label: "Flex/Grid",
        },
        {
          label: 'Exercise',
          link: 'https://codepen.io/koushik27/pen/QWpwYYw?editors=1100'
        },
        {
          label: "Create your own",
          link: "https://codepen.io/koushik27/pen/JjWoMog",
        },
      ],
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
