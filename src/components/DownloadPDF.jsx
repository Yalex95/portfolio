import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DownloadPDF = () => {
    const pdfFilePath = './src/assets/pdf/Yeris_Aguilar_frontend_dev.pdf';

  return (
    <a className="btn download-btn " href={pdfFilePath} download><FontAwesomeIcon icon="fa-solid fa-download" /> Download My Resume</a>
  )
}
