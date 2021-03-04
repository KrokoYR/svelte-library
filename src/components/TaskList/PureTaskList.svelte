<script>
  import Task from '../Task/Task.svelte';
  import LoadingRow from '../LoadingRow/LoadingRow.svelte';
  export let loading = false;
  export let tasks = [];

  //👇 Reactive declarations (computed props in other frameworks)
  $: noTasks = tasks.every((task) => (task.state = 'TASK_ARCHIVED'));
  $: emptyTasks = noTasks && !loading;
  $: tasksInOrder = [
    ...tasks.filter((t) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
  ];
</script>

{#if loading}
  <div class="list-items">
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
    <LoadingRow />
  </div>
{/if}
{#if emptyTasks}
  <div class="list-items">
    <div class="wrapper-message">
      <span class="icon-check" />
      <div class="title-message">You have no tasks</div>
      <div class="subtitle-message">Sit back and relax</div>
    </div>
  </div>
{/if}
{#each tasksInOrder as task}
  <Task {task} on:onPinTask on:onArchiveTask />
{/each}
