import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pdfFilePath from "../assets/pdf/Yeris_Aguilar_frontend_dev.pdf";

export const DownloadPDF = () => {
  return (
    <a className="btn download-btn " href={pdfFilePath} download><FontAwesomeIcon icon="fa-solid fa-download" /> Download My Resume</a>
  )
}
