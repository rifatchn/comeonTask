import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { game } from "./lib/comeon.game-1.0.min";
import { Dictionary } from "../component/Dictionary";
import { GamePageStyled } from "./StyledGamesPage";

export const GamePages = () => {
  const [gameList, setGameList] = useState([]);
  const [catagoriesList, setCatagoryList] = useState([]);
  const [userInfo, setUserPersonalInfo] = useState();
  const [registeredUser, setRegisteredUserFromStorage] = useState();
  const [modalIsOpen, setModalVisibility] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedCatagory, setSelectedCatagory] = useState("");

  let navigation = useNavigate();

  const getGamesList = useCallback(() => {
    fetch("http://localhost:3001/games", { method: "get" })
      .then((response) => response.json())
      .then((res) => {
        console.log("asdafda", res);

        setGameList(res);
      })
      .catch((err) => console.log(err));
  }, [setGameList]);

  const getCatagoryList = () => {
    fetch("http://localhost:3001/categories", { method: "get" })
      .then((response) => response.json())
      .then((res) => {
        setCatagoryList(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGamesList();
    getCatagoryList();
    setRegisteredUserFromStorage(localStorage.getItem("user"));
    setUserPersonalInfo(JSON.parse(localStorage.getItem("player")));
  }, [getGamesList]);

  const handleLogout = () => {
    fetch("http://localhost:3001/logout", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: JSON.parse(registeredUser),
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "success") {
          localStorage.removeItem("user");
          localStorage.removeItem("player");
          navigation("/login");
        } else {
        }
      })
      .catch((err) => console.log(err));
  };
  const launchGame = (code) => {
    setTimeout(() => {
      window.comeon.game.launch(code);
    }, 1000);
  };

  const renderUserInfoArea = () => {
    return (
      <div className="user-info-container">
        <div className="user-info-body">
          <img
            className="user-avatar"
            src={require("./" + userInfo.avatar)}
            alt="avatar"
          ></img>
          <div className="user-info-area">
            <span className="user-name-area">{userInfo.name}</span>
            <div className="user-last-event-area">{userInfo.event}</div>
          </div>
        </div>
        <button className="sing-out-button" onClick={handleLogout}>
          <img
            className="left-arrow-icon"
            src={require("./images/left-arrow.png")}
            alt="left-arrow"
          ></img>
          <div>{Dictionary.logout}</div>
        </button>
      </div>
    );
  };

  const renderGameListArea = () => {
    let tempArray = gameList;
    if (selectedCatagory) {
      tempArray = gameList.filter((item) =>
        item.categoryIds.includes(selectedCatagory)
      );
    }

    return (
      <div className="game-list-container">
        <h3>{Dictionary.games}</h3>
        <div className="divider"></div>
        {tempArray
          .filter((post) => {
            if (query === "") {
              return post;
            } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          })
          .map((game, index) => {
            return (
              <div className="game-information-container" key={index}>
                <div className="game-information-body">
                  <img
                    className="game-avatar"
                    alt="game-icon"
                    src={require("./" + game.icon)}
                  ></img>
                  <div className="game-description-area">
                    <h3 className="game-name">{game.name}</h3>
                    <span className="game-description">{game.description}</span>
                    <button
                      className="game-play-button"
                      onClick={() => {
                        setModalVisibility(true);
                        launchGame(game.code);
                      }}
                    >
                      {Dictionary.play}
                      <img
                        className="right-arrow-icon"
                        src={require("./images/right-arrow.png")}
                        alt="right-arrow"
                      ></img>
                    </button>
                  </div>
                </div>
                {tempArray.length !== index + 1 && (
                  <div className="divider"></div>
                )}
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <GamePageStyled>
      {modalIsOpen && (
        <div
          className="modal-container flex"
          onClick={() => setModalVisibility(false)}
        >
          <div
            className="inner-modal"
            id="game-launch"
            onClick={(e) => {
              e && e.stopPropagation();
            }}
          ></div>
        </div>
      )}

      <div className="left-container">
        {userInfo && renderUserInfoArea()}
        <div className="game-list-container ">{renderGameListArea()}</div>
      </div>
      <div className="right-container">
        <div className="game-search-section ">
          <input
            placeholder="Search Game"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <h3>{Dictionary.categories}</h3>
        <div className="divider"></div>
        <div className="game-catagories-container">
          {catagoriesList &&
            catagoriesList.map((catagory, index) => {
              return (
                <span
                  className="catagory"
                  onClick={() => setSelectedCatagory(catagory.id)}
                  key={index}
                >
                  {catagory.name}
                </span>
              );
            })}
        </div>
      </div>
    </GamePageStyled>
  );
};
export default GamePages;
