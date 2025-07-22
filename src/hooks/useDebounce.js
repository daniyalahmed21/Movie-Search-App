import { useRef } from "react";

/**
 * Returns a debounced version of a function.
 * The function will only be called after `delay` ms have passed
 * since the last time the debounced function was invoked.
 */
function useDebounce(callback, delay = 1000) {
  const timerRef = useRef(null);

  const debouncedFunction = (...args) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedFunction;
}

export default useDebounce;
