import React from 'react'
import Details from '../shared/Details';

const JS = () => {
    const contents = [];
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
