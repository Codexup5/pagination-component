import { useMemo } from 'react';

import { User } from '../../model';

import {
    Card,
    EmptyCard,
    Pagination,
    ROWS_PER_PAGE_VALUE,
    Table,
    TableSkeleton,
    Typography,
} from '@/shared';

interface UsersTableProps {
    users: User[];
    meta: Pagination;
    isLoading: boolean;
}

export const UsersHeadCells = ['№', 'ФИО', 'Телефон', 'Дата Рождения'];

export const UsersTable = ({
    users,
    meta: { limit, page, count = 0, onLimitChange, onPageChange = () => {} },
    isLoading,
}: UsersTableProps) => {
    const renderContent = useMemo(() => {
        if (users && users.length > 0) {
            return (
                <Table
                    headCells={UsersHeadCells}
                    pagination={{
                        count,
                        page,
                        rowsPerPage: limit,
                        rowsPerPageOptions: ROWS_PER_PAGE_VALUE,
                        onPageChange,
                        onRowsPerPageChange: onLimitChange,
                    }}>
                    {users.slice(0, limit).map((user) => {
                        if (user.id) {
                            return (
                                <tr key={user.id}>
                                    <th>
                                        <Typography>{user.index}</Typography>
                                    </th>
                                    <th>
                                        <Typography>
                                            {`${user.lastName ?? ''} ${user.firstName ?? ''} ${
                                                user.maidenName ?? ''
                                            }`}
                                        </Typography>
                                    </th>
                                    <th>
                                        <Typography>{user.phone ?? ''}</Typography>
                                    </th>
                                    <th>
                                        <Typography>{user.birthDate}</Typography>
                                    </th>
                                </tr>
                            );
                        }

                        return null;
                    })}
                </Table>
            );
        }

        if (users.length === 0 && !isLoading) {
            return <EmptyCard>Список пользователей пуст</EmptyCard>;
        }

        return <TableSkeleton headCells={UsersHeadCells} rowsCount={5} colCount={8} withIndex />;
    }, []);

    return <Card>{renderContent}</Card>;
};
