import { SECOND_BEFORE_RESET } from "@/constants";
import { useRef } from "react";

export default function useReset(delay: number = SECOND_BEFORE_RESET) {
  const timeoutRef = useRef<Map<string, NodeJS.Timeout>>(new Map());
  console.log(timeoutRef.current);

  function setTimeoutRef(key: string, callback: () => void) {
    timeoutRef.current.set(
      key,
      setTimeout(() => {
        callback();
        timeoutRef.current.delete(key);
      }, delay)
    );
  }

  function clearTimeoutRef(key: string) {
    const timeout = timeoutRef.current.get(key);
    if (timeout) {
      clearTimeout(timeout);
      timeoutRef.current.delete(key);
    }
  }

  return { setTimeoutRef, clearTimeoutRef };
}
