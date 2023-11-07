// catch all route in nuxt
export default defineEventHandler((event) => {
	return $fetch(`https://api.coinlore.net${event.node.req.url}`);
});
