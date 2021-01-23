import React from "react";
import { FaqsContainer } from "containers/faqs";
import { FooterContainer } from "containers/footer";
import { JumbotronContainer } from "containers/jumbotron";
import { HeaderContainer } from "containers/header";
import { Feature, OptForm } from "components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>영화, TV 프로그램을 무제한으로.</Feature.Title>
          <Feature.SubTitle>
            다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="이메일 주소" />
            <OptForm.Button>30일 무료 이용</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              신규 회원만 이 프로모션을 이용하실 수 있습니다.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
