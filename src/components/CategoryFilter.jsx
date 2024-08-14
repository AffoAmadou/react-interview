import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategories } from '../slices/moviesSlice';

function CategoryFilter() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.movies.categories);
  const selectedCategories = useSelector((state) => state.movies.selectedCategories);

  const handleChange = (event) => {
    const value = event.target.value;
    const updatedSelectedCategories = event.target.checked
      ? [...selectedCategories, value]
      : selectedCategories.filter(category => category !== value);

    dispatch(setSelectedCategories(updatedSelectedCategories));
  };

  return (
    <div className="category__filter">
      <p>CATEGORY</p>
      {categories.map((category) => (
        <div key={category} className="category__option">
          <label>
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={handleChange}
            />
            {category}
          </label>
        </div>
      ))}
    </div>
  );
}

export default CategoryFilter;
