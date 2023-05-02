import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { StyledButton, StyledButtonProps } from "../components/StyledButton";
import { action } from '@storybook/addon-actions'
import MDXDocument from './StyledButton.mdx'
import { linkTo } from '@storybook/addon-links'

// ファイル内のStoryの設定(メタデータオブジェクト)
export default {
  // グループ名
  title: 'StyledButton',
  // 使用するコンポーネント
  component: StyledButton,
  // onClickが呼ばれた時にclickedというアクションを出力する
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'transparent'],
    },
    // propsに渡すchildrenをStorybookから変更できるように追加
    children: {
      // テキストボックスで入力できるように指定
      control: { type: 'text' },
    }
  },
  parameters: {
    docs: {
      // ドキュメント用のmdxコンポーネントを指定
      page: MDXDocument,
    }
  }
} as Meta<typeof StyledButton>;

// incrementという名前でactionを出力するための関数を作る
const incrementAction = action('increment')

// テンプレートコンポーネントを実装
const Template: StoryFn<typeof StyledButton> = (props) => {
  // プロパティをコンポーネントに展開する
  return <StyledButton {...props} />
}

// bindを呼び出しStoryを作成
export const TemplateTest = Template.bind({})

// デフォルトのpropsを設定する
TemplateTest.args = {
  variant: 'primary',
  children: 'Primary',
}

export const Primary: StoryFn<StyledButtonProps> = (props) => {
  const [count, setCount] = useState(0)
  const onClick = (e: React.MouseEvent) => {
    // 現在のカウントを渡して、actionを呼び出す
    incrementAction(e, count)
    setCount((c) => c + 1)
  }
  return (
    <StyledButton {...props} variant="primary" onClick={onClick}>
      Primary
    </ StyledButton>
  )
}

export const Success: StoryFn<StyledButtonProps> = (props) => {
  return (
    <StyledButton {...props} variant="success" onClick={linkTo('StyledButton', 'Transparent')}>
      Success
    </ StyledButton>
  )
}

export const Transparent: StoryFn<StyledButtonProps> = (props) => {
  return (
    <StyledButton {...props} variant="transparent" onClick={linkTo('StyledButton', 'Primary')}>
      Transparent
    </ StyledButton>
  )
}
