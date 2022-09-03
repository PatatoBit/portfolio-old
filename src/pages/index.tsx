import type { NextPage } from "next";
import Head from "next/head";
// import { trpc } from "../utils/trpc";


const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  return (
    <>
      <Head>
        <title>Patato</title>
        <meta name="description" content="Student? Web Developer? Game Developer? Learning Blender?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fullflex bg-yellow-200">
        <div className="window">
          <div className="w-full flex top bg-slate-500 shadow-sm">
            {/* Window Header */}
            <div className="flex flex-1 p-2 items-center">
              <h1 className="text-4xl text-white poppins">patato.live <span className="text-base text-gray-400">v.0.3.1</span></h1>
            </div>

            {/* Window buttons */}
            <div className="flex flex-1 justify-end">
              <button className="border-blue-500 window-btn">➖</button>
              <button className="border-green-500 window-btn">⏹️</button>
              <button className="border-red-500 window-btn">❌</button>
            </div>
          </div>
          <div className="flex flex-row bottom">
            {/* Nav Section */}
            <div className="section basis-1/5">
                <h1 className="nav">Home</h1>
                <h1 className="nav">About me</h1>
                <h1 className="nav">Portfolio</h1>
                <h1 className="nav">Contacts</h1>
            </div>
            {/* Content Section */}
            <div className="section basis-4/5">

            </div>

          </div>
        </div>
      </div>      

    </>
  );
};


export default Home;
