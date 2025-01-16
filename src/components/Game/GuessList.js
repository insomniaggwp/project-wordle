import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessList({ guess, answer, setWinner, setLosser }) {

  return (
    <div className="guess-results">
      {
        range(0, NUM_OF_GUESSES_ALLOWED).map((_, index) => {
            const check = checkGuess(guess[index], answer);

            if (check) {
              const allCorrect = check.every(item => item.status === "correct");
              if (allCorrect) {
                setWinner(allCorrect);
                return;
              }

              if (guess.length > 5) {
                setLosser(true);
              }
            }
            
            return (
              <p key={index} className="guess">
                <span className={`cell ${check && check[0].status}`}>{guess[index]?.[0]}</span>
                <span className={`cell ${check && check[1].status}`}>{guess[index]?.[1]}</span>
                <span className={`cell ${check && check[2].status}`}>{guess[index]?.[2]}</span>
                <span className={`cell ${check && check[3].status}`}>{guess[index]?.[3]}</span>
                <span className={`cell ${check && check[4].status}`}>{guess[index]?.[4]}</span>
              </p>
            )
          }
        )
      }
    </div>
  )
}

export default GuessList;