import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operations';
import { selectError, selectIsLoading, selectTeachers, selectTotalCount } from '../../redux/teachers/selectors';
import { selectFilter } from '../../redux/filter/selectors';
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
  const filter = useSelector(selectFilter);
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

  const canLoadMore = filteredTeachers.length < totalCount;

  return (
    <>
      <CardsWrapper>
        {filteredTeachers.length > 0 ? (
          filteredTeachers.slice(0, (pageNumber + 1) * pageSize).map((teacher) => (
            <li key={teacher.id}>
              <TeacherCard teacher={teacher} />
            </li>
          ))
        ) : (
          <p>No teachers match the selected filters.</p>
        )}
      </CardsWrapper>
      <div style={{
        display: "flex",
        width: "600px",
        margin: "64px auto",
        justifyContent: canLoadMore && pageNumber > 0 ? "space-between" : "center"
      }}>
        {pageNumber > 0 && (
          <div style={{ width: "183px" }}>
            <BasicButton text="Load less" onClick={loadLessTeachers} />
          </div>
        )}
        {canLoadMore && (
          <div style={{ width: "183px" }}>
            <BasicButton text="Load more" onClick={loadMoreTeachers} />
          </div>
        )}
      </div>
    </>
  );
};

export default TeacherList;
