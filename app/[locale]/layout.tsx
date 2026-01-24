import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/lib/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  console.log('🔍 Layout Locale:', locale);

  if (!routing.locales.includes(locale as "en" | "vi")) {
    notFound();
  }

  // Pass locale explicitly
  const messages = await getMessages({ locale });

  console.log('🔍 Messages loaded:', messages.hero?.title);

  return (
    <html lang={locale} className="dark">
      <body className="antialiased" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}