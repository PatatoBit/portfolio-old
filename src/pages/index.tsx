import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import { trpc } from "../utils/trpc";

import Window from "../components/Window";

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
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
        <Image
          className="rounded-3xl"
          src="/cheemshammer.gif"
          alt="doge getting bonked by hammer"
          width={300}
          height={300}
        />
        <h1 className="text-4xl text-center">
          Chayapat Pakham<span className="text-2xl">(Pat, Patato)</span>
        </h1>
      </Window>
    </>
  );
};

export default Home;
