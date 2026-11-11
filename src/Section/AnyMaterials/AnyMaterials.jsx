import classes from './AnyMaterials.module.css'

import img_1 from '../../assets/AnyMaterials/1.png'
import img_2 from '../../assets/AnyMaterials/2.png'
import img_3 from '../../assets/AnyMaterials/3.png'

const AnyMaterials = () => {
  return (
      <div className='section line-dark'>
        <div className="container">

          <div className="content">
            <h2 className='h2'>Почему не другие виды дерева?</h2>

            <div className={classes.content}>
              <p className='text-base'>
                Сосна и ель слишком мягкие, на них остаются следы буквально от ногтя или упавшей ручки. Сосна имеет полосатую структуру, обусловленную наличием смолы. Вид изделий из сосны дешевый, деревенский
              </p>

              <p className='text-base'>
                Однако, количество операций и их трудоемкость точно такая же, как и при работе с благородными породами, в итоге стоимость получается ниже процентов на 20, при очевидном проигрыше в качестве
              </p>

               <div className={classes.images}>
                <img className={classes.img} src={img_1} alt="img 1" />
                <img className={classes.img} src={img_2} alt="img 2" />
                <img className={classes.img} src={img_3} alt="img 3" />
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default AnyMaterials;