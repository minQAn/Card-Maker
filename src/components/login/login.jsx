import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const onLogin = async (event) => {
    const result = await authService.login(event.currentTarget.textContent);
    console.log(result);
  };

  return (
    <section className={styles.login}>
      <Header />

      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>

      <Footer />
    </section>
  );
};

export default Login;
