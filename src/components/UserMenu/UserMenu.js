import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { getUserName } from 'redux/selectors';
import { logOut } from 'redux/operations';

export const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {userName}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
