type Joke = {
    error: boolean,
    category: string,
    type: string,
    setup: string,
    delivery: string,
    joke: string,
    flags: {
        nsfw: boolean,
        religious: boolean,
        political: boolean,
        racist: boolean,
        sexist: boolean,
        explicit: boolean
    },
    safe: boolean,
    id: number,
    lang: string
}

type CategoryProps = {
    categorys: string[];
    setCategorys: React.Dispatch<React.SetStateAction<string[]>>;
}

type SubmitButton = {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: React.ReactNode;
}

type JokeDisplayer = {
    joke : Joke | null;
}