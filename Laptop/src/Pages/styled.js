import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  &::before {
    background-color: #1a236e80;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1a236e95;
  }
  /* border: 1px solid blue; */
`;
export const Title = styled.div`
  z-index: 1;
  position: absolute;
  display: block;
  text-align: center;
  h1 {
    color: white;
    text-align: center;

    /* Style 1 / Display Bold */
    font-family: inherit;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 68px; /* 106.25% */
    word-wrap: normal;
  }
  p {
    margin-top: 20px;
    margin-bottom: 40px;
    color: var(--Text-Dark-Body, rgba(255, 255, 255, 0.8));
    /* text-align: center; */

    /* Style 1 / Title 3 Medium */
    font-family: inherit;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 31.2px */
  }
  h5 {
    margin-top: 24px;
    color: var(--Text-Dark-Label, rgba(255, 255, 255, 0.7));
    text-align: center;

    /* Style 1 / Body 2 Medium */
    font-family: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 133.333% */
  }
  div {
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 8px 0;
  }
`;

export const ContainerBs = styled.div`
  text-align: center;
  /* height: 730px; */
  padding: 120px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 64px;
  background-color: ${(props) => props.Backcolor || " #fff"};
`;
export const TitleBe = styled.div`
  h1 {
    color: ${(props) => (props.whitetext ? "#FFF" : "#1A246F")};
    text-align: center;

    /* Style 1 / Display Bold */
    font-family: inherit;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 68px; /* 106.25% */
  }
  p {
    color: ${(props) =>
      props.whitetext ? "rgba(255, 255, 255, 0.70)" : "rgba(26, 35, 110, 0.7)"};
    text-align: center;

    margin-top: 20px;
    /* Style 1 / Title 3 Medium */
    font-family: inherit;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 31.2px */
  }
`;
export const Textfarmes = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

export const Partnerslogo = styled.img`
  margin-top: 64px;
  max-width: 255px;
  height: auto;
  padding: 5px 30px;
  border-radius: 8px;
  border: 2px solid var(--black-10, rgba(0, 0, 0, 0.1));
  background: url(<path-to-image>), lightgray 50% / cover no-repeat, #fff;
`;

export const Mediadesign = styled.div`
  padding: 80px 165px;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 25px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
export const Contactsdesign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    background-color: var( --Text-blue);
    color: white;
    width: 50%;
    height: 400px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;
