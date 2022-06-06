<script lang="ts">
	import { Router, Route } from "svelte-routing";

	import { setupI18n } from 'app/i18n';

	import NavBar from './components/NavBar.svelte';
	import MainPage from './pages/Main.svelte';
	import DragonPage from './pages/Dragon.svelte';
	import FlightsPlacePage from './pages/FlightsPlace.svelte';
	import StorePage from './pages/Store.svelte';

	export let url = "/";
</script>

<section>
	<Router url="{url}">
		<NavBar />
		<Route path="/">
			<MainPage />
		</Route>
		<Route path="/dragon/:id">
			<DragonPage />
		</Route>
		<Route path="/fights">
			<FlightsPlacePage />
		</Route>
		<Route path="/store">
			<StorePage />
		</Route>
	</Router>
</section>

<style lang="scss">
	@import "./styles/general";
	
	section {
		width: 100%;
		height: 100%;

		@include flex-center-top-column;
	}
</style>
