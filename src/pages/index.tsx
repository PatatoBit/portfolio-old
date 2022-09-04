import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import { trpc } from "../utils/trpc";

import Window from "../components/Window";

const Home: NextPage = () => {
  // eslint-disable-next-line prefer-const
  let [age, setAge] = useState('')

  setInterval(() => {
    const time = (new Date().getTime() - new Date(1206835200000).getTime()) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
    setAge(age = time.toString().substring(0, 11))
	}, 100);

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
        <h1 className="flex flex-col md:flex-row text-4xl text-center items-baseline justify-center">
          Chayapat Pakham
          <span className="text-2xl">(Pat, Patato)</span>
        </h1>
        <h1 className="text-2xl"><span className="text-yellow-500">{ age }</span> years old</h1>
      </Window>
    </>
  );
};

export default Home;
