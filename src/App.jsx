import React from 'react';
import AttendanceList from './components/AttendanceList.jsx';  // Explicit .jsx extension

const studentsData = [
  { id: 1, name: 'Alice Johnson', rollNo: '101', attendance: 92 },
  { id: 2, name: 'Bob Smith', rollNo: '102', attendance: 45 },
  { id: 3, name: 'Carol Davis', rollNo: '103', attendance: 78 },
  { id: 4, name: 'David Wilson', rollNo: '104', attendance: 35 },
  { id: 5, name: 'Eva Brown', rollNo: '105', attendance: 88 },
  { id: 6, name: 'Frank Miller', rollNo: '106', attendance: 96 },
  { id: 7, name: 'Grace Lee', rollNo: '107', attendance: 67 },
  { id: 8, name: 'Henry Taylor', rollNo: '108', attendance: 82 },
];

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#ecf0f1',
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0
    }}>
      <AttendanceList students={studentsData} />
    </div>
  );
}

export default App;