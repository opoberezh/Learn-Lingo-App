import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ukraine from '../../../assets/ukraine.svg';
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
    <div>
      <div>
        <Link to='/'>
          <img src={ukraine} alt="Ukraine Flag" />
        </Link>
      </div>
      <Filter />
      <TeacherList />
    </div>
  );
};

export default TeachersPage;
