import { useEffect, useRef } from 'react';

interface Params {
  open?: boolean;
}

const useCardDialog = ({ open }: Params) => {
  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
};

export default useCardDialog;
