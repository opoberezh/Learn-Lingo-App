import  { useEffect } from 'react';
import TeacherList from "../../components/TeacherList/TeacherList";
import { Link } from 'react-router-dom';
import ukraine from '../../../assets/ukraine.svg'



const TeachersPage = () => {
  useEffect(() => {
   
    document.body.style.backgroundColor = '#f0f0f0'; 

    
    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);

  return (
    <div>
<div>
  <Link to='/'>
  <img src={ukraine} alt="Ukraine Flag" /></Link>
</div>
      <TeacherList />
    </div>
  );
};

export default TeachersPage;
