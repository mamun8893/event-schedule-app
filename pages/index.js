import Banner from "../components/banner/Banner";
import EventSchedule from "../components/event-schedule/EventSchedule";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function Home({ events }) {
  console.log(events);
  return (
    <>
      <Banner />
      <EventSchedule />
    </>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api.react-finland.fi/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      {
        conferences {
          id
          name
        }
      }
    `,
  });
  return {
    props: {
      events: data.conferences,
    },
  };
}
