import  { useEffect } from 'react';
import TeacherList from "../../components/TeacherList/TeacherList";

const TeachersPage = () => {
  useEffect(() => {
   
    document.body.style.backgroundColor = '#f0f0f0'; 

    
    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);

  return (
    <div>
      <TeacherList />
    </div>
  );
};

export default TeachersPage;
