import React from "react";
import Hero from "../components/Hero";
import SectionText from "../components/SectionText";
import CardsComparison from "../components/CardsComparison";
import RandomPhrases from "../components/RandomPhrases";
import ReflectionsForm from "../components/ReflectionsForm";

const textoSociedad = [
  "La sociedad de rendimiento se convierte en sociedad de dopaje...",
  "La vitalidad se reduce a la función, la autoexplotación y el agotamiento."
];
const textoCansancio = [
  "El cansancio negativo aísla y divide.",
  "El cansancio positivo inspira y permite comunidad."
];

export default function Home() {
  return (
    <div>
      <Hero />
      <SectionText id="sociedad" title="La sociedad del cansancio" paragraphs={textoSociedad} />
      <CardsComparison />
      <SectionText id="cansancio" title="El cansancio y sus formas" paragraphs={textoCansancio} />
      <RandomPhrases />
      <ReflectionsForm />
    </div>
  );
}
