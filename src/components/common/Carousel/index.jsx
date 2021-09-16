import { useState } from 'react'
import styles from './index.module.scss'
import { throttle } from '../../../utils/index'

import test1 from '../../../asset/img/test1.jpg'
import test2 from '../../../asset/img/test2.jpg'
import test3 from '../../../asset/img/test3.jpg'
import test4 from '../../../asset/img/test1.png'


const Carousel = (props) => {

  const [active, setActive] = useState(1)
  const [last, setLast] = useState(4)
  const [next, setNext] = useState(2)

  const handleClick = (type) => {

    if(type === 1){
      setLast(active)
      setActive(next)
      setNext((next + 1) === 5 ? 1 : (next + 1))
    }else {
      setNext(active)
      setActive(last)
      setLast((last - 1) === 0 ? 4 : (last - 1))
    }
  }

  return (
    <div className={styles['carousel']}>
      <div className={styles['operation']}>
        <button className={styles['last']} onClick={throttle(500, () => {handleClick(1)})}>上一个</button>
        <button className={styles['next']} onClick={throttle(500, () => {handleClick(2)})}>下一个</button>
      </div>
      {
        [test1, test2, test3, test4].map((n, index) => {
          return (
            <div className={[(index + 1) === active ? styles.active : (index + 1) === last ? styles.last : styles.next, styles.img].join(' ')} key={index}>
              <img src={n} alt={`测试图片${index}`}></img>
            </div>
          )
        })
      }
    </div>
  )
}

export default Carousel