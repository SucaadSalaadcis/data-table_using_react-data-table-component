import DataTable from 'react-data-table-component';


const columns = [
  {
    name: 'Title',
    selector: row => row.title,
  },
  {
    name: 'Year',
    selector: row => row.year,
  },
];

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 3,
    title: 'dd',
    year: '23423',
  },
  {
    id: 4,
    title: 'adggd',
    year: '214',
  },
  {
    id: 5,
    title: 'gerrt',
    year: '654',
  },
  {
    id: 6,
    title: 'rergd',
    year: '6465',
  },
  {
    id: 7,
    title: 'detgs',
    year: '6546',
  },
  {
    id: 8,
    title: 'uryrty',
    year: '8575',
  },
  {
    id: 9,
    title: 'ruyrergd',
    year: '355',
  },
  {
    id: 10,
    title: 'sfgddg',
    year: '866',
  },
  {
    id: 11,
    title: 'jjurtf',
    year: '6465',
  },
  {
    id: 12,
    title: 'rfgssf',
    year: '1233',
  },
]




function App() {
  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination paginationComponentOptions={paginationComponentOptions}
    />
  );
};

export default App



// import React, { useEffect, useState } from 'react';
// import DataTable from 'react-data-table-component';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const App = () => {
//   const getToken = () => Cookies.get('token');

//   const [agentData, setagentData] = useState([]);

//   const fetchagents = async () => {
//     try {
//       const response = await axios.get('https://spiky-crater-dep2vxlep8.ploi.online/api/v1/agents', {
//         headers: {
//           Authorization: `Bearer ${getToken()}`,
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       });
//       setagentData(response.data.data); // Adjust this according to your API response
//     } catch (error) {
//       console.error('Error fetching agents:', error);
//     }
//   };

//   useEffect(() => {
//     fetchagents();
//   }, []);

//   const columns = [
//     { name: 'ID', selector: row => row.id, sortable: true },
//     { name: 'FullName', selector: row => row.fullname, sortable: true },
//     { name: 'Phone', selector: row => row.phone, sortable: true },
//     { name: 'Business', selector: row => row.business, sortable: true },
//   ];

//   const paginationComponentOptions = {
//     rowsPerPageText: 'Rows per page',
//     rangeSeparatorText: 'of',
//     selectAllRowsItem: true,
//     selectAllRowsItemText: 'All',
//   };

//   return (
//     <div>
//       <h2>agent List</h2>
//       <DataTable
//         columns={columns}
//         data={agentData}
//         pagination
//         paginationComponentOptions={paginationComponentOptions}
//       />
//     </div>
//   );
// };

// export default App;
