// rafce
import React from 'react';
import { useLocation } from 'react-router-dom';
import UserHeaderNav from './UserHeaderNav';

import styles from './UserHeader.module.css';

const UserHeader = () => {
  const [title, setTitle] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/estatisticas':
        setTitle('Estatisticas');
        break;
      case '/conta/postar':
        setTitle('Poste sua Foto');
        break;
      default:
        setTitle('Minha Conta');
        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
