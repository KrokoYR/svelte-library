// src/components/TaskList.test.js

import PureTaskList from './PureTaskList.svelte';
import { render } from '@testing-library/svelte';
import { WithPinnedTasks } from './PureTaskList.stories'; //👈  Our story imported here

test('PureTaskList', () => {
  const { container } = render(PureTaskList, {
    //👇 Story's args used with our test
    props: WithPinnedTasks.args,
  });
  expect(container.firstChild.children[0].classList.contains('TASK_PINNED')).toBe(true);
});