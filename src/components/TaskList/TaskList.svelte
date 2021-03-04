<script>
  import PureTaskList from './PureTaskList.svelte';
  import { taskStore } from '../TaskStore/store';
  function onPinTask(event) {
    taskStore.pinTask(event.detail.id);
  }
  function onArchiveTask(event) {
    taskStore.archiveTask(event.detail.id);
  }
</script>

<div>
  <PureTaskList
    tasks={$taskStore}
    on:onPinTask={onPinTask}
    on:onArchiveTask={onArchiveTask}
  />
</div>
