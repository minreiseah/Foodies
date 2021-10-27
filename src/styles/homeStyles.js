import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

// Landing Section
export const LandingImage = styled.div`
  width: 100vw;
  /* height needs a media query for mobile */
  height: 100vh;
  position: relative;
  bottom: 10vh;
  .hero {
    height: auto;
    max-height: 100%;
    width: 100%;
    overflow: hidden;
    position: absolute;
  }
`

// About Section
export const HomeAboutSection = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 10vh;
`
export const HomeAboutContent = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.6rem;
  }

  p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
  }
`
export const HomeAboutImage = styled.div`
  width: 40%;
`

// Launch Section
export const HomeLaunchSection = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 10vh;
`
export const HomeLaunchContent = styled.div`
  width: 100%;
  background-color: palegoldenrod;

  .launchInfo {
    width: 60%;
    h3 {
      width: 100%;
      font-weight: 600;
      font-size: 4rem;
      line-height: 10rem;
      text-transform: uppercase;
      text-align: left;
      margin: 0 auto;
    }
    p {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2rem;
      text-align: justify;
      margin: 0 auto 10vh;
    }
  }

  h1 {
    width: 30%;
    font-weight: 800;
    font-size: 12rem;
    line-height: 10rem;
    margin: 0;
  }
`
export const HomeLaunchGallery = styled.div`
  position: relative;
  width: 100%;
  background-color: lightcoral;
  padding-bottom: 10vh;

  h3 {
    font-weight: 400;
    font-size: 2rem;
    text-align: start;
    line-height: 3rem;
    margin: 0 auto;
    padding: 2rem 0;
  }
`

export const GalleryImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5vw;
`

export const HomeLaunchImage = styled.div`
  width: 100%;
  @media (min-width: 1408px) {
    width: 23%;
  }

  .image {
    border: 3px solid black;
  }
`
