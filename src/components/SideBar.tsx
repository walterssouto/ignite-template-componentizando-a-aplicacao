import { useEffect, useState } from 'react';
import { Button } from './../components/Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
const [genres, setGenres] = useState<GenreResponseProps[]>([]);
const [selectedGenreId, setSelectedGenreId] = useState(1);


export function SideBar() {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return(
  <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>);
}