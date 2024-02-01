import { ReactNode } from 'react';
import './styles.scss';
import clsx from 'clsx';

interface InputProps {
    icon?: ReactNode;
    className?: string;
    placeholder?: string;
    defaultValue?: string | number;
    // value?: string | number;
}

const Input = ({ icon, className, placeholder, defaultValue }: InputProps) => {
    return <div className={clsx('input', className)}>
        {icon}
        <input placeholder={placeholder} defaultValue={defaultValue}></input>
    </div>
}

export default Input;