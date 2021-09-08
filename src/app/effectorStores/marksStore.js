import { createStore } from 'effector';
import { fetchMarksFx } from '../effectorEventsAndEffects/eventsAndEffects';

const $marks = createStore([])
  .on(
    fetchMarksFx.doneData,
    (state, marks) => marks
  );

export default $marks;
