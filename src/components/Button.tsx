import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
export interface ButtonProps {
    children: ReactNode;
    aschild?: boolean
}
export function Button({  children, aschild }: ButtonProps) {
    const Comp = aschild ? Slot : 'button' ;
    return (
        <Comp className={clsx('py-4 px-3 bg-cyan-500 rounded font-semibold text-black w-full transition-colors  hover:bg-cyan-300  focus:ring-2 ring-white')}
        >

            {children}
        </Comp>
    )
}