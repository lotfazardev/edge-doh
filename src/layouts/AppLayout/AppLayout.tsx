import Mesh from '@src/components/Mesh';
import BlankLayout from '../BlankLayout';
import { AppLayoutProps } from './@types';
import Container from '@src/components/Container';
import cn from '@src/utils/helper/cn.helper';

function AppLayout(props: AppLayoutProps) {
  const { children, className, ...rest } = props;
  return (
    <BlankLayout className={cn('relative bg-[#000005]', className)} {...rest}>
      <Container className="z-10 flex items-center justify-center">
        {children}
      </Container>
      <div className="fixed bottom-0 left-0 right-0 top-0 z-0">
        <Mesh />
      </div>
    </BlankLayout>
  );
}

export default AppLayout;
