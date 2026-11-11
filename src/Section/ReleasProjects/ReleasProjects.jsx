import classes from './ReleasProjects.module.css'
import Btn from '../../Components/UI/Btn/Btn'
import img_1 from '../../assets/ReleasProjects/1.png'
import img_2 from '../../assets/ReleasProjects/2.png'
import img_3 from '../../assets/ReleasProjects/3.png'
import img_4 from '../../assets/ReleasProjects/4.png'

const ReleasProjects = () => {
  return (
      <div className='section--dark line-dark'>
        <div className="container">

          <div className="content">
            <h2 className='h2'>Мебель из дерева — лучшее, что может быть в доме</h2>
            <p className='text-base'>
              занимаемся мебелью из массива ценных пород дуба и бука более 20 лет, наш фирменный продукт книжные шкафы и полки. Мы постоянно совершенствуем конструкцию, ищем новые решения, ежедневно работаем над качеством наших изделий.
Любые размеры и комбинации. Любые цвета. 5 вариантов стекол. Не идите на компромисс, вы достойны идеала
            </p>

            <Btn isColor={'dark'} link={'/catalog'}>
              каталог
            </Btn>
            

            <div className={classes.images}>
              <img className={classes.img} src={img_1} alt="img 1" />
              <img className={classes.img} src={img_2} alt="img 2" />
              <img className={classes.img} src={img_3} alt="img 3" />
              <img className={classes.img} src={img_4} alt="img 4" />
            </div>
          </div>

        </div>
      </div>
  )
}

export default ReleasProjects;