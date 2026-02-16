import { Button } from '@/components/ui/button';
import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

interface PrimaryButtonProps extends Omit<ComponentPropsWithoutRef<typeof Button>, 'variant'> {
  variant?: 'primary' | 'secondary';
}

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ variant = 'primary', className, ...props }, ref) => {
    if (variant === 'secondary') {
      return (
        <Button
          ref={ref}
          variant="outline"
          size="lg"
          className={`h-14 px-8 text-base font-bold tracking-wide uppercase ${className || ''}`}
          {...props}
        />
      );
    }

    return (
      <Button
        ref={ref}
        variant="default"
        size="lg"
        className={`h-14 px-8 text-base font-bold tracking-wide uppercase bg-primary text-primary-foreground hover:bg-primary/90 ${className || ''}`}
        {...props}
      />
    );
  }
);

PrimaryButton.displayName = 'PrimaryButton';
