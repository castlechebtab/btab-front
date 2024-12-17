import { MainLayout1 } from "src/layouts/template_1/main";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <MainLayout1>{children}</MainLayout1>;
}
