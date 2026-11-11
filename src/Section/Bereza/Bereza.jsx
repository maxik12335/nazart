import classes from './Bereza.module.css'

import img from '../../assets/bereza.png'

const Bereza = () => {
  return (
       <div className={`${classes.section} section line-dark}`}>
        <img className={classes.imgMobyle} src={img} alt="main-fon" />
        <div className="container">

          <div className={`${classes.content} content`}>
            <div className={classes.texts}>
              <p className='text-base'>
                Береза дерево более твердое, но коварное. В березе очень сильны внутренние напряжения, могущие привести к растрескиванию. Кроме того березы очень сильно подвержены гниению, в средней полосе России деревья не вырастают больше 20см толщиной. Даже 30-летние деревья имеют гниль в сердцевине и множество гнилостных карманов в толще древесины
              </p>
            </div>

            <img className={classes.img} src={img} alt="main-fon" />
          </div>

        </div>
      </div>
  )
}

export default Bereza;