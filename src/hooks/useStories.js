import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import defaultStories from '../storiesData.json';

function getImageBase64() {
  return axios
    .get('https://picsum.photos/320/206?grayscale', {
      responseType: 'arraybuffer',
    })
    .then(
      (response) =>
        `data:image/png;base64,${Buffer.from(response.data, 'binary').toString(
          'base64'
        )}`
    );
}

export default function useStories() {
  const [stories, setStories] = useState(defaultStories);

  /**
   * for fun, get a random picsum image
   */
  useEffect(() => {
    Promise.all(defaultStories.map(() => getImageBase64())).then((images) => {
      setStories(
        stories.map((story, index) => ({
          image: images[index],
          ...story,
        }))
      );
    });
    // we want to assign an image to every default value, but then never again
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Adds to the front of a list of stories
   */
  const addStory = useCallback(
    (storyToAdd) => {
      const currentIndex = stories.indexOf(storyToAdd);

      /**
       * for fun, get a random picsum image
       */
      getImageBase64().then((image) => {
        // if it's already present, move it to the front.
        if (currentIndex > -1) {
          setStories([
            { image, ...storyToAdd },
            ...stories.filter((story) => story !== storyToAdd),
          ]);
          return;
        }
        setStories([{ image, ...storyToAdd }, ...stories]);
      });
    },
    [stories]
  );

  /**
   * removes from a list of stories by filtering
   */
  const removeStory = useCallback(
    (storyToRemove) => {
      const filteredStories = stories.filter(
        (story) => story !== storyToRemove
      );
      setStories(filteredStories);
    },
    [stories]
  );

  return { stories, addStory, removeStory };
}
