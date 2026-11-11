import classes from './NastenPolka.module.css'

import img from '../../assets/NastenPolka.png'

const NastenPolka = () => {
  return (
      <div className='section line-dark'>
        <div className="container">

          <div className="content">
            <div className={classes.content}>
              <p className='text-base'>
                Также мы делаем настенные полки, для них мы используем навесы фирмы Italiana Feramenta, выдерживающие 150кг на пару.Вы можете полностью положиться на надежность крепления полок к стене.
              </p>

              <img className={classes.img} src={img} alt="img 1" />
            </div>
          </div>

        </div>
      </div>
  )
}

export default NastenPolka;