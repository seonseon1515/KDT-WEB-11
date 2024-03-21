import React from 'react';
import { useParams } from 'react-router-dom';
import { studentList } from '../components/PracticeStudentList';

export default function PracticeParams() {
  const { newStudentName } = useParams();
  console.log('newStudentName',newStudentName )
  // 1선경
  const targetStudent = studentList[newStudentName-1];
  console.log(targetStudent);

  return (
    <div>
      <h1>PracticeParams</h1>
    </div>
  );
}
