import { useEffect } from 'react';

import Filter from '../../components/Filter/Filter';
import TeacherList from '../../components/TeacherList/TeacherList';

const TeachersPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#f0f0f0'; 

    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);

  return (
    <div >
      <div style={{display: "flex", flexDirection: "column", gap: "24px" }}> 
       
        <Filter />
      </div>
      
      <TeacherList />
    </div>
  );
};

export default TeachersPage;
