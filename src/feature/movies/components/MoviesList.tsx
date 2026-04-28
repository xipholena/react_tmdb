import ResultsHeader from './ResultsHeader.tsx';
import MoviesGrid from './MoviesGrid.tsx';
import { MoviesResponse } from '../../../shared/api/interfaces.ts';
interface Props {
  data: MoviesResponse | null;
  textValue: string;
}
const MoviesList = ({ data, textValue }: Props) => {
  return (
    <div className="box">
      <ResultsHeader amount={data?.total_results} textValue={textValue} />
      <MoviesGrid data={data} />
    </div>
  );
};

export default MoviesList;
