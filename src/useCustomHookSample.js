import { useEffect, useState } from 'react'

const useCustomHookSample = (key, defaultVal) => {
    const [value , setValue] = useState(() => { 
        const jsonValue = window.localStorage.getItem(key);
        if (jsonValue !== null) {
            return JSON.parse(jsonValue);
        } else {
            return defaultVal;
        }
     });

     useEffect(() => { 
        window.localStorage.setItem(key, JSON.stringify(value));
      }, value);

      return [value , setValue];
}

export default useCustomHookSample