import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  redirects: async () => {
    return [
      {
        source: "/:locale/play-around",
        destination: "/:locale/play-around/react-select",
        permanent: true,
      },
    ];
  },
  // Add any other Next.js configuration options here
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
