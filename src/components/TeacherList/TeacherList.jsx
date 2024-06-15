
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operations';
import { selectError, selectIsLoading, selectTeachers, selectTotalCount } from '../../redux/teachers/selectors';
import TeacherCard from '../TeacherCard/TeacherCard';
import { CardsWrapper } from './TeacherList.styled';
import Loader from '../Loader/Loader';
import BasicButton from '../ButtonBasic/ButtonBasic';

const TeacherList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const totalCount = useSelector(selectTotalCount);
  const [pageNumber, setPageNumber] = useState(0);
  const pageSize = 3;

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
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const canLoadMore = teachers.length < totalCount;

  return (
    <>
      <CardsWrapper>
        {Array.isArray(teachers) && teachers.map((teacher) => ( // Перевірка, чи є teachers масивом
          <li key={teacher.id}>
            <TeacherCard teacher={teacher} />
          </li>
        ))}
      </CardsWrapper>
      {canLoadMore && (
        <div style={{ width: "183px", margin: "64px auto" }}>
          <BasicButton text="Load more" onClick={loadMoreTeachers} />
        </div>
      )}
    </>
  );
};

export default TeacherList;
