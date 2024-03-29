import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import Header from '../components/header';
import CreateSubmitLog from '../components/p4-submit-log';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Logs</title>
      </Head>
      <Header selectedIndex={0} />
      <CreateSubmitLog />;
    </Layout>
  );
};

export default Home;
