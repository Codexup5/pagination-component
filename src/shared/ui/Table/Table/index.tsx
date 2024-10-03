import styles from './table.module.scss';

import React, { useMemo } from 'react';

import { TablePagination, TablePaginationProps } from '../TablePagination';

export interface TableProps {
    headCells?: string[];
    children: React.ReactNode;
    pagination?: TablePaginationProps;
    tableProps?: React.TableHTMLAttributes<HTMLTableElement>;
    tableHeadProps?: React.HTMLAttributes<HTMLTableSectionElement>;
    wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const Table = ({
    headCells,
    children,
    pagination,
    tableProps,
    tableHeadProps,
    wrapperProps,
}: TableProps) => {
    const withHead = useMemo(() => !!(headCells && headCells.length > 0), [headCells]);

    return (
        <>
            <div {...wrapperProps} className={styles.wrapper}>
                <table {...tableProps} className={styles.table}>
                    {withHead && (
                        <thead {...tableHeadProps} className={styles.tableHead}>
                            <tr>
                                {headCells?.map((cell, index) => (
                                    <th key={index} className={styles.tableHeadCell}>
                                        {cell}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                    )}
                    <tbody className={styles.tableBody}>{children}</tbody>
                </table>
            </div>

            {pagination && <TablePagination {...pagination} />}
        </>
    );
};
