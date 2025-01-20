'use client';

import cn from '@src/utils/helper/cn.helper';
import CopyIcon from '../CopyIcon';
import { CopyBoxProps } from './@types';

function CopyBox(props: CopyBoxProps) {
  const { text, className } = props;
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Clipboard Error :', err);
    }
  };

  return (
    <div
      onClick={handleCopyToClipboard}
      className={cn(
        'mt-4 flex cursor-pointer items-center justify-center rounded-lg bg-gray-800 p-3',
        className,
      )}
    >
      <h3 className="break-all text-center font-mono text-xs text-[#fff] md:text-sm">
        {text}
      </h3>
      <CopyIcon className="ms-2" width={24} />
    </div>
  );
}

export default CopyBox;
