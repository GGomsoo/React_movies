import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Detail() {
  // React Router에서 제공하는 함수
  // id를 알아올 수 있다.
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState([])
  const { id } = useParams()

  // async는 JS에서 비동기 작업을 수행하는 함수를 선언할 때 사용하는 키워드
  // 함수 내에서 await 키워드를 사용하여 비동기 작업을 처리할 수 있다.
  
  // async, await는 비동기 코드를 동기식처럼 보이도록 작성이 가능
  // 그로인해 가독성이 높아지고 에러 처리가 간편해짐.
  const getMovie = async () => {
    const json = await (
      // fetch를 통해 영화 정보 API를 호출
      // 해당 응답을 JSON 형태로 파싱(pathing)
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()

    // json.data.movie의 data를 setMovie를 통해 state로 업데이트 한다.
    setMovie(json.data.movie)
    console.log(json.data.movie)
    setLoading(false)
  }
  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div>
      <h1>상세정보</h1>
      {loading ? (<strong>로딩중...</strong>)
        : (
          <div>
            <h2>제목 : {movie.title}</h2>
            <img src={movie.large_cover_image} />
            <h3>평점 : {movie.rating}</h3>
            <h3>
              장르
              <ul>
                {movie.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </h3>
          </div>
        )
      }
    </div>
  )
}

export default Detail