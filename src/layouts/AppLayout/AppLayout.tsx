import BlankLayout from '../BlankLayout';
import { AppLayoutProps } from './@types';
import Container from '@src/components/Container';

function AppLayout(props: AppLayoutProps) {
  const { children, ...rest } = props;
  return (
    <BlankLayout {...rest}>
      <Container>{children}</Container>
    </BlankLayout>
  );
}

export default AppLayout;
