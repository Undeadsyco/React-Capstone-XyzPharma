import { useState } from 'react';

import { Table } from '../../Components';
import { InvestorsContainer } from './styles';

const Investors = ({ onGetData }) => {
  const [qtr, setQtr] = useState('');
  const [year, setYear] = useState('');
  const [data, setData] = useState(undefined);

  const submit = () => {
    if (!qtr || !year) {
      alert('Please Choose A Quarter and Year To See Results!')
    }
    onGetData(qtr, year).then(res => {
      setData(res);
      console.log(res)
    });
  }

  return (
    <InvestorsContainer rows="15% 85%">
      <div className='filters'>
        <div>
          <label htmlFor="qtr">Quarter</label>
          <select id="qtr" name="qtr" value={qtr} onChange={(e) => setQtr(e.target.value)}>
            <option value="">Choose...</option>
            <option>1st Qtr</option>
            <option>2nd Qtr</option>
            <option>3rd Qtr</option>
            <option>4th Qtr</option>
          </select>
        </div>
        <div>
          <label htmlFor="year">Financial Year</label>
          <select id="year" name="year" value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Choose...</option>
            <option>2019</option>
            <option>2020</option>
          </select>
        </div>
        <div>
          <button onClick={() => submit()} type="button">Get Results</button>
        </div>
      </div>
      <div className="table">
        <Table data={data} />
      </div>
    </InvestorsContainer>
  );
};

export default Investors;
