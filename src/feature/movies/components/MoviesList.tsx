import ResultsHeader from './ResultsHeader.tsx';
import MoviesGrid from './MoviesGrid.tsx';
import { MoviesResponse } from '../../../shared/api/interfaces.ts';
import SkeletonGrid from './SkeletonGrid.tsx';
interface Props {
  data: MoviesResponse | null;
  textValue: string;
  isLoading: boolean;
}
const MoviesList = ({ data, textValue, isLoading }: Props) => {
  return (
    <div className="box">
      <ResultsHeader amount={data?.total_results} textValue={textValue} isLoading={isLoading} />
      {isLoading ? <SkeletonGrid amount={6} /> : <MoviesGrid data={data} />}
    </div>
  );
};

export default MoviesList;
