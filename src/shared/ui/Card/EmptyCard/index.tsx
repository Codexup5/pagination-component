import './index.scss';

interface EmptyCardProps {
    children: React.ReactNode;
    cardProps?: React.HTMLProps<HTMLDivElement>;
}

export const EmptyCard = ({ children, cardProps }: EmptyCardProps) => {
    return (
        <div {...cardProps} className='empty-card'>
            <div className='card-content'>
                <h5 className='empty-card-text'>{children}</h5>
            </div>
        </div>
    );
};
