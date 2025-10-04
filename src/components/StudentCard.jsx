import React from 'react';

const StudentCard = ({ name, rollNo, attendance, children }) => {
  const attendanceStyle = {
    color: attendance > 75 ? 'green' : 'red',
    fontWeight: 'bold',
    fontSize: '16px'
  };

  const renderStatusMessage = () => {
    if (attendance < 50) {
      return (
        <div style={{ color: 'red', fontSize: '14px', marginTop: '8px', fontWeight: 'bold' }}>
          ⚠️ Warning: Low Attendance
        </div>
      );
    } else if (attendance > 90) {
      return (
        <div style={{ color: 'gold', fontSize: '14px', marginTop: '8px', fontWeight: 'bold' }}>
          ⭐ Excellent Student
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      margin: '0',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <h3 style={{ 
        margin: '0 0 12px 0', 
        color: '#2c3e50',
        fontSize: '20px',
        fontWeight: '600'
      }}>
        {name}
      </h3>
      
      <p style={{ 
        margin: '8px 0', 
        color: '#666',
        fontSize: '16px'
      }}>
        <strong>Roll No:</strong> {rollNo}
      </p>
      
      <p style={attendanceStyle}>
        <strong>Attendance:</strong> {attendance}%
      </p>
      
      {renderStatusMessage()}
      
      {children && (
        <div style={{ 
          marginTop: '12px', 
          padding: '10px', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '6px',
          fontSize: '14px',
          borderLeft: '4px solid #3498db'
        }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default StudentCard;