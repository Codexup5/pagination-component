interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <div
            style={{
                padding: 16,
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <h6 style={{ color: 'red' }}>{message}</h6>
        </div>
    );
};
