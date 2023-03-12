import * as React from 'react';
import { Primitive } from '@radix-ui/react-primitive';

import type * as Radix from '@radix-ui/react-primitive';
import { classNames } from '@suffragium/lib';

const DEFAULT_ORIENTATION = 'horizontal';
const ORIENTATIONS = ['horizontal', 'vertical'] as const;

type Orientation = typeof ORIENTATIONS[number];
type SeparatorElement = React.ElementRef<typeof Primitive.div>;
type PrimitiveDivProps = Radix.ComponentPropsWithoutRef<typeof Primitive.div>;
interface SeparatorProps extends PrimitiveDivProps {
  orientation?: Orientation;
  decorative?: boolean;
}

const Divider = React.forwardRef<SeparatorElement, SeparatorProps>((props, forwardedRef) => {
  const { className, decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === 'vertical' ? orientation : undefined;
  const semanticProps = decorative
    ? { role: 'none' }
    : { 'aria-orientation': ariaOrientation, role: 'separator' };

  return (
    <Primitive.div
      data-orientation={orientation}
      className={classNames("bg-slate-200", orientation == "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)}
      {...semanticProps}
      {...domProps}
      ref={forwardedRef}
    />
  );
});

Divider.displayName = "Divider"

function isValidOrientation(orientation: any): orientation is Orientation {
  return ORIENTATIONS.includes(orientation);
}

export {
  Divider,
};
export type { SeparatorProps };
