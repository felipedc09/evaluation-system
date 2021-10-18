import { GetStaticProps } from "next";
import Link from "next/link";
import { FC } from "react";
import { Test } from "../../src/interfaces";

type Props = {
  questions: Test[];
};

const WithStaticProps: FC<Props> = ({ questions }) => (
  <div>
    {questions}
    <Link href="/">
      <a>Go home</a>
    </Link>
  </div>
);

export default WithStaticProps;
