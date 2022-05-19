import type { NextPage } from 'next';
import Head from 'next/head';
import CreateSubmitLog from './create-submit-log';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>서밋 로그 생성기</title>
      </Head>
      <CreateSubmitLog />;
    </div>
  );
};

export default Home;
