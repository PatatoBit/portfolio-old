import Window from "../components/Window";
import Head from "next/head";

function Portfolio() {
  return (
    <>
      <Head>
        <title>Patato</title>
        <meta
          name="description"
          content="Student? Web Developer? Game Developer? Learning Blender?"
        />
        <link rel="icon" href="/cheemshammer.gif" />
      </Head>

      <Window>
        <h1 className="text-center text-5xl">Portfolio</h1>
        <p className="text-xl">Under Construction...</p>
      </Window>
    </>
  );
}

export default Portfolio;
