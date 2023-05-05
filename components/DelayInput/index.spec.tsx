import { render, screen, RenderResult, fireEvent, act } from '@testing-library/react';
import { DelayInput } from './index';

// DelayInputコンポーネントに関するテスト
describe('DelayInput', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {
    // モック関数を作成する
    handleChange = jest.fn()

    // モック関数をDelayButtonに渡して描画
    renderResult = render(<DelayInput onChange={handleChange} />)

    // タイマーをjestのものに差し替える
    jest.useFakeTimers()
  })

  afterEach(() => {
    renderResult.unmount()

    // テスト中に使用したjestのタイマーをリセットする
    jest.runOnlyPendingTimers() // 現在pending中のタイマーのみ実行する

    // タイマーを元に戻す
    jest.useRealTimers()
  })

  // span要素のテキストが空であることをテスト
  it('should be empty when it is initially rendered', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    // 初期表示は空であることをテスト
    expect(spanNode).toHaveTextContent('入力したテキスト:')
  })

  // 入力直後はspan要素が「入力中...」と表示するかテスト
  it('should display "入力中..." when the input is changed', () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    // inputのonChangeイベントを発火する
    fireEvent.change(inputNode, { target: { value: inputText } })

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    // 入力中と表示するか確認
    expect(spanNode).toHaveTextContent('入力中...')
  })

  // 入力して1秒後にテキストが表示されるかテスト
  it('should display the text after 1 second', async () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    // inputのonChangeイベントを発火する
    fireEvent.change(inputNode, { target: { value: inputText } })

    // act関数内で実行することにより、タイマーのコールバック中で起きる状態変更が反映されることを保証する
    await act(() => {
      jest.runAllTimers() // 全てのタイマーを実行する
    })

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    // 入力したテキストが表示されるか確認
    expect(spanNode).toHaveTextContent(`入力したテキスト: ${inputText}`)
  })

  // 入力して1秒後にonChangeが呼ばれるかテスト
  it('should call onChange after 1 second', async () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    // inputのonChangeイベントを発火する
    fireEvent.change(inputNode, { target: { value: inputText } })

    // タイマーの実行
    await act(() => {
      jest.runAllTimers() // 全てのタイマーを実行する
    })

    // モック関数を渡し、呼ばれたかを確認する
    expect(handleChange).toHaveBeenCalled()
  })
})
