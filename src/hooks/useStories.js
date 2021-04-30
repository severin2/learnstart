import { useCallback, useState } from 'react';

export default function useStories() {
  const [stories, setStories] = useState([]);

  const addStory = useCallback((story) => {
    setStories([...stories, story]);
  }, []);

  return { stories, addStory };
}
