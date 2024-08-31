import style from "./SubLayout.module.css";

interface SubLayoutProps {
  children: React.ReactNode;
}

export default function SubLayout({ children }: SubLayoutProps) {
  return (
    <>
      {children}
      <footer className={style.footer}>@winterlood</footer>
    </>
  );
}
