import React from "react";
import { Accordion } from "../components";
import faqsData from "../data/faqs.json";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>자주 묻는 질문</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item></Accordion.Item>
    </Accordion>
  );
}
