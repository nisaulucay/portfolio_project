import React from 'react';
import { cn } from '../../lib/utils';


export function FormField({ render }) {
    return (
        <div>
            {render({})}
        </div>
    );
}

export function Form({ children, ...props }) {
    return (
        <form {...props}>{children}</form>
    );
}

const FormItem = ({ className, ...props }) => {
    return (
        <div className={cn("space-y-2", className)} {...props} />
    );
};

const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <label
            className={cn(
                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});

FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef(({ ...props }, ref) => {
    return <div ref={ref} {...props} />;
});

FormControl.displayName = "FormControl";

const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <p
            ref={ref}
            className={cn("text-sm font-medium text-red-500", className)}
            {...props}
        >
            {children}
        </p>
    );
});

FormMessage.displayName = "FormMessage";

export {
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
};
