import { NextPage } from "next";
import styled from "styled-components";

// 青色のテキストを表示するコンポーネント
const Text = styled.p`
  color: #1e90ff;
  font-size: 2em;
`

const Page: NextPage = () => {
  return (
    <div>
      {/* 青色のテキストを表示 */}
      <Text>World</Text>
      {/* 青色のリンクを表示 */}
      <Text as="a" href="/">
        Go to index
      </Text>
    </div>
  )
}

export default Page
