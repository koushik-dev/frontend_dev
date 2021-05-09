import React from "react";
import Details from "../shared/Details";

const CSS = () => {
  const contents = [
    {
      title: 'Foundation',
      contents: [
        {
          label: 'Box-sizing'
        },
        {
          label: 'Borders'
        },
        {
          label: 'Box-shadow'
        },
        {
          label: 'CSS Variables'
        }
      ]
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
      title: 'Ignite the fire',
      contents: [
        {
          label: 'Positions - (relative, absolute, sticky, fixed, static)'
        },
        {
          label: 'Fonts'
        },
        {
          label: 'CSS specificity'
        },
        {
          label: 'CSS in JS'
        }
      ]
    },
    {
      title: "Grid System",
      contents: [
        {
          label: "Flex/Grid",
          link: "https://codepen.io/koushik27/pen/oNZgmbW"
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
    {
      title: 'GAMES',
      contents: [
        {
          label: 'Game 1',
          link: 'https://codepen.io/koushik27/full/vYgaYap'
        },
        {
          label: 'Game 2',
          link: 'https://codepen.io/koushik27/full/qBRywzy'
        }
      ]
    }
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
