import { Box, Stack } from '@mui/system';
import { Exercise } from '../../utils/type';

import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { ReactNode, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { RootState } from 'app/redux';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

function CaloriesChart() {
  const { exercises } = useSelector((state: RootState) => state);
  const [type, setType] = useState<'per exercise' | 'per rep' | string>('per exercise');
  const labels: string[] = exercises
    .map(ex =>
      type === 'per exercise'
        ? `${ex.startTime}__${type}`
        : ex.reps.map((rep, i) => {
            return `${ex.startTime}__${type}_${i + 1}`;
          }),
    )
    .flatMap(val => val);

  const values: number[] = exercises
    .map(ex =>
      type === 'per exercise'
        ? ex.calories * ex.reps.map(rep => rep.number).reduce((acc, cur) => acc + cur)
        : ex.reps.map((rep, i) => {
            return rep.number * ex.calories;
          }),
    )
    .flatMap(val => val);

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: values,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <Stack direction={'column'} component='ul' padding={10}>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Types</FormLabel>
        <RadioGroup aria-label='' name='chartDataType' value={type} onChange={e => setType(e.target.value)} row>
          <FormControlLabel value='per exercise' label='Per Exercise' control={<Radio />} />
          <FormControlLabel value='per rep' label='Per rep' control={<Radio />} />
        </RadioGroup>

        <FormHelperText></FormHelperText>
      </FormControl>
      <Bar options={options} data={data} />
    </Stack>
  );
}
export default CaloriesChart;
