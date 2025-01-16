import React from "react";

function InputWord({ onSubmit }) {
  const [ word, setWord ] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (word.trim() && onSubmit) {
      onSubmit(word); // Send the state to the parent component
    }
    setWord(''); // Optionally clear the input field after submission
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        maxLength={5}
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
    </form>
  )
}

export default InputWord;