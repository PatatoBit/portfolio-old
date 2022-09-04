import Window from "../components/Window";
import Head from "next/head";

function Contacts() {
  return (
    <>
      <Head>
        <title>Patato | Contact</title>
        <meta
          name="description"
          content="Student? Web Developer? Game Developer? Learning Blender?"
        />
        <link rel="icon" href="/cheemshammer.gif" />
      </Head>

      <Window>
        <h1 className="text-5xl text-center">Contacts</h1>
        <p className="text-xl">Under Construction...</p>
      </Window>
    </>
  );
}

export default Contacts;
