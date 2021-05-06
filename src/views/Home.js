import './Home.scss'

const Home = () => {
    return (
        <main className="home">
            <center className="home__title">Course Contents
                </center>
            <p>HTML 🤷🏼 Basic html needed for the development</p>
            <p>CSS 🕺🏼 Basics and the ppt.</p>
            <p>JS 💆🏼‍♂️ Basics, Closures, Async/Await, hoisting, arrow functions, ES2021</p>
            <p>React 🦹🏼‍♂️ Basics(DOM, Router), Components, Hooks</p>
            <center className="home__title">Addons</center>
            <p>HTML - Advanced HTML Links.</p>
            <p>CSS - CSS Games🤩, CSS frameworks(Bulma, tailwind, Bootstrap).</p>
            <p>Javascript - Datastructures, chaining, currying.🤯</p>
            <p>React - Redux, Suspense, Fragment🥸</p>
            <p>Tools - Eslint, Prettier, Babel, package.json, webpack🥶</p>
        </main>
    )
}

export default Home
