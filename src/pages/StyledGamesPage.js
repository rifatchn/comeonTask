import styled from "styled-components";
export const GamePageStyled = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex: 1;

  .modal-container {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background-color: rgba(33, 33, 33, 0.8);
  }
  .inner-modal {
    position: relative;
    width: 640px;
    height: 480px;
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left-container {
    flex-direction: column;
    display: flex;
    flex: 3;
    height: 100vh;

    .user-info-container {
      flex-direction: column;
      display: flex;
      padding-left: 10px;
      min-height: 15%;

      .user-info-body {
        flex-direction: row;
        display: flex;
        padding: 5px;
        .user-avatar {
          height: 60px;
          width: 60px;
          border-radius: 30px;
        }
        .user-info-area {
          display: flex;
          flex-direction: column;
          height: 60px;
          justify-content: space-evenly;
          padding-left: 10px;
        }

        .user-name-area {
          font-size: 18px;
          font-weight: bold;
          font-family: "Poppins", sans-serif;
        }
      }
      .sing-out-button {
        height: 40;
        width: 80px;
        margin-left: 10px;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left-arrow-icon {
          height: 20px;
        }
      }
    }

    .game-list-container {
      padding-left: 10px;
      padding-right: 20px;

      h3 {
        height: 100%;
      }

      .divider {
        height: 1px;
        background-color: #000000;
        width: 100%;
        margin-left: 10px;
      }

      .game-information-container {
        .game-information-body {
          margin-block: 10px;

          flex-direction: row;
          display: flex;
          flex: 1;
          padding-block: 10px;
          .game-description-area {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            flex: 1;
            .game-name {
              height: 10%;
              padding-inline: 10px;
            }
            .game-description {
              height: 80%;
              padding-inline: 10px;
            }
            .game-play-button {
              width: 70px;
              align-self: flex-end;
              margin-right: 10px;
              display: flex;
              justify-content: space-between;
              align-items: center;

              h3 {
                font-weight: bold;
              }
              .right-arrow-icon {
                height: 20px;
              }
            }
          }
        }
      }
    }
  }
  .right-container {
    flex: 1;
    height: 100%;
    .game-search-section {
      min-height: 15%;

      input {
        height: 25px;
        margin-top: 20px;
      }
    }
    h3 {
      font-weight: bold;
    }

    .divider {
      height: 1px;
      background-color: #000000;
      width: 90%;
      margin-block: 10px;
    }
    .game-catagories-container {
      flex: 1;
      flex-direction: column;
      display: flex;
      justify-content: center;

      .catagory {
        height: 40px;
        margin-block: 4px;
        display: flex;
        align-items: center;
        font-weight: bold;
      }
    }
  }

  .gamelist {
    height: 100vh;
    background-color: #23a455;
  }
`;
