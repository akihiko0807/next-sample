import { render, screen, RenderResult, fireEvent } from '@testing-library/react';
import { Input } from './index';

// describeで処理をまとめる
describe('Input', () => {
  let renderResult: RenderResult

  // それぞれのテストケース前にコンポーネントを描画し、renderResultにセットする
  beforeEach(() => {
    renderResult = render(<Input id='username' label='Username' />)
  })

  // テストケース実行後に描画していたコンポーネントを開放する
  afterEach(() => {
    renderResult.unmount()
  })

  // 初期描画時にinput要素が空であることをテスト
  it('should be empty when it is initially rendered', () => {
    // labelがUsernameであるコンポーネントに対応するinputの要素を取得する
    const inputElement = screen.getByLabelText('Username') as HTMLInputElement

    // input要素のvalueが空であることをテスト
    expect(inputElement).toHaveValue('')
  })

  // 文字を入力したら、入力した内容が表示されるかをテスト
  it('should display the text that is typed', () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement

    // fireEventを使って、input要素のonChangeイベントを発火する
    fireEvent.change(inputNode, { target: { value: inputText } })

    // input要素のvalueが入力した内容になっていることをテスト
    expect(inputNode).toHaveValue(inputText)
  })

  // ボタンが押されたら、入力テキストがクリアするかチェック
  it('should clear the input text when the button is clicked', () => {
    // テキストを入力する
    const inputText = 'Test Input Text'
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: inputText } })

    // ボタンを取得する
    const buttonNode = screen.getByRole('button', { name: 'Reset' }) as HTMLButtonElement

    // ボタンをクリックする
    fireEvent.click(buttonNode)

    // input要素のvalueが空になっていることをテスト
    expect(inputNode).toHaveValue('')
  })
})
