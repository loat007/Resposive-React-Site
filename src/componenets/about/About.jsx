import React from 'react';
import Common from '../../Common';
import okman from "../../images/hero-img.png"


export default function About() {
  return (
    <>
      <Common name="Welcome to About Page" visit="/contact" imgsrc={okman} btnname="Contact Now" />
    </>

  )
}
