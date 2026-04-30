import * as React from 'react';

interface Params {
  open?: boolean;
}
const useCardDialog = ({ open }: Params) => {
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
};

export default useCardDialog;
