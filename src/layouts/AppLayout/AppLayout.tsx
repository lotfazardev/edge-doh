import Mesh from '@src/components/Mesh';
import BlankLayout from '../BlankLayout';
import { AppLayoutProps } from './@types';
import Container from '@src/components/Container';
import cn from '@src/utils/helper/cn.helper';
import { ToastContainer } from 'react-toastify';

function AppLayout(props: AppLayoutProps) {
  const { children, className, ...rest } = props;
  return (
    <BlankLayout className={cn('relative bg-[#000005]', className)} {...rest}>
      <ToastContainer
        className={'px-6 py-2'}
        toastClassName={'glass mt-2 rounded-lg'}
        position="top-center"
        theme="dark"
        autoClose={3000}
        draggable={true}
        hideProgressBar
      />
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
