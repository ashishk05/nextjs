"use client";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/read'); // Example API route
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      
      <div className="container">
      <h1 className='text-center'>User List</h1>
      <a href="/create" className="btn btn-primary mb-3 float-end">Create User</a>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}