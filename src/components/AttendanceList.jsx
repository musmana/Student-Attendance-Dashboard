import React from 'react';
import StudentCard from './StudentCard';

const AttendanceList = ({ students }) => {
  const totalStudents = students.length;
  const averageAttendance = students.reduce((sum, student) => sum + student.attendance, 0) / totalStudents;
  const goodAttendanceCount = students.filter(student => student.attendance > 75).length;

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>
        Student Attendance Dashboard
      </h1>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '30px',
        flexWrap: 'wrap',
        gap: '15px'
      }}>
        <div style={{
          backgroundColor: '#3498db',
          color: 'white',
          padding: '15px',
          borderRadius: '8px',
          textAlign: 'center',
          minWidth: '150px'
        }}>
          <h3>Total Students</h3>
          <p style={{ fontSize: '24px', margin: '0' }}>{totalStudents}</p>
        </div>
        
        <div style={{
          backgroundColor: '#2ecc71',
          color: 'white',
          padding: '15px',
          borderRadius: '8px',
          textAlign: 'center',
          minWidth: '150px'
        }}>
          <h3>Avg Attendance</h3>
          <p style={{ fontSize: '24px', margin: '0' }}>{averageAttendance.toFixed(1)}%</p>
        </div>
        
        <div style={{
          backgroundColor: '#9b59b6',
          color: 'white',
          padding: '15px',
          borderRadius: '8px',
          textAlign: 'center',
          minWidth: '150px'
        }}>
          <h3>Good Attendance</h3>
          <p style={{ fontSize: '24px', margin: '0' }}>{goodAttendanceCount}</p>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#34495e', marginBottom: '20px' }}>Student List</h2>
        
        {students.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#7f8c8d' }}>No students found.</p>
        ) : (
          students.map(student => (
            <StudentCard
              key={student.id}
              name={student.name}
              rollNo={student.rollNo}
              attendance={student.attendance}
            >
              {student.attendance < 60 && (
                <span style={{ color: '#e74c3c' }}>
                  🚨 Immediate action required! Contact parents.
                </span>
              )}
              {student.attendance >= 95 && (
                <span style={{ color: '#27ae60' }}>
                  🏆 Perfect attendance candidate!
                </span>
              )}
            </StudentCard>
          ))
        )}
      </div>
    </div>
  );
};

export default AttendanceList;