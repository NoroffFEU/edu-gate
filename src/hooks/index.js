import { useEffect, useState } from 'react';

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener, false);
    return () => {
      document.removeEventListener('mousedown', listener, false);
    };
  },
  [ ref, handler ]);
};

export const useInputChange = () => {
  const [ input, setInput ] = useState({});

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  });

  return [ input, handleInputChange ];
};
