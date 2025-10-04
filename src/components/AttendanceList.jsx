import React from 'react';
import StudentCard from './StudentCard.jsx';  // Explicit .jsx extension

const AttendanceList = ({ students }) => {
  const totalStudents = students.length;
  const averageAttendance = students.reduce((sum, student) => sum + student.attendance, 0) / totalStudents;
  const goodAttendanceCount = students.filter(student => student.attendance > 75).length;

  return (
    <div style={{ 
      padding: '20px',
      minHeight: '100vh',
      boxSizing: 'border-box',
      width: '100%',
      margin: 0
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#2c3e50', 
        marginBottom: '30px',
        margin: '0 0 30px 0'
      }}>
        Student Attendance Dashboard
      </h1>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '30px',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <div style={{
          backgroundColor: '#3498db',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
          minWidth: '180px',
          flex: '1',
          maxWidth: '200px'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Total Students</h3>
          <p style={{ fontSize: '28px', margin: '0', fontWeight: 'bold' }}>{totalStudents}</p>
        </div>
        
        <div style={{
          backgroundColor: '#2ecc71',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
          minWidth: '180px',
          flex: '1',
          maxWidth: '200px'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Avg Attendance</h3>
          <p style={{ fontSize: '28px', margin: '0', fontWeight: 'bold' }}>{averageAttendance.toFixed(1)}%</p>
        </div>
        
        <div style={{
          backgroundColor: '#9b59b6',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
          minWidth: '180px',
          flex: '1',
          maxWidth: '200px'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Good Attendance</h3>
          <p style={{ fontSize: '28px', margin: '0', fontWeight: 'bold' }}>{goodAttendanceCount}</p>
        </div>
      </div>

      <div style={{ 
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
        padding: '0 20px',
        boxSizing: 'border-box'
      }}>
        <h2 style={{ 
          color: '#34495e', 
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Student List
        </h2>
        
        {students.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#7f8c8d' }}>No students found.</p>
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px'
          }}>
            {students.map(student => (
              <div key={student.id} style={{ width: '100%', maxWidth: '600px' }}>
                <StudentCard
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceList;