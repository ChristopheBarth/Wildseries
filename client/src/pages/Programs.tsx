import { useLoaderData } from "react-router-dom";

interface programTypes {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

export default function programs() {
  const programs = useLoaderData() as programTypes[];
  console.info(programs);
  return (
    <>
      <h1>Programs</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <p>{program.synopsis}</p>
            <img src={program.poster} alt={program.title} />
            <p>{program.country}</p>
            <p>{program.year}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
