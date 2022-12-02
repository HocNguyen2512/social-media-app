import Stories from "../../Components/Stories/Stories"
import Posts from "../../Components/Posts/Posts"
import Share from "../../Components/Share/Share"
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home