import { useState, useEffect } from "react";

function Sayhello () {
  // 内部で状態を保つためuseStateを使う
  const [data, setData] = useState({ name: '' })
  // 外部のAPIにリクエストするのは副作用なのでuseEffect内で処理
  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then((profile) => setData(profile))
  }, [])

  return <div>hello {data.name}</div>
}

export default Sayhello
