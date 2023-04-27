import { NextPage } from "next";
import Image from "next/image";

import KoboreIkuraImage from '../public/food_sushi_kobore_ikura_gunkan.png'

const hokkigaiImageUrl = 'https://1.bp.blogspot.com/-qnR3CbiKv9Q/Xsdr4rRhzII/AAAAAAABZEA/llbdhEpWUnQ7nxHd3LXLJfI_HctC-On_QCNcBGAsYHQ/s400/sushi_kai_hokkigai.png'

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imgタグで表示した場合</p>
      {/* 通常のimgタグを使用して画像を表示 */}
      {/* public/の指定が不要となる。 */}
      <img src="food_sushi_kobore_ikura_gunkan.png" alt="こぼれいくら"/>
      {/* Imageコンポーネントを使用して表示 */}
      <Image src={KoboreIkuraImage} alt="こぼれいくら"/>
      <Image src={hokkigaiImageUrl} alt="北寄貝" loader={({ src }) => src} width={400} height={400}/>
      <p>Imageで表示した場合は事前に描画エリアが確保されます。</p>
    </div>
  )
}

export default ImageSample
