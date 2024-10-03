import { Table } from '../Table';

interface TableSkeletonProps {
    headCells?: string[];
    rowsCount?: number;
    colCount?: number;
    withIndex?: boolean;
}

export const TableSkeleton = ({
    headCells,
    rowsCount = 9,
    colCount = 5,
    withIndex = false,
}: TableSkeletonProps) => {
    return (
        <Table headCells={headCells}>
            {[...Array(rowsCount).keys()].map((key) => (
                <tr key={key} className='table-row'>
                    {[...Array(colCount).keys()].map((_, item) => (
                        <td key={item} className='table-cell'>
                            <div className='skeleton-cell'>
                                {item === 0 && withIndex && (
                                    <div className='skeleton skeleton-index' />
                                )}
                            </div>
                        </td>
                    ))}
                </tr>
            ))}
        </Table>
    );
};
