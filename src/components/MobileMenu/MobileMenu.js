/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS, WEIGHTS } from "../../constants";

const DismissButton = ({ onDismiss }) => {
  return (
    <DismissButtonContainer>
      <UnstyledButton onClick={onDismiss}>
        <Icon id="close"></Icon>
      </UnstyledButton>
    </DismissButtonContainer>
  );
};

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <div
          style={{
            height: "100vh",
            display: "flex",
            "flex-direction": "column",
            padding: "32px",
          }}
        >
          <DismissButton onDismiss={onDismiss}></DismissButton>
          <MobileMenuNav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </MobileMenuNav>
          <MobileMenuFooter>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </MobileMenuFooter>
        </div>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;
  margin: auto;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  height: 100%;
  width: max(20vw, 15rem);
  max-width: 100%;
  background: white;
`;

const DismissButtonContainer = styled.div`
  align-self: flex-end;
  margin-top: -8px;
  margin-right: -16px;
`;

const MobileMenuNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin: auto 0;

  & a {
    color: ${COLORS.gray[900]};
    weight: ${WEIGHTS.medium};
    text-decoration: none;
    font-size: calc(18 / 16 * 1rem);
    text-transform: uppercase;
  }

  & a:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const MobileMenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & a {
    color: ${COLORS.gray[900]};
    weight: ${WEIGHTS.normal};
    text-decoration: none;
    font-size: calc(14 / 16 * 1rem);
  }
`;

export default MobileMenu;
