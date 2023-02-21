import Layout from "~/components/templates/layout";
import "~/lib/sass/_app.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/fonts/font.css" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
