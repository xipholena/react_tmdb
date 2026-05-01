import { useEffect, useRef } from 'react';

type EventType = MouseEvent | TouchEvent;

interface Params {
  handler: (event: EventType) => void;
}
export function useClickOutside({ handler }: Params) {
  const ref = useRef<HTMLDivElement | null>(null);

  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener = (event: EventType) => {
      const el = ref.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      savedHandler.current(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref]);

  return { ref };
}

export default useClickOutside;
