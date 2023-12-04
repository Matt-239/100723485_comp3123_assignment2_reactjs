import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeDetail = ({ match }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployeeDetail = async () => {
      try {
        const response = await axios.get(`/api/emp/employees/${match.params.id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    fetchEmployeeDetail();
  }, [match.params.id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      {/* Add other details as needed */}
    </div>
  );
};

export default EmployeeDetail;