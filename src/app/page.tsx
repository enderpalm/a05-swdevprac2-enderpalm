import Image from "next/image";
import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner />
      <section className='m-1 flex flex-wrap gap-2'>
        <Card venueName='The Bloom Pavilion' imgSrc="/img/bloom.jpg"/>
        <Card venueName='Spark Space' imgSrc="/img/sparkspace.jpg"/>
        <Card venueName='The Grand Table' imgSrc="/img/grandtable.jpg"/>
      </section>
    </main>
  );
}
 