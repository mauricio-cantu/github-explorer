import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ThemeContext } from 'styled-components';
import Switch from '@material-ui/core/Switch';
import { FiMoon, FiChevronLeft } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { AppHeader } from './styles';

const DarkThemeSwitch = withStyles({
  switchBase: {
    color: '#04d361',
    '&$checked': {
      color: '#03a84d',
    },
    '&$checked + $track': {
      backgroundColor: '#03a84d',
    },
  },
  checked: {},
  track: {},
})(Switch);

interface Props {
  toggleTheme(): void;
}

interface RepositoryParams {
  repository: string;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  const { pathname } = useLocation();
  const isRepositoryPage = /^\/repository\//.test(pathname);

  return (
    <>
      <AppHeader>
        <img src={logoImg} alt="GitHub Explorer" />
        <div title="Toggle theme">
          <FormControlLabel
            value="end"
            control={
              <DarkThemeSwitch
                onChange={toggleTheme}
                checked={title === 'dark'}
              />
            }
            label={<FiMoon size={20} />}
            labelPlacement="end"
          />
        </div>
        {isRepositoryPage && (
          <Link to="/">
            <FiChevronLeft size={16} />
            Back
          </Link>
        )}
      </AppHeader>
    </>
  );
};

export default Header;
