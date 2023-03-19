import React from "react";
import "./slots.css";
import { Button } from "@mui/material";
import styled from "styled-components";

const IngredientsMap = {
  "-1316": "Avocado",
  "-940": "Tomato",
  "-1128": "Rice",
  "-564": "Meat",
  "-376": "Fish",
  "-752": "Carrot",
  "-188": "Egg",
  0: "Chichen",
  "-1504": "Potato",
};

const ButtonsWrapper = styled.div`
  position: absolute;
  top: 70%;
  left: 10%;
`;

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

function WinningSound() {
  return (
    <audio autoplay="autoplay" className="player" preload="false">
      <source src="https://andyhoffman.codes/random-assets/img/slots/winning_slot.wav" />
    </audio>
  );
}

// function RepeatButton(props) {
//   return (

//   );
// }

export class Slots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
    };
    this.finishHandler = this.finishHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ winner: null });
    this.emptyArray();
    this._child1.forceUpdateHandler();
    this._child2.forceUpdateHandler();
    this._child3.forceUpdateHandler();
  }

  static loser = [
    "Not quite",
    "Stop gambling",
    "Hey, you lost!",
    "Ouch! I felt that",
    "Don't beat yourself up",
    "There goes the college fund",
    "I have a cat. You have a loss",
    "You're awesome at losing",
    "Coding is hard",
    "Don't hate the coder",
  ];

  static matches = [];

  finishHandler(value) {
    Slots.matches.push(value);

    if (Slots.matches.length === 3) {
      const { winner } = this.state;
      const first = Slots.matches[0];
      let results = Slots.matches.every((match) => match === first);
      this.setState({ winner: results });
      this.props.gameFinish(
        Slots.matches.map((e) => IngredientsMap[e.toString()])
      );
    }
  }

  emptyArray() {
    Slots.matches = [];
  }

  render() {
    const { winner } = this.state;
    // const getLoser = () => {
    //   return Slots.loser[Math.floor(Math.random() * Slots.loser.length)];
    // };
    // let repeatButton = null;
    let winningSound = null;

    // if (winner !== null) {
    //   repeatButton = <RepeatButton onClick={() => {}} />;
    // }

    if (winner) {
      winningSound = <WinningSound />;
    }

    return (
      <GameWrapper>
        {/* {winningSound} */}

        <div className={`spinner-container`}>
          <Spinner
            onFinish={this.finishHandler}
            ref={(child) => {
              this._child1 = child;
            }}
            timer="1000"
          />
          <Spinner
            onFinish={this.finishHandler}
            ref={(child) => {
              this._child2 = child;
            }}
            timer="1400"
          />
          <Spinner
            onFinish={this.finishHandler}
            ref={(child) => {
              this._child3 = child;
            }}
            timer="2200"
          />
          <div className="gradient-fade"></div>
        </div>
        <ButtonsWrapper>
          <Button
            variant="contained"
            sx={{
              fontSize: "24px",
              fontFamily: "Open Sans",
              borderRadius: 20,
              backgroundColor: "#6FDB8E",
              width: "146px",
              height: "57px",
            }}
            onClick={this.props.handleGo}
          >
            GO
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              this.handleClick();
              this.props.handleSpin();
            }}
            disabled={this.props.lives === 0}
            sx={{
              left: "10%",
              fontSize: "24px",
              fontFamily: "Open Sans",
              borderRadius: 20,
              backgroundColor: "#B3001B",
              width: "146px",
              height: "57px",
              "&:focus": {
                backgroundColor: "#B3001B",
              },
            }}
          >
            SPIN
          </Button>
        </ButtonsWrapper>
      </GameWrapper>
    );
  }
}

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  forceUpdateHandler() {
    this.reset();
  }

  reset() {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.start = this.setStartPosition();

    this.setState({
      position: this.start,
      timeRemaining: this.props.timer,
    });

    this.timer = setInterval(() => {
      this.tick();
    }, 100);
  }

  state = {
    position: 0,
    lastPosition: null,
  };
  static iconHeight = 188;
  multiplier = Math.floor(Math.random() * (4 - 1) + 1);

  start = this.setStartPosition();
  speed = Spinner.iconHeight * this.multiplier;

  setStartPosition() {
    // return Math.floor(Math.random() * 9) * Spinner.iconHeight * -1;
    return Math.floor(0.2 * 9) * Spinner.iconHeight * -1;
  }

  moveBackground() {
    this.setState({
      position: this.state.position - this.speed,
      timeRemaining: this.state.timeRemaining - 100,
    });
  }

  getSymbolFromPosition() {
    let { position } = this.state;
    const totalSymbols = 9;
    const maxPosition = Spinner.iconHeight * (totalSymbols - 1) * -1;
    let moved = (this.props.timer / 100) * this.multiplier;
    let startPosition = this.start;
    let currentPosition = startPosition;

    for (let i = 0; i < moved; i++) {
      currentPosition -= Spinner.iconHeight;

      if (currentPosition < maxPosition) {
        currentPosition = 0;
      }
    }

    this.props.onFinish(currentPosition);
  }

  tick() {
    if (this.state.timeRemaining <= 0) {
      clearInterval(this.timer);
      this.getSymbolFromPosition();
    } else {
      this.moveBackground();
    }
  }

  componentDidMount() {
    clearInterval(this.timer);

    this.setState({
      position: this.start,
      timeRemaining: this.props.timer,
    });

    this.timer = setInterval(() => {
      // this.tick();
    }, 100);
  }

  render() {
    let { position, current } = this.state;

    return (
      <div
        style={{ backgroundPosition: "0px " + position + "px" }}
        className={`icons`}
      />
    );
  }
}
