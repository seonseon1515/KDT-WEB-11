import React from 'react';
import PracticeStudentItem from './PracticeStudentItem';

export const studentList = [
  {
    studentId: 1,
    name: '1선경',
  },
  {
    studentId: 2,
    name: '2선경',
  },
  {
    studentId: 3,
    name: '3선경',
  },
  {
    studentId: 4,
    name: '4선경',
  },
  {
    studentId: 5,
    name: '5선경',
  },
  {
    studentId: 6,
    name: '6선경',
  },
];

export default function PracticeStudentList() {
  return (
    <div>
      <h1>PracticeStudentList</h1>
      {studentList.map((student) => {
        return <PracticeStudentItem key={student.studentId} student={student} />;
      })}
    </div>
  );
}
