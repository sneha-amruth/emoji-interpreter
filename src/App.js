import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😵": "dizzy face",
  "🥱": "yawning",
  "😒": "unamused face",
  "🍔": "food",
  "❤️": "love",
  "😂": "laughing",
  "🧞": "genie",
  "🧟": "zombie",
  "💃": "dancing woman"
};

const emojis = Object.keys(emojiDictionary); /** array of keys */

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here");

  function inputChangeHandler(event) {
    var inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("Oops, we don't have this in our database");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }
  return (
    <div className="App">
      <h1>inside outtt</h1>
      <input onChange={inputChangeHandler} value={emoji} />
      <h2>{emoji}</h2>
      <h3>{meaning}</h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
