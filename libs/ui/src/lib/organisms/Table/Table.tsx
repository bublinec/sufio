type Cell = string | number | JSX.Element;

interface Column {
  key: string;
  align?: 'left' | 'center' | 'right';
  width?: string;
}

interface Row {
  id: string | number;
  [key: string]: Cell;
}

export interface TableProps {
  columns: Column[];
  data: Row[];
  hideHeader?: boolean;
}

export const Table = (props: TableProps) => {
  const { columns, data, hideHeader } = props;

  return (
    <div className={`w-full overflow-auto`}>
      <table className="min-w-full divide-y divide-gray-200">
        {hideHeader ? null : (
          <thead className="bg-light-gray">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    column.align ? `text-${column.align}` : ''
                  }`}
                >
                  {column.key}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className="bg-white divide-y divide-gray-200 ">
          {data.map((row) => {
            return (
              <tr key={row.id}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${
                      column.align ? `text-${column.align}` : ''
                    } ${column.width ? column.width : ''}`}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
