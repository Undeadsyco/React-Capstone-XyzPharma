import { v4 } from 'uuid';

const Table = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th className="title-col"></th>
        <th>$M</th>
        <th>$%</th>
        <th>CER%</th>
      </tr>
    </thead>
    <tbody>
      {data?.rows?.map(row => (
        <tr key={v4()}>
          <td className="title-col">{row.title}</td>
          <td>{row.million}</td>
          <td>{row.growthPercentage}</td>
          <td>{row.cer}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
