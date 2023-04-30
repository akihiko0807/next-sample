import { NextPage } from "next";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string;
  children: React.ReactNode;
};

// Next.jsのリンクにスタイルを適用するためのコンポーネント
// このコンポーネントをstyled-componentsで使用すると、
// 定義したスタイルに対応するclassNameがpropsとして渡される
// このclassNameをa要素に渡す
const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props;
  return (
    <Link {...rest}>
      <a className={className}>{children}</a>
    </Link>
  );
};

const StyledLink = styled(BaseLink)`
  color: #1e90ff;
  font-size: 2em;
`

const Page: NextPage = () => {
  return (
    <div>
      {/* 青色のリンクを表示する */}
      <StyledLink href="/">
        Go to index
      </StyledLink>
    </div>
  )
}

export default Page
