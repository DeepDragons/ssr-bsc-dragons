<script lang="ts">
	import Router from 'svelte-spa-router';
	import routes from './routers';

	import { setupI18n } from 'app/i18n';
</script>

<Router  {routes} />

<style lang="scss">
	@import "./styles/general";
</style>
