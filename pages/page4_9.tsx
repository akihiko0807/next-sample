import { NextPage } from "next";
import styled from "styled-components";

// 青いボールド文字を表示するコンポーネント
const Text = styled.p`
  color: blue;
  font-weight: bold;
`

// Textを継承し、ボーダーをスタイルを加えたコンポーネント
const BorderedText = styled(Text)`
  padding: 8px 16px;
  border: 3px solid blue;
  border-radius: 8px;
`

const Page: NextPage = () => {
  return (
    <div>
      <Text>Hello</Text>
      <BorderedText>World</BorderedText>
    </div>
  )
}

export default Page
