# noelorona

Astro-based academic portfolio site built as a static export.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Container (Docker)

```bash
docker build -t noelorona-portfolio .
docker run --rm -p 8080:80 noelorona-portfolio
```

## Container (Podman)

```bash
podman build -t noelorona-portfolio .
podman run --rm -p 8080:80 noelorona-portfolio
```
