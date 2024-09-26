import { useEffect } from 'react';

import Filter from '../../components/Filter/Filter';
import TeacherList from '../../components/TeacherList/TeacherList';
import { Container, FilterWrapper } from './TeachersPage.styled';

const TeachersPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#f0f0f0'; 

    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);

  return (
    <Container>
     
       <FilterWrapper>
       <Filter />
       </FilterWrapper>
       
     
      <div>
      <TeacherList />
      </div>
     
    </Container>
  );
};

export default TeachersPage;
