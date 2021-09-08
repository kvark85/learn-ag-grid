import { createStore } from 'effector';
import { fetchImagesFx } from "../effectorEventsAndEffects/eventsAndEffects";

const $images = createStore({})
  .on(
    fetchImagesFx.doneData,
    (state, images) => {
      return {
        ...state,
        [images.id]: images.images,
      };
    }
  );

export default $images;
