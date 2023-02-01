import Card1 from "../resources/card1.png";
import Card2 from "../resources/card2.png";
import Card3 from "../resources/card3.png";
import Card4 from "../resources/card4.png";
import Card5 from "../resources/card5.png";
import frogHead from "../resources/frog-head.png";
import styled from "styled-components";

// component items..
function Preloader() {
  return (
    <PreloaderWrapper>
      <div className="tweet-cards">
        <div className="card-wrapper">
          <img src={Card1} alt="img1" />
        </div>
        <div className="card-wrapper">
          <img src={Card2} alt="img2" />
        </div>{" "}
        <div className="card-wrapper">
          <img src={Card3} alt="img3" />
        </div>{" "}
        <div className="card-wrapper">
          <img src={Card4} alt="img4" />
        </div>{" "}
        <div className="card-wrapper">
          <img src={Card5} alt="img5" />
        </div>
      </div>
      <div className="loading-info">
        <img src={frogHead} alt="comrade head" />
        <h2>Shege loading please wait....</h2>
      </div>
    </PreloaderWrapper>
  );
}

// styles

const PreloaderWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  flex-direction: column;
  .tweet-cards {
    width: 40%;
    align-self: center;
    justify-self: center;
    .card-wrapper {
      width: 510px;
      height: 210px;
      border: 1px solid black;
      position: fixed;
      margin-top: 200px;
      :nth-child(5) {
        margin-left: 20px;
        top: 20px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .loading-info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 450px;
    img {
      width: 46px;
    }
    h2 {
      font-size: 16px;
      font-weight: normal;
      margin-left: 10px;
    }
  }
`;

export default Preloader;