import classes from './Materials.module.css'
import Btn from '../../Components/UI/Btn/Btn'

import img from '../../assets/catalog/tovar_5/5.png'

const Materials = () => {
  return (
      <div className='section--dark line-dark'>
        <div className="container">

          <div className={`${classes.content} content`}>
            <div className={classes.texts}>
              <p className='text-base'>
                Мы используем для своих изделий твердые породы дерева, бук и дуб. Они имеют благородный вид и отличаются надежностью, прочностью
              </p>

              <p className='text-base'>
                Наши изделия выполнены из массива на 100%, в отличие от продукции многих конкурентов, где из массива сделаны только фасады, а боковые стенки из фанеры, МДФ или ДСП
              </p>

              <p className='text-base'>
                Мебель из бука или дуба, при соблюдении условий эксплуатации, прослужит вам не один десяток лет.
              </p>

              <Btn isColor={'light'} link={'/catalog'}>
                Галерея изделий
              </Btn>
            </div>

            <img className={classes.img} src={img} alt="main-fon" />
          </div>

        </div>
      </div>
  )
}

export default Materials;