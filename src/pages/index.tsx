import Head from "next/head";
import Image from "next/image";
``
export default function Home({data}:any) {
  
  return (
    <div className="listItem">
      <h1>Data Fetching Using Static Site Generation</h1>

      <ul>
        {
          data?.map((item:any, index:number)=>(
            <li key={index}>Product Name: {item.product}</li>
          ))
        }
      </ul>
      
    </div>
  );
}

export const getStaticProps=async ()=>{

  const data=await fetch('https://660d0e4e3a0766e85dbf6ade.mockapi.io/api/testitem/products');
  const posts= await data.json()

  return {
    props:{
     data: posts
    },
    revalidate:1
  }
}