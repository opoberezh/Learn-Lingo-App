import { useDispatch, useSelector } from "react-redux"
import { selectFilter } from "../../redux/filter/selectors"
import { selectTeachers } from "../../redux/teachers/selectors";
import { setLanguageFilter, setLevelFilter, setPriceFilter } from "../../redux/filter/slice";

function Filter() {
  const filter = useSelector(selectFilter);
  const teachers = useSelector(selectTeachers);
  const dispatch = useDispatch();

  const { languages: selectedLanguage, levels: selectedLevel, price_per_hour: selectedPrice } = filter || {};

  const languageOptions = [...new Set(teachers.flatMap(teacher => teacher.languages))];
  const levelOptions = [...new Set(teachers.flatMap(teacher => teacher.levels))];
  const priceOptions = [...new Set(teachers.map(teacher => teacher.price_per_hour))];

  const handleLanguageChange = (e) => {
    dispatch(setLanguageFilter(e.target.value));
  };

  const handleLevelChange = (e) => {
    dispatch(setLevelFilter(e.target.value));
  };

  const handlePriceChange = (e) => {
    dispatch(setPriceFilter(e.target.value));
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="languageSelect">Languages</label>
          <select
            id="languageSelect"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
          
            {languageOptions.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="levelSelect">Levels</label>
          <select
            id="levelSelect"
            value={selectedLevel}
            onChange={handleLevelChange}
          >
         
            {levelOptions.map((level, index) => (
              <option key={index} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="priceSelect">Price per hour</label>
          <div>
          <select
            id="priceSelect"
            value={selectedPrice}
            onChange={handlePriceChange}
          >
           
            {priceOptions.map((price, index) => (
              <option key={index} value={price}>
                {price}
              </option>
            ))}
          </select>
            <span>
              $
            </span>
          </div>
         
        </div>
      </form>
    </div>
  );
}

export default Filter;
