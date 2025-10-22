import { useEffect, useRef, useState } from "react";

export default function useAutosave(value, callback, wait = 800) {
  const timer = useRef(null);
  const last = useRef(null);
  const [status, setStatus] = useState("saved");

  useEffect(() => {
    setStatus("saving");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      try {
        callback(value);
        setStatus("saved");
      } catch (e) {
        setStatus("error");
      }
    }, wait);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [value, callback, wait]);

  return { status };
}
