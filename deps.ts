import { Application, Router, Status } from "https://deno.land/x/oak/mod.ts";
import { connect } from 'https://deno.land/x/redis/mod.ts';
export {
    Application,
    Router,
    Status,
    connect as redisConnect
}