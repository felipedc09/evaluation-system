import useSWR from "swr";
import { GetStaticProps } from "next";
import Link from "next/link";
import { FC, useContext, useEffect, useState } from "react";
import Layout from "../../src/components/Templates/Layout";
import { Test } from "../../src/interfaces";
import TestTemplate from "../../src/components/Templates/TestTemplate/TestTemplate";
import appContext from "../../src/AppContext";
import { Result } from "../../src/components/Atoms/Status/status.styles";
import { useRouter } from "next/router";

type Props = {
  tests: Test;
};

const Home: FC<Props> = () => {
  const router = useRouter();
  const { selectedTestId, tests, setTests } = useContext(appContext);
  const [selectedTest, setSelectedTest] = useState(
    tests ? tests[selectedTestId] : null
  );

  let error = null;
  const id = router.query.id as string;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/test").then((res) => res.json());

      if (result.error) {
        error = result.error;
      } else {
        setTests(result);
        setSelectedTest(result[id]);
      }
    };

    if (!selectedTest && id) {
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (tests) {
      setSelectedTest(tests[id]);
    }
  }, [tests]);

  if (error) return <div>Failed to load</div>;
  if (!selectedTest) return <div>Loading...</div>;

  return (
    <Layout title="Test">
      <TestTemplate test={selectedTest} />
    </Layout>
  );
};

export default Home;
