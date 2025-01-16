
function WinnerBanner({ tryIn }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in 
        <strong> {tryIn} guesses</strong>.
      </p>
    </div>
  )
}

export default WinnerBanner;
