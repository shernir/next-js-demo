import React from 'react'
import { Product } from '../../interfaces/interface'
import styles from './ProductCard.module.scss'
import Link from 'next/link';

interface ComponentProps {
  product:Product
}
function ProductCard(props:ComponentProps) {
  return (
    <div className='card' >
    <img src={props.product.thumbnail} className={styles.productImg} alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.product.title}</h5>
    <p className="card-text">{props.product.description}</p>
    <Link href={`/products/${props.product.id}`} className="btn btn-primary">Go Details</Link>
  </div>
</div>
  )
}

export default ProductCard