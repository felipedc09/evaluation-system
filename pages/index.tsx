import Link from "next/link";
import Layout from "../src/components/Templates/Layout";

const Home = () => (
  <Layout title="Test">
    <h1>Test 👋</h1>
    Welcome to a system evaluation module, please take a test.
    <p>
      <Link href="/test">
        <a>Go tests</a>
      </Link>
    </p>
  </Layout>
);

export default Home;
