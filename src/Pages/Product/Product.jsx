import { useParams } from 'react-router-dom'
import { products, formatPrice } from '../../data/catalog'
import classes from './Product.module.css'
import Slider from '../../Components/Slider/Slider'

const Product = () => {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return <h2>Товар не найден</h2>
  }

  return (
    <div className='section line-dark'>
      <div className='container'>
        <div className={`${classes.content} content`}>
          <Slider className={classes.slider} images={product.images} />

          <div className={classes.body}>
            <h2 className='h2'>{product.name}</h2>

            <div className={classes.texts}>
              <div className={classes.description}>
                {product.description.map(item => (
                  <p className='text-base'>{item}</p>
                ))}
              </div>

              <div className={classes.details}>
                {product.details.map(item => (
                  <p className='text-sm'>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={classes.footer}>
          <p className='text-base bold'>Превратите ваш дом в уютное пространство с уникальной мебелью из массива</p>
          <p className='text-sm'>мы находимся в Москве. Вы можете самостоятельно забрать покупку из точки самовывоза или заказать доставку курьером по Москве и Московской области. Также доступна доставка почтой по всей России</p> 
        </div>
      </div>
    </div>
  )
}

export default Product
