import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    aschild?: boolean
}
export function Text({ size = 'md', children, aschild }: TextProps) {
    const Comp = aschild ? Slot : 'span' ;
    return (
        <Comp className={clsx('text-gray-100 font-sans', {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-md': size === 'lg',
        }
        )}
        >

            {children}
        </Comp>
    )
}