import { Genre } from '../../../shared/api/interfaces.ts';
import useGetGenres from '../hooks/useGetGenres.ts';

interface Props {
  ids?: number[] | null;
  render?: (genres: Genre[]) => React.ReactNode;
}

const Genres = ({ ids, render }: Props) => {
  const { genres } = useGetGenres({ ids });

  if (render) return render(genres);

  return null;
};

export default Genres;
