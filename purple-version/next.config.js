/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,

    // Add the allowedUris policy to allow the required URL
    urlImports: [
      "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js",
      "https://unpkg.com/three@0.140.0/build/three.module.js",
      "https://fonts.googleapis.com/css?family=Khula:700",
      "https://fonts.gstatic.com/s/khula/v12/OpNPnoEOns3VX9ECmoXUN_esZW2xOQ-xsNqO47m55DA.woff2",
      "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap",
      "https://fonts.gstatic.com/s/raleway/v14/1Ptug8zYS_SKggPNyC0IT4ttDfCmxA.woff2",
      "https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwJYtWqhPAMif.woff2",
    ],
  },
};

module.exports = nextConfig;
