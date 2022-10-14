/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy"],
    images:{
      loader:"akamai",
      path:"",
    }
  },
}
