import { notFound } from "next/navigation";

import Providers from "./providers";

const locales = ["en", "zh"];

const LocaleLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="overflow-y-auto">
        <Providers>
          <header className="h-[var(--header-height)] max-w-screen-2xl flex justify-between items-center px-6 py-2">
            header
          </header>
          {children}
          <footer className="py-2 text-center text-sm">
            © 2018-2023 Alexander Zhao. All rights reserved.
          </footer>
        </Providers>
      </body>
    </html>
  );
};

export default LocaleLayout;
