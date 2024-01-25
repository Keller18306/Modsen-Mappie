import clsx from 'clsx';
import { ReactNode } from 'react';
import './styles.scss';

interface ButtonProps {
    icon: ReactNode;

    active?: boolean;
    className?: string;
}
const Button = ({ icon, active, className }: ButtonProps) => {
    return <div
        className={clsx('button', className, {
            active: active === undefined ? true : active
        })}
    >{icon}</div>;
}

export default Button;