type TableCell = string | number | JSX.Element;

export interface TableProps {
  columns: string[];
  data: Record<string, TableCell>[];
  rowKey: string;
}

export function Table(props: TableProps) {
  const { columns, data, rowKey } = props;

  return (
    <div className={`w-full overflow-auto`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dizide-y divide-gray-200">
          {data.map((row, index) => {
            console.log(row[columns[index]]);
            return (
              <tr key={row[rowKey].toString()}>
                {columns.map((column) => (
                  <td
                    key={column}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {row[column]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
