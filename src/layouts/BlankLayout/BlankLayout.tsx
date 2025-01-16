import { BlankLayoutProps } from './@types';

function BlankLayout(props: BlankLayoutProps) {
  const { children, ...rest } = props;
  return <main {...rest}>{children}</main>;
}

export default BlankLayout;
