import { UsersTable } from '@/entities/user';
import { useUsers } from '@/features/users';

import { ErrorMessage, LoadingStatus, Pagination } from '@/shared';

export const MainPage = () => {
    const { users, meta, error, isLoading } = useUsers();

    if (isLoading) {
        return <LoadingStatus />;
    }

    if (error) {
        return <ErrorMessage message='Не удалось загрузить данные пользователей.' />;
    }

    return (
        <>
            <h3>Список пользователей</h3>
            <UsersTable users={users} meta={meta as Pagination} isLoading={isLoading} />
        </>
    );
};
