import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header variant="home" />
      <main className="pt-24 min-h-[60vh] max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center text-center py-stack-lg">
        <p className="font-label-md text-label-md text-secondary mb-4 uppercase">
          404
        </p>
        <h1 className="font-headline-md text-headline-md text-primary mb-4">
          We couldn&rsquo;t find that page
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-md mb-8">
          The page you&rsquo;re looking for may have moved. Explore our coastal
          residences instead.
        </p>
        <Link
          href="/#residences"
          className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-label-md text-label-md hover:bg-secondary transition-all"
        >
          Browse all stays
        </Link>
      </main>
      <Footer />
    </>
  );
}
