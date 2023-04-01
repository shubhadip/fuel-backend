from denoland/deno

COPY . .

RUN deno cache deps.ts

EXPOSE 8000

CMD ["run", "--allow-net", "--allow-read", "--allow-env", "server.ts"]