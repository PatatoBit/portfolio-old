import Window from "../components/Window";
import Head from "next/head";

import PortfolioCard from "../components/PortfolioCard";

function Portfolio() {
  return (
    <>
      <Head>
        <title>Patato | Portfolio</title>
        <meta
          name="description"
          content="Student? Web Developer? Game Developer? Learning Blender?"
        />
        <link rel="icon" href="/cheemshammer.gif" />
      </Head>

      <Window>
        <div className="w-full h-full grid grid-cols-3 grid-rows-2">
          <PortfolioCard name="Cambridge" description="An English certificate from the Cambridge Primary and Secondary Course"/>
        </div>
      </Window>
    </>
  );
}

export default Portfolio;
