import classes from './Catalog.module.css'
import Btn from '../../Components/UI/Btn/Btn'

import { products, formatPrice } from '../../data/catalog'

const Catalog = () => {
  return (
    <div>
      <div className='section line-dark'>
        <div className='container'>

          <div className='content'>
            <ul className={classes.list}>
              {products.map((item) => (
                <li className={classes.item}  key={item.id}>
                  <div className={classes.imgWrap}>
                    <img
                      className={classes.img}
                      src={item.images[0]}
                      alt={item.name}
                    />
                  </div>

                  <div className={classes.itemFooter}>
                    <h3 className='text-sm'>{item.name}</h3>
                    <Btn isColor={'navbar'} link={`/catalog/${item.id}`}>
                      {formatPrice(item.price)}
                    </Btn>
                  </div>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Catalog;