import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😙": "kiss",
  "🎀": "ribbon",
  "👇": "direction",
  "🤜": "right fist",
  "🍠": "rutabaga",
  "❌": "ban",
  "💁": "sassiness",
  "😪": "crying face",
  "😓": "crying face",
  "👹": "dead monster",
  "😡": "angry face",
  "😑": "Negative Face",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat Face",
  "🐈": "Cat"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userinput = event.target.value;
    var meaning = emojiDictionary[userinput];

    if (meaning === undefined)
      meaning = "Sorry! currently we dont have this emoji";
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Know Your Emoji </h1>
      <img
        className="emoji-img"
        src="https://images.unsplash.com/photo-1624887009213-040347b804c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1387&q=80"
      ></img>

      <h2 className="emojiInp">Enter Your Emoji</h2>
      <input className="input" onChange={emojiInputHandler}></input>

      <h2> {meaning} </h2>

      <h3> Emojis We Have </h3>
      {emojis.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
