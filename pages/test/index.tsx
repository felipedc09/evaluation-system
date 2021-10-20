import useSWR from "swr";
import { FC, useContext, useEffect } from "react";
import Layout from "../../src/components/Templates/Layout";
import { Test } from "../../src/interfaces";
import TestList from "../../src/components/Organisms/TestList/TestList";
import appContext from "../../src/AppContext";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Tests: FC = () => {
  const { setTests } = useContext(appContext);
  const { data, error } = useSWR("/api/test", fetcher);

  useEffect(() => {
    if (data) {
      setTests(data);
    }
  }, [data]);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout title="Test">
      <h1>Tests</h1>
      <TestList tests={data} />
    </Layout>
  );
};

export default Tests;
