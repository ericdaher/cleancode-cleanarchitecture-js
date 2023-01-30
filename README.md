First, build locally using the node image:

```
docker run --rm -it --name node -v $(pwd):/usr/src/app node bash
cd usr/src/app
yarn install
```

Then you can run the app normally with `docker compose up` and access with `docker exec -it cleancode bash`.
