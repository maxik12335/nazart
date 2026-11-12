import classes from './NastenPolka.module.css'

import img from '../../assets/NastenPolka.png'

const NastenPolka = () => {
  return (
      <div className='section--dark line-dark'>
        <div className="container">

          <div className={`${classes.content} content`}>
            <div className={classes.texts}>
              <p className='text-base'>
                Также мы делаем настенные полки, для них мы используем навесы фирмы <span className='bold'>Italiana Feramenta</span>, выдерживающие 150кг на пару.Вы можете полностью положиться на надежность крепления полок к стене.
              </p>
            </div>

            <img className={classes.img} src={img} alt="img 1" />
          </div>

        </div>
      </div>
  )
}

export default NastenPolka;