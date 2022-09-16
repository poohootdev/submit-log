import Footer from './footer';

interface props {
  children?: React.ReactNode;
}

export default function Layout({ children }: props) {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}
