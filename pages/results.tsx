import Link from "next/link";
import Layout from "../src/components/Templates/Layout";

const AboutPage = () => (
  <Layout title="Results">
    <h1>Results</h1>
    <p>Result of test</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
