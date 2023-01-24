import Head from "next/head";
import Layout from "@/components/Layout";
import Masthead from "@/sections/Masthead";
import TextSection from "@/sections/TextSection";
import CardSet from "@/sections/CardSet";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>cane.</title>
        <meta
          name="description"
          content="The world's first plant-based bra cup, sourced from sugarcane."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3fb76f" />
        <meta name="msapplication-TileColor" content="#3fb76f" />
        <meta name="theme-color" content="#f0f5f2" />
      </Head>
      <Masthead
        title={
          <>
            The world&apos;s first plant-based bra cup, sourced from{" "}
            <em>sugarcane</em>.
          </>
        }
        image="/images/masthead-image.jpg"
      >
        <Masthead.List>
          {[
            "Sugarcup™ uses Braskem’s harvested bio-based EVA from sugarcane",
            "The world’s first plant-based bra cup, sourced from sugarcane",
            "This revolutionary bra cup has been patented and trademarked the sugarcup™",
            "Available in closed and open cell",
          ].map((point, index) => (
            <Masthead.ListItem key={index}>{point}</Masthead.ListItem>
          ))}
        </Masthead.List>
      </Masthead>
      <TextSection overline="How We Make It" title="Innovative and sustainable">
        <p>
          Imperdiet dolor integer tellus facilisis augue cras. Imperdiet at nisl
          auctor tincidunt. Turpis diam lorem quis dictumst. Interdum in dui sit
          molestie turpis nisi. Non fringilla laoreet imperdiet gravida iaculis.
        </p>
      </TextSection>
      <CardSet>
        <CardSet.Item
          overline="What Is It"
          title="Polyurethane, the key component of foam used in today’s bras"
        />
        <CardSet.Item
          overline="How It's Made"
          title="Principal raw materials - crude oil and natural gas"
        />
      </CardSet>
    </Layout>
  );
}
