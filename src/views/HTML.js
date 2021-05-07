import Details from "../shared/Details";
import "./HTML.scss";

function HTML() {
  const contents = [
    {
      title: "Document",
      contents: [
        {
          label: "DocType",
        },
        {
          label: "HTML",
        },
        {
          label: "Head, favicon",
        },
        {
          label: "Title",
        },
        {
          label: "Style, Script",
        },
      ],
    },
    {
      title: "Meta Tags",
      contents: [
        {
          label: "Charset",
          link:
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#specifying_your_documents_character_encoding",
        },
        {
          label: "Author and Description, keywords - SEO",
          link:
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_an_author_and_description",
        },
        {
          label: "Social Media Cards",
          link:
            "https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards",
        },
        {
          label: "Viewport",
          link: "",
        },
        { label: "Generator", link: "https://metatags.io" },
      ],
    },
    {
      title: "Elements",
      contents: [
        {
          label: "Block and Inline Elements, Table",
        },
        {
          label: "Pseudo elements - before and after",
        },
        {
          label: "<br/>, <hr/>, &nbsp; - self closing tags, Entities",
        },
        {
          label: "IS Navigation possible?",
          link: "https://codepen.io/koushik27/pen/wvgXqjK",
        },
        {
          label: "Exercise",
          link: "https://codepen.io/koushik27/pen/JjWjVvK",
        },
        {
          label: "Exercise - Final",
          link: "https://codepen.io/koushik27/pen/OJpJGvv",
        },
      ],
    },
    {
      title: "Semantic Elements",
      contents: [
        {
          label: "Header, Footer, Section, Aside, Main, Figure, Center, H1-H6",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
        },
        {
          label: "Exercise",
          link: "https://codepen.io/koushik27/pen/wvJvEqj",
        },
        {
          label: "Exercise - Final",
          link: "https://codepen.io/koushik27/pen/QWpWVdV",
        },
      ],
    },
    {
        title: 'Some more Semantics',
        contents: [
            {
                label: 'description list, details, datalist, dialog',
                link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element'
            },
            {
                label: 'Exercise',
                link: 'https://codepen.io/koushik27/pen/zYZYmPz'
            },
            {
                label: 'Exercise - Final',
                link: 'https://codepen.io/koushik27/pen/LYWYgWe'
            }
        ]
    },
    {
      title: "References",
      contents: [
        {
          label: "Mozilla",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          label: "HTML Dog",
          link: "https://htmldog.com/guides/html/",
        },
        {
          label: "W3Schools",
          link: "https://www.w3schools.com/html/",
        },
      ],
    },
  ];
  return (
    <main className="html">
      <b className="html__title">What's up for HTML</b>
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

export default HTML;
