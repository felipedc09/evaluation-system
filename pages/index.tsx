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
    <br />
    <h3>Credits</h3>
    <ul>
      <li>
        <a href="https://medium.com/nerd-for-tech/reactjs-101-multiple-choice-questions-9ee9621ee1e3">
          ReactJS 101 Multiple Choice Questions
        </a>
      </li>
      <li>
        <a href="https://codescracker.com/exam/quiz.php">Test HTML</a>
      </li>
    </ul>
  </Layout>
);

export default Home;
