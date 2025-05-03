import HomeBanner from "@/pageslider/HomeBanner";
import HomeImage from "@/pageslider/HomeImage";
import WhatOur from "@/homecontent/WhatOur";
import Image from "next/image";
import NewsLetter from "@/homecontent/NewsLetter";


// [git add netlify.toml
//   git commit -m "Add Netlify config for Next.js"
//   git push]
export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeImage />
      <WhatOur />
      <NewsLetter />
    </>
  );
}
