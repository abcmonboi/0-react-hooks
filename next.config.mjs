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
      {
        source: "/:locale/react/hooks",
        destination: "/:locale/react/hooks/use-state",
        permanent: true,
      },
      {
        source: "/:locale/next",
        destination: "/:locale/next/api-reference",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: "E:/Programing Road/0_React/hooks",
  },
  // Add any other Next.js configuration options here
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
