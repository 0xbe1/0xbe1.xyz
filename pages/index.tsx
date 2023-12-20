import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="items-center justify-center">
      <h1 className="text-3xl font-bold text-purple-600">
        👋 Hi, I am <span className="px-1 bg-purple-600 text-white">0xbe1</span>
        .
      </h1>
      <div className="text-lg space-y-4 my-5">
        <p>
          I'm leading the dev team at{" "}
          <a href="https://x.com/ThalaLabs" target="_blank">
            Thala Labs
          </a>{" "}
          ($59M peak TVL, #1 on Aptos). Prior to this, I worked at Messari,
          Twitter, Google, and several startups.
        </p>
        <p>Work</p>
        <ul className="list-disc pl-5">
          <li>
            <a href="https://app.thala.fi" target="_blank">
              Thala
            </a>
            : Aptos DeFi HyperApp that includes a stablecoin, an AMM, a LSD, a
            launchpad, a governance platform, and more.
          </li>
          <li>
            <a
              href="https://github.com/messari/subgraphs/commits?author=0xbe1"
              target="_blank"
            >
              Messari Subgraphs
            </a>
            : Index and standardize protocol data with The Graph.
          </li>
        </ul>
        <p>OSS</p>
        <ul className="list-disc pl-5">
          <li>
            <a
              href="https://github.com/aptos-labs/aptos-core/commits?author=0xbe1"
              target="_blank"
            >
              aptos-labs/aptos-core
            </a>
            : Small improvements on Aptos framework.
          </li>
          <li>
            <a
              href="https://github.com/aptos-labs/explorer/commits?author=0xbe1"
              target="_blank"
            >
              aptos-labs/explorer
            </a>
            : Added read/write contract features to Aptos explorer.
          </li>
          <li>
            <a href="https://run.thala.dev" target="_blank">
              thala.run
            </a>
            : Aptos contract explorer that works.
          </li>
          <li>
            <a href="https://miniscan.xyz" target="_blank">
              miniscan
            </a>
            : Think Etherscan, but 10x simpler and supports 10+ chains.
          </li>
          <li>
            <a href="https://okgraph.xyz" target="_blank">
              okgraph
            </a>
            : A subgraph status monitor.
          </li>
        </ul>
        <p>Writings</p>
        <ul className="list-disc pl-5">
          <li>
            <a
              href="https://thalalabs.medium.com/building-a-data-driven-thala-using-sentio-ddc850276af"
              target="_blank"
            >
              Building a data-driven Thala using Sentio
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
