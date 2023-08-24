import React from 'react'

export const DownloadPDF = () => {
    const pdfFilePath = './src/assets/pdf/Yeris_Aguilar_frontend_dev.pdf';
  return (
    <a className="ms-3 btn contact-btn px-4" href={pdfFilePath} download> Download My Resume</a>
  )
}
