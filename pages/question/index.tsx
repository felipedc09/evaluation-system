import { GetStaticProps } from "next";
import Link from "next/link";
import { FC } from "react";
import { Question } from "../../src/interfaces";
import { questions } from "../../src/utils/questions";

type Props = {
  questions: Question[];
};

const WithStaticProps: FC<Props> = ({ questions }) => (
  <div>
    {questions}
    <Link href="/">
      <a>Go home</a>
    </Link>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: Question[] = questions;
  return { props: { questions } };
};

export default WithStaticProps;
