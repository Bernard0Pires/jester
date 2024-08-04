import SubmitButton from "../buttons/submit-button";

export default function JokeDisplayer({ joke }: JokeDisplayer) {
  async function addFavorite() {
    try {
      const res = await fetch(`/api/jokes/FavouriteJoke`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ joke }),
      });
    } catch {}
  }

  return (
    <div>
      {joke ? (
        <div className="flex flex-col items-center justify-center rounded-xl mt-10 p-10 bg-red-200">
          <p>{joke.setup || joke.joke}</p>
          <p>{joke.delivery}</p>
          <SubmitButton onClick={addFavorite}>Add To Favorites</SubmitButton>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
