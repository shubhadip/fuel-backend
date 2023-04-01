// https://github.com/luin/ioredis/issues/763
// redis-cli -h redis -p 6379 PING
import { redisConnect } from '../../deps.ts';

const REDIS_HOST = Deno.env.get("REDIS_HOST");

const redisClient = await redisConnect({
 hostname: REDIS_HOST || '127.0.0.1',
});

console.log(REDIS_HOST, await redisClient.ping());

export { redisClient };