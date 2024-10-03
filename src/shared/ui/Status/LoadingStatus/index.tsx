import './index.scss';

export const LoadingStatus = () => {
    return (
        <div
            style={{
                height: '100vh',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <div className='circular-progress'></div>
        </div>
    );
};
