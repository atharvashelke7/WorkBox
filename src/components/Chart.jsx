import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {

  // const inputArray = [
  //   { total: 10 },
  //   { closed: 5 },
  //   { total: 20 },
  //   { closed: 15 },
  //   { total: 30 }
  // ];

  // // State to hold chart values
  // const [chartValues, setChartValues] = useState({
  //   total: [],
  //   closed: []
  // });

  // useEffect(() => {
  //   // Use reduce to separate values into total and closed arrays
  //   const { total, closed } = inputArray.reduce(
  //     (acc, item) => {
    // console.log("item",item)
  //       if (item !== "your key") {
  //         acc.total.push(item.total);
  //       } else if (item.closed !== undefined) {
  //         acc.closed.push(item.closed);
  //       }
  //       return acc;
  //     },
  //     { total: [], closed: [] }
  //   );

  //   // Set the chart values state
  //   setChartValues({ total, closed });
  // }, []); // 

  //TODO:   create a arrya for total and closed 
  // use reduce  for this   devidation 


  const data = {
    labels: ['STR', 'FIN', 'QLT', 'MAN', 'STD', 'HR'],
    datasets: [
      {
        // chartValues.total
        label: 'Total',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      
       
        
      },
      {
        // chartValues.close
        label: 'Closed',
        data: [10, 20, 30, 40, 50, 60, 70],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
      },
    ],

      
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',

      },
      title: {
        display: true,
       
      },
    },
   
  };

  return <Bar data={data} options={options} />;
};

export default Chart;
