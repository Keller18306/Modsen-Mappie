import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface TextProps {
    children?: ReactNode;
    className?: string;
    fontSize?: number;
    fontWeight?: number;
}
const Text = ({ children, className, fontSize, fontWeight }: TextProps) => {
    return <span className={clsx(styles.text, className)} style={{ fontSize, fontWeight }}>
        {children}
    </span>
}

export default Text;