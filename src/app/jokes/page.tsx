"use client";

import { useState } from "react";
import CategorySection from "@/utility/components/categorys/section/category-section";
import SubmitButton from "@/utility/components/buttons/submit-button";
import JokeDisplayer from "@/utility/components/joke/joke-displayer";

export default function JokesPage() {
  const [categorys, setCategorys] = useState<string[]>([]);
  const [joke, setJoke] = useState<Joke | null>(null);

  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    try {
      const res = await fetch(
        `/api/jokes/getJoke?categorys=${categorys.join(",")}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const fetchedJoke: Joke = await res.json();
      setJoke(fetchedJoke);
    } catch {}
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10">
        {/* Section to choose categorys and press the request button */}
        <CategorySection categorys={categorys} setCategorys={setCategorys} />
        <div>
          <SubmitButton onClick={handleSubmit}>Entertain Me</SubmitButton>
        </div>
      </div>
      <div className="flex flex-col mt-10 items-center justify-center">
        {/* Section to show joke and fav button if logged in */}
        <JokeDisplayer joke={joke} />
      </div>
    </div>
  );
}
