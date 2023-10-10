# where-is-my-child

know where your child is

[Google Glass app](https://github.com/cooltoast/glass-where-is-my-child)

[Android app](https://github.com/cooltoast/where-is-my-child)

## Deployment

- Frontend: [Cloudflare Pages](https://pages.cloudflare.com/)
- Backend: [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/platform/functions/)
- Database: [Cloudflare D1 Database](https://developers.cloudflare.com/d1/)

## API

- `GET /api/coordinates`
- `GET /api/coordinates/last`
- `POST /api/coordinate`

## Run Locally

```
docker build -t where-is-my-child .

docker run -v $(pwd):/opt/app -w /opt/app -p 8788:8788 -p 8976:8976 -it where-is-my-child
```
