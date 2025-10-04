import React from 'react';

const StudentCard = ({ name, rollNo, attendance, children }) => {
  const attendanceStyle = {
    color: attendance > 75 ? 'green' : 'red',
    fontWeight: 'bold'
  };

  const renderStatusMessage = () => {
    if (attendance < 50) {
      return <div style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
        ⚠️ Warning: Low Attendance
      </div>;
    } else if (attendance > 90) {
      return <div style={{ color: 'gold', fontSize: '14px', marginTop: '5px' }}>
        ⭐ Excellent Student
      </div>;
    }
    return null;
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{name}</h3>
      <p style={{ margin: '4px 0', color: '#666' }}>Roll No: {rollNo}</p>
      <p style={attendanceStyle}>
        Attendance: {attendance}%
      </p>
      
      {renderStatusMessage()}
      
      {children && (
        <div style={{ 
          marginTop: '10px', 
          padding: '8px', 
          backgroundColor: '#f5f5f5', 
          borderRadius: '4px',
          fontSize: '14px'
        }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default StudentCard;