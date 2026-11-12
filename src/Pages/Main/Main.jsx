import Materials from '../../Section/Materials/Materials';
import AnyMaterials from '../../Section/AnyMaterials/AnyMaterials';
import ReleasProjects from '../../Section/ReleasProjects/ReleasProjects';
import classes from './Main.module.css'
import Bereza from '../../Section/Bereza/Bereza';
import SkafOrPolka from '../../Section/SkafOrPolka/SkafOrPolka';
import NastenPolka from '../../Section/NastenPolka/NastenPolka';
// import img from '../../assets/main-fon.png'
import img from '../../assets/ReleasProjects/1.png'
import Btn from '../../Components/UI/Btn/Btn';
// import img from '../../assets/catalog/tovar_7/2.png'

const Main = () => {
  return (
    <div>
      <div className={`${classes.section} section line-dark`}>
        <img className={classes.imgMobyle} src={img} alt="main-fon" />
        <div className='container'>

          <div className={`${classes.content} content`}>
            <div className={classes.texts}>
              <h1 className='h1'>Nazart</h1>

              <div className={classes.headerTitle}>  
                <h2 className='h2'>мебель из дерева на заказ</h2>
                <p className='text-base'>ателье деревянной мебели</p>
              </div>

              <Btn isColor={'dark'} link={'/catalog'} style={{marginTop: '50px'}}>каталог</Btn>
            </div>

            <img className={classes.img} src={img} alt="main-fon" />
          </div>

        </div>
      </div>

      <ReleasProjects />

      <Materials />

      <AnyMaterials />

      <Bereza />
      
      <NastenPolka />

      <SkafOrPolka />
    </div>
  )
}

export default Main;