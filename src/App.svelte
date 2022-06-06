<script lang="ts">
	import Router from 'svelte-spa-router';
	import routes from './routers';

	import { setupI18n } from 'app/i18n';

	import NavBar from './components/NavBar.svelte';
</script>

<section>
	<NavBar />
	<Router  {routes} />
</section>

<style lang="scss">
	@import "./styles/general";
	
	section {
		width: 100%;
		height: 100%;

		@include flex-center-top-column;
	}
</style>
