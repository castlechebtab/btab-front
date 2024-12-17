import { MainLayout3 } from "src/layouts/template_4/main";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <MainLayout3>{children}</MainLayout3>;
}

