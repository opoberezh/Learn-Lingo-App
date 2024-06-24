import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';
import { setLanguageFilter, setLevelFilter, setPriceFilter } from '../../redux/filter/slice';
import { fetchAllTeachers } from '../../redux/teachers/operations'; // Ensure this is correctly imported

import Loader from '../Loader/Loader';
import { FilterBarContainer, FilterBarForm, LabelStyled, StyledSelectLang, StyledLevelsSelect, Wrapper, PriceSelect } from './Filter.styled';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const [teachers, setTeachers] = useState([]); // State to hold all teachers

  useEffect(() => {
    dispatch(fetchAllTeachers())
      .unwrap()
      .then((teachersResponse) => {
        console.log('Fetch all teachers success:', teachersResponse);
        setTeachers(teachersResponse.teachers); // Store all teachers in state
      })
      .catch((error) => {
        console.error('Fetch all teachers error:', error);
      });
  }, [dispatch]);

  if (!teachers || teachers.length === 0) {
    return <Loader />;
  }

  // Now you can filter over all teachers, not just those currently loaded
  const languageOptions = [
    ...new Set(teachers.flatMap(teacher => teacher.languages))
  ].map(language => ({
    value: language,
    label: language
  }));

  const levelOptions = [
    ...new Set(teachers.flatMap(teacher => teacher.levels))
  ].map(level => ({
    value: level,
    label: level
  }));

  const priceOptions = [
    ...new Set(teachers.map(teacher => teacher.price_per_hour))
  ].map(price => ({
    value: price,
    label: `${price} $`
  }));

  const handleLanguageChange = (selectedOption) => {
    dispatch(setLanguageFilter(selectedOption ? selectedOption.value : null));
  };

  const handleLevelChange = (selectedOption) => {
    dispatch(setLevelFilter(selectedOption ? selectedOption.value : null));
  };

  const handlePriceChange = (selectedOption) => {
    dispatch(setPriceFilter(selectedOption ? selectedOption.value : null));
  };

  return (
    <FilterBarContainer>
      <FilterBarForm>
        <Wrapper>
          <LabelStyled htmlFor="languageSelect">Languages</LabelStyled>
          <StyledSelectLang
            id="languageSelect"
            value={languageOptions.find(option => option.value === filter.language)}
            onChange={handleLanguageChange}
            options={languageOptions}
            isClearable
            classNamePrefix="react-select"
          />
        </Wrapper>

        <Wrapper>
          <LabelStyled htmlFor="levelSelect">Level of knowledge</LabelStyled>
          <StyledLevelsSelect
            id="levelSelect"
            value={levelOptions.find(option => option.value === filter.level)}
            onChange={handleLevelChange}
            options={levelOptions}
            isClearable
            classNamePrefix="react-select"
          />
        </Wrapper>

        <Wrapper>
          <LabelStyled htmlFor="priceSelect">Price</LabelStyled>
          <PriceSelect
            id="priceSelect"
            value={priceOptions.find(option => option.value === filter.price)}
            onChange={handlePriceChange}
            options={priceOptions}
            isClearable
            classNamePrefix="react-select"
          />
        </Wrapper>
      </FilterBarForm>
    </FilterBarContainer>
  );
}

export default Filter;
