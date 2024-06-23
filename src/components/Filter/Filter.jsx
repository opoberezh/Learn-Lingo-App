import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selectors";
import { setLanguageFilter, setLevelFilter, setPriceFilter } from "../../redux/filter/slice";
import { selectAllTeachers } from "../../redux/teachers/selectors";
import { fetchAllTeachers } from "../../redux/teachers/operations";
import Select from "react-select";
import Loader from "../Loader/Loader";

function Filter() {
  const filter = useSelector(selectFilter);
  const teachers = useSelector(selectAllTeachers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTeachers()); 
  }, [dispatch]);

  if (!teachers || teachers.length === 0) {
    return <Loader/>; 
  }

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
    <div>
      <form>
        <div>
          <label htmlFor="languageSelect">Languages</label>
          <Select
            id="languageSelect"
            value={languageOptions.find(option => option.value === filter.language)}
            onChange={handleLanguageChange}
            options={languageOptions}
            isClearable
          />
        </div>

        <div>
          <label htmlFor="levelSelect">Levels</label>
          <Select
            id="levelSelect"
            value={levelOptions.find(option => option.value === filter.level)}
            onChange={handleLevelChange}
            options={levelOptions}
            isClearable
          />
        </div>

        <div>
          <label htmlFor="priceSelect">Price per hour</label>
          <Select
            id="priceSelect"
            value={priceOptions.find(option => option.value === filter.price)}
            onChange={handlePriceChange}
            options={priceOptions}
            isClearable
          />
        </div>
      </form>
    </div>
  );
}

export default Filter;
