import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operations';
import { selectError, selectIsLoading, selectTeachers } from '../../redux/teachers/selectors';
import TeacherCard from '../TeacherCard/TeacherCard';
import { CardsWrapper } from './TeacherList.styled';


const TeacherList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [pageNumber, setPageNumber] = useState(0);
  const pageSize = 4;

  useEffect(() => {
    dispatch(fetchTeachers({ pageSize, pageNumber }))
      .then((response) => {
        console.log('Fetch teachers success:', response.payload);
      })
      .catch((error) => {
        console.error('Fetch teachers error:', error);
      });
  }, [dispatch, pageNumber]);

  const loadMoreTeachers = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  if (isLoading && pageNumber === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
     
      <CardsWrapper>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            <TeacherCard teacher={teacher} />
          </li>
        ))}
      </CardsWrapper>
      {teachers.length >= (pageNumber + 1) * pageSize && (
        <button onClick={loadMoreTeachers}>Load more</button>
      )}
    </>
  );
};

export default TeacherList;
