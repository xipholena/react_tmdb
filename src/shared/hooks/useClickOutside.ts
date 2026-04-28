import { useEffect, useRef } from 'react';

type EventType = MouseEvent | TouchEvent;

export function useClickOutside(
  //ref: React.RefObject<T>,
  handler: (event: EventType) => void
) {
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
