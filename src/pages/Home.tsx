import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Api from "../service/Api";

type Results = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  }
  image: string;
};

const Home = () => {
  const [characters, setCharacters] = useState<Results[]>([]);

  useEffect(() => {
    loading();
  }, []);

  const loading = async () => {
    const json = await Api.getAll();
    console.log(json);
    setCharacters(json.results);
  };

  return (
    <div className="flex justify-center items-center flex-wrap gap-3.5 py-5 px-5">
      {characters.map((character, index) => (
        <div className="flex border-2 border-solid border-gray-200 rounded-lg w-80 flex flex-col bg-stone-400 transition ease-in-out delay-150 hover:-translate-y-5" key={index}>
            <span className="text-center italic text-zinc-50 text-lg"># {character.id}</span>
            <p className="text-center font-bold text-white italic text-2xl cursor-default pb-5">{character.name}</p>
            <img className="scale-95" src={character.image} alt={`Foto de ${character.name}`} />
            <p>Status: {character.status}</p>
            <p>Tipo: {character.type}</p>
            <p>Gênero: {character.gender}</p>
            <span>Origens</span>
            <p>{character.origin.name}</p>
        </div>
      ))}
      <Link to={''}>
        <button className="pt-8">Proxima página</button>
      </Link>
    </div>
  );
};

export default Home;
