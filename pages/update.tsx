import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import Header from '../components/header';
import UpdateNote from '../components/update-note';

const UpdateNotePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Logs</title>
      </Head>
      <Header selectedIndex={2} />
      <UpdateNote />;
    </Layout>
  );
};

export default UpdateNotePage;
