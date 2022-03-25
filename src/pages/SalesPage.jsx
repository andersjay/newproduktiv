import { Header } from "../components/Header";
import { CTA } from "../components/CTA";
import { ST } from "../components/ST";
import { ST2 } from "../components/ST2";
import { Anxiety } from "../components/Anxiety";
import { Who } from "../components/Who";
import { Offer } from "../components/Offer";
import { Faq } from "../components/Faq";

export function SalesPage() {
  return (
    <>
      <Header />
      <CTA />
      <ST/>
      <ST2/>
      <Anxiety/>
      <Who/>
      <Offer/>
      <Faq/>
    </>
  );
}