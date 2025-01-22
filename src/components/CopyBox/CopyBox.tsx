'use client';

import cn from '@src/utils/helper/cn.helper';
import CopyIcon from '../CopyIcon';
import { CopyBoxProps } from './@types';
import { toast } from 'react-toastify';

function CopyBox(props: CopyBoxProps) {
  const { text, className } = props;
  const toastId = 'copy-toast';

  const handleCopyToClipboard = async () => {
    if (toast.isActive(toastId)) {
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard!', { toastId });
    } catch (_err) {
      toast.error(`Failed to copy`, { toastId });
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
