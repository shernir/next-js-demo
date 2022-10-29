
import React, {useState} from 'react'
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout'
import _ from 'lodash'
import styles from '../../styles/FirstProduct.module.css'
import { Product } from '../../interfaces/interface';
import ProductCard from '../../components/ProductCard/ProductCard';

function FirstProduct(props:{product:Product}) {

  return (
   <Layout>
   <Head>
    <title>{props.product.title}</title>
   </Head>
  
   <ProductCard product={props.product} />
   
   </Layout>
  )
}

export default FirstProduct
export async function getStaticPaths() {
  const data = await fetch('https://dummyjson.com/products').then(res => res.json())
  const paths = data.products.map((a:Product) =>  ({ params: { id: a.id.toString() } }));
  console.log(paths);
  
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({params}:any) {
  
  // Get external data from the file system, API, DB, etc.
  const data = await fetch('https://dummyjson.com/products/'+params.id).then(res => res.json())
  // console.log(data);
  
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      product:data
    }
  }
}