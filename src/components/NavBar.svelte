<script lang="ts">
	import { Link } from "svelte-routing";
</script>

<nav>
	<ul>
		<li>
			<Link to="/">
				<img
					src="/favicon/ms-icon-310x310.png"
					alt="Logo"
					height="60"
				/>
				Dragons
			</Link>
		</li>
	</ul>
</nav>

<style lang="scss">
	@import "../styles/mixins";

	nav {
		max-width: 1200px;
	}
</style>
