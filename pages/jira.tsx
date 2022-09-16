import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import Header from '../components/header';
import JiraCommentLog from '../components/jira-comment-log';

const Jira: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Logs</title>
      </Head>
      <Header selectedIndex={1} />
      <JiraCommentLog />;
    </Layout>
  );
};

export default Jira;
