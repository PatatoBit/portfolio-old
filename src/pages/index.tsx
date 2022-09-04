import type { NextPage } from "next";
import Head from "next/head";
// import { trpc } from "../utils/trpc";

import Window from "../components/Window";

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  return (
    <>
      <Head>
        <title>Patato</title>
        <meta name="description" content="Student? Web Developer? Game Developer? Learning Blender?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Window>
        <h1 className="text-5xl poppins">Hello World!</h1>
      </Window>
    </>
  );
};


export default Home;
