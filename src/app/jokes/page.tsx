"use client";

import { useState } from "react";

export default async function jokesPage() {
  let [categorys, setCategorys] = useState("");

  async function handleSubmit() {
    const res = await fetch(`/api/jokes/getJoke?categorys=${categorys}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const joke: Joke = await res.json();
    console.log(joke);
  }

  return (
    <div>
      jokes page
      <button onClick={() => handleSubmit()}>Teste</button>
    </div>
  );
}
