import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="items-center justify-center">
      <h1 className="text-4xl lg:text-6xl font-bold my-5">👋 Hi, I am 0xbe1</h1>
      <div className="text-xl space-y-4 my-5">
        <p>
          I am leading the dev team at{" "}
          <a className="text-purple-600" href="https://thala.fi">
            Thala Labs
          </a>
          . Prior to this, I build subgraphs at{" "}
          <a className="text-purple-600" href="https://messari.io">
            Messari
          </a>
          , and work on distributed systems at Twitter, Google, and several
          startups. Besides work, I enjoy hacking tools to make me and other
          devs' life easier.
        </p>
        <p>My work include:</p>
        <ul className="list-disc pl-5 space-y-2">
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
