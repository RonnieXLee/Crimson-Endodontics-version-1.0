import { FC } from 'react';
import EndoCareSvg from './icons/EndoCareSvg';
import { cn } from '@/lib/utils';

interface EndoCareImageProps {
  className?: string;
  width?: number;
  height?: number;
}

const EndoCareImage: FC<EndoCareImageProps> = ({ className, width, height }) => {
  return (
    <div className={cn('relative rounded-lg overflow-hidden bg-background/50 backdrop-blur-sm p-6', className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
      <EndoCareSvg width={width} height={height} className="relative z-10" />
    </div>
  );
};

export default EndoCareImage;
