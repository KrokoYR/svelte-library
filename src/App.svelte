<script>
  import './index.css';
  import { AppStore } from './Store/store';
  import InboxScreen from './components/TaskScreen/TaskScreen.svelte';
</script>

<InboxScreen error={$AppStore} />
