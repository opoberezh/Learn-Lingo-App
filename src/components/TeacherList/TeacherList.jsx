import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTeachers } from '../../redux/teachers/operations';
import { selectFilter } from '../../redux/filter/selectors';
import TeacherCard from '../TeacherCard/TeacherCard';
import { ButtonLess,ButtonMore, CardsWrapper, PaginateButtonWrapper } from './TeacherList.styled';
import Loader from '../Loader/Loader';
import BasicButton from '../ButtonBasic/ButtonBasic';
import { selectError, selectIsLoading } from '../../redux/teachers/selectors';

const TeacherList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const [teachers, setTeachers] = useState([]); 
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  const updatePageSize = () => {
    if(window.innerWidth <= 1024){
      setPageSize(1);
    }else {
      setPageSize(3);
    }
  };

  useEffect(() => {
    updatePageSize();
    window.addEventListener('resize', updatePageSize);
    return () => {
      window.removeEventListener('resize', updatePageSize);
    }
  }, []);

  useEffect(() => {
    dispatch(fetchAllTeachers({pageSize, pageNumber}))
      .unwrap()
      .then((teachersResponse) => {
        console.log('Fetch all teachers success:', teachersResponse);
        setTeachers(teachersResponse.teachers); 
      })
      .catch((error) => {
        console.error('Fetch all teachers error:', error);
      });
  }, [dispatch, pageNumber, pageSize]);

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
            <li  key={teacher.id}>
              <TeacherCard teacher={teacher} />
            </li>
          ))}
      </CardsWrapper>
      {!filter.selectedLanguage && !filter.selectedLevel && !filter.selectedPrice && (
        <PaginateButtonWrapper pageNumber={pageNumber}
          
        >
          {pageNumber > 0 && (
            <ButtonLess>
              <BasicButton text="Load less" onClick={loadLessTeachers} />
            </ButtonLess>
          )}
          {teachers.length > paginatedTeachers.length && (
            <ButtonMore>
              <BasicButton text="Load more" onClick={loadMoreTeachers} />
            </ButtonMore>
          )}
        </PaginateButtonWrapper>
      )}
    </>
  );
};

export default TeacherList;
