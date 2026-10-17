// Plain JavaScript config on purpose: Next.js does not need to compile it first, which matters on hosts
// where the native Next.js compiler cannot load (e.g. older Linux servers with an old glibc).

/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
