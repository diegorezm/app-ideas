import 'material-symbols';
import PropTypes from 'prop-types';

export const ColorModeButton = ({darkMode, toggleDarkMode}) => {
  return (
    <nav className='float-right  m-auto h-fit m-fit'>
      <span className=" px-1 material-symbols-outlined cursor-pointer text-gray-500 dark:text-darker-green dark:hover:text-gray-600 hover:text-darker-green text-3xl" onClick={toggleDarkMode}>
        {darkMode ? "dark_mode" : "light_mode"}
      </span>
    </nav>
  )
}

ColorModeButton.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
