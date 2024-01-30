import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';
import './styles.scss';

interface ButtonProps {
    icon: ReactNode;

    active?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}
const Button = ({ icon, active, className, onClick }: ButtonProps) => {
    return <div
        className={clsx('button', className, {
            active: Boolean(active)
        })}
        onClick={onClick}
    >{icon}</div>;
}

export default Button;