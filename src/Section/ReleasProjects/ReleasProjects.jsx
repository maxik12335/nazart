import classes from './ReleasProjects.module.css'
import Btn from '../../Components/UI/Btn/Btn'

import img from '../../assets/ReleasProjects/1.png'

const ReleasProjects = () => {
  return (
      <div className='section line-dark'>
        <div className="container">

          <div className={classes.content}>
            <div className={classes.texts}>
              <h2 className='h2'>Мебель из дерева — лучшее, что может быть в доме</h2>
              <p className='text-base'>
                занимаемся мебелью из массива ценных пород дуба и бука более 20 лет, наш фирменный продукт книжные шкафы и полки. Мы постоянно совершенствуем конструкцию, ищем новые решения, ежедневно работаем над качеством наших изделий.
  Любые размеры и комбинации. Любые цвета. 5 вариантов стекол. Не идите на компромисс, вы достойны идеала
              </p>
              <Btn isColor={'dark'} link={'/catalog'}>
                Реализованные проекты
              </Btn>
            </div>

            <img className={classes.img} src={img} alt="img 1" />
          
          </div>

        </div>
      </div>
  )
}

export default ReleasProjects;