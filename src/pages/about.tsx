import Window from "../components/Window";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>Patato | About</title>
        <meta
          name="description"
          content="Student? Web Developer? Game Developer? Learning Blender?"
        />
        <link rel="icon" href="/cheemshammer.gif" />
      </Head>

      <Window>
        <h1 className="text-5xl text-center">About Patato</h1>
        <p className="text-xl">Under Construction...</p>
      </Window>
    </>
  );
}

export default About;
