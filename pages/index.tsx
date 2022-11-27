import Head from "next/head";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("../components/Presentation"), {
  ssr: false,
});

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Head>
        <title>Poetry</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <NoSSR />
      </main>
    </div>
  );
}
