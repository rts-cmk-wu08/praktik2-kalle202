import HomeBanner from "./components/banners/HomeBanner";
import NewsletterBanner from "./components/banners/NewsletterBanner";
import Testimonials from "./components/Testimonials";
import UdvalgteBoliger from "./components/UdvalgteBoliger";
import UdvalgteAgenter from "./components/UdvalgteAgenter";
import AppBanner from "./components/banners/AppBanner";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Testimonials />
      <UdvalgteBoliger />
      <NewsletterBanner />
      <UdvalgteAgenter />
      <AppBanner />
    </main>
  );
}
