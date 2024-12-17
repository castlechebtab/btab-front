import { MainLayout2 } from 'src/layouts/template_3/main';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <MainLayout2>{children}</MainLayout2>;
}
