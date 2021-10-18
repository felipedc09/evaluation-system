import useSWR from "swr";
import { GetStaticProps } from "next";
import Link from "next/link";
import { FC } from "react";
import Layout from "../../src/components/Templates/Layout";
import { Test } from "../../src/interfaces";

const fetcher = (url) => fetch(url).then((res) => res.json());

type Props = {
  tests: Test;
};

const Home: FC<Props> = ({ tests }) => {
  const { data, error } = useSWR("/api/test", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout title="Test">
      <h1>Test 👋</h1>
      Welcome to a system evaluation module, please take a test.
      {JSON.stringify(data)}
    </Layout>
  );
};

export default Home;
