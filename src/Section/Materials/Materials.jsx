import classes from './Materials.module.css'

import img from '../../assets/materials.png'

const Materials = () => {
  return (
      <div className={`${classes.section} section line-dark}`}>
        <img className={classes.imgMobyle} src={img} alt="main-fon" />
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
            </div>

            <img className={classes.img} src={img} alt="main-fon" />
          </div>

        </div>
      </div>
  )
}

export default Materials;