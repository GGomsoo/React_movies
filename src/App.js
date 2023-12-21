import { BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* react-router-dom 새로운 버전부터 현재와 같이 사용해야함. */}
        {/* 강의의 Switch 대신 Routes 사용 */}
        {/* Route 내 element에 Component 작성 */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

// 내용들 전부 src/routes/Home.js 로 옮겨갔다.
// App6.js 는 이제 새로운 component를 render하게 될 예정