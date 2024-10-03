import React from 'react';

interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption';
    color?: 'default' | 'inherit' | 'primary' | 'secondary';
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    children: React.ReactNode;
    className?: string;
}

const variantStyles: Record<string, React.CSSProperties> = {
    h1: { fontSize: '2.5rem', fontWeight: 600 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1.75rem', fontWeight: 600 },
    h4: { fontSize: '1.5rem', fontWeight: 600 },
    h5: { fontSize: '1.25rem', fontWeight: 600 },
    h6: { fontSize: '1rem', fontWeight: 600 },
    body1: { fontSize: '1rem', fontWeight: 400 },
    body2: { fontSize: '0.875rem', fontWeight: 400 },
    caption: { fontSize: '0.75rem', fontWeight: 400 },
};

const colorStyles: Record<string, React.CSSProperties> = {
    default: { color: '#000' },
    inherit: { color: 'inherit' },
    primary: { color: '#1976d2' },
    secondary: { color: '#dc004e' },
};

export const Typography: React.FC<TypographyProps> = ({
    variant = 'body1',
    color = 'default',
    align = 'inherit',
    children,
    className = '',
}) => {
    const styles = {
        ...variantStyles[variant],
        ...colorStyles[color],
        textAlign: align,
    };

    return (
        <span className={className} style={styles}>
            {children}
        </span>
    );
};
