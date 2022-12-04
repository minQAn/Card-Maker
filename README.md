## Business Card Maker

### Realtime database with firebase

<a href="https://minq-card-maker.netlify.app">Demo</a>

\*\*\* Important Note

- PostCSS

```
import styles from './app.module.css'
<h1 clasName={styles.title}>title</h1>
```

It prevents duplication by giving the class name of css.

- useState([]) or useState({}) / Array & Object
  When managed as an array in state, it loops through repetitive statements such as
  map, so if array size increases, it will be inefficient. Therefore, if you make an object in the useState and manage it with keys of the object, it is much more efficient because you can immediately get the desired address by key and value.

useState()에서 [] 배열로 관리하면 map을 통해서 하는데
input 같은 것들이 많아지면 도는 시간이 비효율적이기 때문에
Object의 형태로 만들어 관리하면 key를 통해 바로 할 수 있기때문에
훨씬 efficient하다.
