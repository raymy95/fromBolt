import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.BRLFZ4AL.js",app:"_app/immutable/entry/app.BwLkPvSq.js",imports:["_app/immutable/entry/start.BRLFZ4AL.js","_app/immutable/chunks/CEp6S7HQ.js","_app/immutable/chunks/DyjBc6Js.js","_app/immutable/entry/app.BwLkPvSq.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DyjBc6Js.js","_app/immutable/chunks/DI51QYyl.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
