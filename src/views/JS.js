import React from 'react'
import Details from '../shared/Details';

const JS = () => {
    const contents = [
        {
            title: 'Functions - closures, HOC',
            contents: [
                {
                    label: 'Scope'
                },
                {
                    label: 'Encapsulation'
                },
                {
                    label: 'Exercise',
                    link: 'https://codepen.io/koushik27/pen/eYvNRvR'
                }
            ]
        },
        {
            title: '..., ES2021, ESNEXT',
            contents: [
                {
                    label: 'Rest and spread operator'
                },
                {
                    label: 'Object Destructuring'
                },
                {
                    label: 'Exercise to implement USESTATE'
                }
            ]
        },
        {
            title: 'Asynchronous',
            contents: [
                {
                    label: 'Promise & Async/Await'
                },
                {
                    label: 'Fetch API'
                }
            ]
        }
    ];
      return (
        <main className="html">
          <b className="html__title">What's up for JavaScript</b>
          <article className="html__contents">
            {contents.map((cont) => (
              <Details key={cont?.title} title={cont?.title}>
                {cont?.contents}
              </Details>
            ))}
          </article>
        </main>
      );
}

export default JS
