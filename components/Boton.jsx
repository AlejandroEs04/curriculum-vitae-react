'use client'
import { Button } from "react-bootstrap"
import { saveAs } from "file-saver";

function Boton() {

  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1HCTzFbYhmdZbPV9ZWxBAacO3iLajUE6j/view?usp=sharing",
      "CV.pdf"
    );
  };
  return (
    <Button size='lg' className='btn' onClick={saveFile}>
        <p>See my CV</p>
    </Button>
  )
}

export default Boton
