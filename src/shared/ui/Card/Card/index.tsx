import styles from './card.module.scss';

import React from 'react';

interface CardProps {
    children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles['card-body']}>{children}</div>
        </div>
    );
};
