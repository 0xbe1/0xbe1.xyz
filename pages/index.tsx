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
          Currently, I am leading the dev team at{" "}
          <a className="text-purple-600" href="https://thala.fi">
            Thala Labs
          </a>
          . Prior to this, I build subgraphs at{" "}
          <a className="text-purple-600" href="https://messari.io">
            Messari
          </a>{" "}
          and work on distributed systems at Twitter, Google, and several
          startups. Besides work, I enjoy hacking tools to make my and other
          devs' life easier.
        </p>
        <p>My work include:</p>
        <ul className="marker:text-purple-600 list-disc pl-5 space-y-1">
          <li>
            🚀{" "}
            <a
              className="underline underline-offset-4"
              href="https://run.thala.dev"
              target="_blank"
            >
              Thala Run
            </a>
            : An Aptos smart contract explorer that enables URL-sharable txns.
          </li>
          <li>
            📈{" "}
            <a
              className="underline underline-offset-4"
              href="https://github.com/messari/subgraphs/commits?author=0xbe1"
              target="_blank"
            >
              Messari Subgraphs
            </a>
            : Index and standardize blockchain data with The Graph.
          </li>
          <li>
            📈{" "}
            <a
              className="underline underline-offset-4"
              href="https://github.com/moonwell-fi/moonwell-subgraph"
              target="_blank"
            >
              Moonwell Subgraph
            </a>
            : Power{" "}
            <a className="text-purple-600" href="https://moonwell.fi">
              Moonwell
            </a>{" "}
            dapp with The Graph.
          </li>
          <li>
            🔍{" "}
            <a
              className="underline underline-offset-4"
              href="https://miniscan.xyz"
              target="_blank"
            >
              miniscan
            </a>
            : Think Etherscan, but 10x simpler and supports 10+ chains.
          </li>
          <li>
            🚧{" "}
            <a
              className="underline underline-offset-4"
              href="https://okgraph.xyz"
              target="_blank"
            >
              okgraph
            </a>
            : A subgraph status monitor.
          </li>
        </ul>
        <p>
          Feel free to reach out on{" "}
          <a
            className="underline underline-offset-4"
            href="https://twitter.com/_0xbe1"
          >
            Twitter
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Home;
