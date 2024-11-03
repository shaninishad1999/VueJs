<template>
    <div>
      <h1>Employee List</h1>
      <table border="1px">
        <thead>
          <tr>
            <th>Employee No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" v-bind:key="employee.empNo">
            <td>{{ employee.empNo }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.age }}</td>
            <td>{{ employee.salary }}</td>
          </tr>
        </tbody>
      </table>
     
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import axios from 'axios'; // Import axios directly
  
  export default defineComponent({
    name: 'EmployeeList',
    data() {
      return {
        employees: [], // Initialize to an empty array
      };
    },
    mounted() {
  // Fetch employee data from the API
  axios.get('http://localhost:3000/employees')
    .then((res) => {
      console.log('Response:', res); // Log the whole response
      console.log('Data:', res.data); // Log the data part
      this.employees = res.data.employees; // Adjust this line according to your response structure
      console.log('Employees:', this.employees); // Log the employees to verify they are being set
    })
    .catch((error) => {
      console.error('Error fetching employees:', error);
    });
},

  });
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  