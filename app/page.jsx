import Feed from "../components/feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="text-center head_text">
        Discover & Share
        <br className="maxmd:hidden"/>
      <span className="orange_gradient text-center">AI-powered Prompts</span>
    </h1>
    <p className="desc text-center">Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts</p>

    <Feed/>
     </section>
  )
}

export default Home;