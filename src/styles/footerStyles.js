import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const FooterSection = styled.div`
  position: relative;
  height: 30vh;
  width: 100vw;
  overflow: hidden;
  background-color: rgb(235, 235, 235);
  .line {
    &.short {
      height: 100%;
    }
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 1px;
    display: block;
    background: black;
  }
  .horizontalLine {
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    bottom: 0;
    display: block;
    background: black;
  }
`

export const MobileFooterSection = styled.div`
  position: relative;
  /* height: 30vh; */
  width: 100vw;
  overflow: hidden;
  background-color: rgb(235, 235, 235);
  .socialsCaption {
    mix-blend-mode: difference;
    background-color: rgb(235, 235, 235);
  }
  .socials {
    width: 100%;
    height: 15vh;
    mix-blend-mode: difference;
    background-color: rgb(235, 235, 235);
  }
  .policy {
    width: 80%;
    margin: 0 auto;
  }
  p {
    position: relative;
    width: 100%;
    font-size: 0.875rem;
    text-align: center;
    word-wrap: break-word;
    margin: 0;
    padding: 1rem 0;
  }
  .line {
    &.short {
      height: 100%;
    }
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 1px;
    display: block;
    background: black;
  }
  .horizontalLine {
    position: absolute;
    width: 80%;
    transform-origin: center;
    height: 1px;
    bottom: 0;
    display: block;
    background: black;
    &.top {
      top: 0;
      bottom: auto;
      width: 100%;
    }
  }
`

export const Disclaimer = styled.div`
  height: 25%;
  width: 100vw;
  position: relative;
  padding-left: 2%;
  background-color: rgb(235, 235, 235);
  p {
    margin: 0;
    padding-right: calc(1rem + 2vw);
    color: rgb(29, 29, 29);
  }

  ${props =>
    props.mobile &&
    css`
      height: 15vh;
      padding: 0;
      p {
        padding-right: 0;
      }
    `}
`

export const CardanoInfo = styled.div`
  position: relative;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(235, 235, 235);

  .imageWrapper {
    height: 100%;
    max-height: 100%;
    width: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .image {
      max-height: 100%;
      max-width: 50%;
      object-fit: contain;
    }
  }
  p {
    text-align: center;
    margin: 0;
  }
`