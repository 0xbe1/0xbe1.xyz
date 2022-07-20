import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="items-center justify-center">
      <h1 className="text-4xl lg:text-6xl font-bold my-5">👋 Hi, I am 0xbe1</h1>
      <div className="text-xl space-y-4 my-5">
        <p>
          I build subgraphs, substreams, and toolings around{" "}
          <span className="text-purple-600">The Graph</span> data stack.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            📈 My subgraph work{" ("}
            <a
              className="underline underline-offset-4"
              href="https://github.com/messari/subgraphs/commits?author=0xbe1"
              target="_blank"
            >
              Messari
            </a>
            {", "}
            <a
              className="underline underline-offset-4"
              href="https://github.com/moonwell-fi/moonwell-subgraph"
              target="_blank"
            >
              Moonwell
            </a>
            {") "}
            helps <span className="text-purple-600">Messari</span> standardize
            blockchain data, and powers{" "}
            <span className="text-purple-600">Moonwell</span>'s real-time
            dashboards.
          </li>
          <li>
            🚀{" "}
            <a
              className="underline underline-offset-4"
              href="https://github.com/0xbe1/compoundv2-substreams"
              target="_blank"
            >
              My substream work
            </a>{" "}
            helps <span className="text-purple-600">StreamingFast</span>{" "}
            productionize substreams, that brings indexing speed of The Graph to
            the next level.
          </li>
          <li>
            🤗 My tools{" "}
            <a
              className="underline underline-offset-4"
              href="https://okgraph.xyz"
              target="_blank"
            >
              okgraph
            </a>{" "}
            and{" "}
            <a
              className="underline underline-offset-4"
              href="https://miniscan.xyz"
              target="_blank"
            >
              miniscan
            </a>{" "}
            make subgraph developers' life easier.
          </li>
        </ul>
        <p>
          Before my journey at web3, I built distributed systems at Twitter and
          several startups.
        </p>
        <p>
          For subgraph development work, please DM me at{" "}
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
