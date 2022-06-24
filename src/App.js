import { useEffect, useState } from 'react';
import styles from './avatar.module.css';

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.github.com/users/emmnesty/repos'
      );
      const data = await response.json();
      console.log(data);
      setRepositories(data);
    }
    fetchData();
  }, []);

  return (
    <ul className={styles.ulPai}>
      {repositories.map((repo) => (
        <div className={styles.corDoFundo} key={repo.id}>
          {repo.name}
          <img
            src={repo.owner.avatar_url}
            alt=''
            className={styles.imagemIcon}
          />
        </div>
      ))}
    </ul>
  );
}
