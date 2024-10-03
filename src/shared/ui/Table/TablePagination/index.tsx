import styles from './tablePagination.module.scss';

export interface TablePaginationProps {
    count: number;
    page: number;
    rowsPerPage: number;
    rowsPerPageOptions: number[];
    onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
    onRowsPerPageChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const TablePagination: React.FC<TablePaginationProps> = ({
    count,
    page,
    rowsPerPage,
    rowsPerPageOptions,
    onPageChange,
    onRowsPerPageChange,
}) => {
    const totalPages = Math.ceil(count / rowsPerPage);

    return (
        <div className={styles.pagination}>
            <button
                onClick={(e) => onPageChange(e, 0)}
                disabled={page === 0}
                aria-label='first page'
                className={styles.button}>
                {'<<'}
            </button>
            <button
                onClick={(e) => onPageChange(e, page - 1)}
                disabled={page === 0}
                aria-label='previous page'
                className={styles.button}>
                {'<'}
            </button>
            <span className={styles.pageInfo}>
                Page {page + 1} of {totalPages}
            </span>
            <button
                onClick={(e) => onPageChange(e, page + 1)}
                disabled={page >= totalPages - 1}
                aria-label='next page'
                className={styles.button}>
                {'>'}
            </button>
            <button
                onClick={(e) => onPageChange(e, totalPages - 1)}
                disabled={page >= totalPages - 1}
                aria-label='last page'
                className={styles.button}>
                {'>>'}
            </button>
            {onRowsPerPageChange && (
                <select
                    value={rowsPerPage}
                    onChange={onRowsPerPageChange}
                    aria-label='rows per page'
                    className={styles.select}>
                    {rowsPerPageOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};
