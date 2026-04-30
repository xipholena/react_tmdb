import * as React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Movie } from '../../../shared/api/interfaces.ts';
import style from '../styles/CardDialog.module.css';

interface Props {
  open: boolean;
  setOpen: (arg0: boolean) => void;
  scroll: DialogProps['scroll'];
  movie: Movie;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const CardDialog = ({ open, setOpen, scroll, movie }: Props) => {
  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <div className={style.movieCard}>
          {movie.backdrop_path && (
            <div
              className={style.movieCardBackdrop}
              style={{ backgroundImage: `url(${IMAGE_BASE_URL}${movie.backdrop_path})` }}
              aria-hidden="true"
            />
          )}
          <CloseIcon
            className={style.movieCardClose}
            onClick={handleClose}
            aria-label="close dialog"
          />

          <div className={style.movieCardContent}>
            <div className={style.movieCardPosterWrap}>
              {movie.poster_path ? (
                <img
                  className={style.movieCardPoster}
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title || movie.original_title || 'Untitled'}
                />
              ) : (
                <div className={style.movieCardPosterPlaceholder}>No image</div>
              )}
            </div>
            <div className={style.movieCardInfo}>
              <DialogTitle
                sx={{
                  margin: 0,
                  padding: 0,
                  fontSize: 'clamp(1.4rem, 2.1vw, 2rem)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: '0.2px',
                  color: '#fff',
                }}
                id="scroll-dialog-title"
              >
                {movie.title || movie.original_title || 'Untitled'}
              </DialogTitle>
              <DialogContent dividers={scroll === 'paper'}>
                <div className={style.movieCardBadges}>
                  <span className={style.movieBadge}>
                    ⭐ {Number.isFinite(movie.vote_average) ? movie.vote_average.toFixed(1) : 'N/A'}
                  </span>
                  <span className={style.movieBadge}>🗳 {movie.vote_count}</span>
                  <span className={style.movieBadge}>📅 {movie.release_date || 'Unknown'}</span>
                  <span className={style.movieBadge}>
                    🌐 {movie.original_language ? movie.original_language.toUpperCase() : 'N/A'}
                  </span>
                  <span className={style.movieBadge}>🔥 {movie.popularity ?? 'N/A'}</span>
                  {movie.video && (
                    <span className={`${style.movieBadge} ${style.movieBadgeAccent}`}>Video</span>
                  )}
                  {movie.adult && (
                    <span className={`${style.movieBadge} ${style.movieBadgeDanger}`}>18+</span>
                  )}
                  {movie.softcore && (
                    <span className={`${style.movieBadge} ${style.movieBadgeDanger}`}>
                      Softcore
                    </span>
                  )}
                </div>
                <p className={style.movieCardOverview}>
                  {movie.overview || 'No description available for this movie.'}
                </p>
              </DialogContent>
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
};
export default CardDialog;
