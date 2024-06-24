import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTeachers } from '../../redux/teachers/operations';
import { selectFilter } from '../../redux/filter/selectors';
import TeacherCard from '../TeacherCard/TeacherCard';
import { CardsWrapper } from './TeacherList.styled';
import Loader from '../Loader/Loader';
import BasicButton from '../ButtonBasic/ButtonBasic';
import { selectError, selectIsLoading } from '../../redux/teachers/selectors';

const TeacherList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const [teachers, setTeachers] = useState([]); // State to hold all teachers
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  const [pageNumber, setPageNumber] = useState(0);
  const pageSize = 3;

  useEffect(() => {
    dispatch(fetchAllTeachers({pageSize, pageNumber}))
      .unwrap()
      .then((teachersResponse) => {
        console.log('Fetch all teachers success:', teachersResponse);
        setTeachers(teachersResponse.teachers); // Store all teachers in state
      })
      .catch((error) => {
        console.error('Fetch all teachers error:', error);
      });
  }, [dispatch, pageNumber]);

  const loadMoreTeachers = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const loadLessTeachers = () => {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };

  const applyFilters = (teachers, filter) => {
    return teachers.filter(teacher => {
      const matchesLanguage = !filter.selectedLanguage || teacher.languages.includes(filter.selectedLanguage);
      const matchesLevel = !filter.selectedLevel || teacher.levels.includes(filter.selectedLevel);
      const matchesPrice = !filter.selectedPrice || teacher.price_per_hour === filter.selectedPrice;
      return matchesLanguage && matchesLevel && matchesPrice;
    });
  };

  // Apply filters to all teachers
  const filteredTeachers = applyFilters(teachers, filter);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (filteredTeachers.length === 0 && teachers.length > 0) {
    return <p>No teachers match the selected filters.</p>;
  }

  const paginatedTeachers = teachers.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);

  return (
    <>
      <CardsWrapper>
        {(filter.selectedLanguage || filter.selectedLevel || filter.selectedPrice ? filteredTeachers : paginatedTeachers)
          .map((teacher) => (
            <li key={teacher.id}>
              <TeacherCard teacher={teacher} />
            </li>
          ))}
      </CardsWrapper>
      {!filter.selectedLanguage && !filter.selectedLevel && !filter.selectedPrice && (
        <div
          style={{
            display: 'flex',
            width: '600px',
            margin: '64px auto',
            justifyContent: pageNumber > 0 ? 'space-between' : 'center',
          }}
        >
          {pageNumber > 0 && (
            <div style={{ width: '183px' }}>
              <BasicButton text="Load less" onClick={loadLessTeachers} />
            </div>
          )}
          {teachers.length > paginatedTeachers.length && (
            <div style={{ width: '183px' }}>
              <BasicButton text="Load more" onClick={loadMoreTeachers} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TeacherList;
