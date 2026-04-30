import { Genre } from '../../../shared/api/interfaces.ts';
import useGetGenres from '../hooks/useGetGenres.ts';
import Spinner from './Spinner.tsx';

interface Props {
  ids?: number[] | null;
  render?: (genres: Genre[]) => React.ReactNode;
}

const Genres = ({ ids, render }: Props) => {
  const { genres, isLoading } = useGetGenres({ ids });

  if (isLoading) return <Spinner />;

  if (render) return render(genres);

  return null;
};

export default Genres;
