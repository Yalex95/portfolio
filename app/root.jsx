
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  // ScrollRestoration,
} from "@remix-run/react";
import styles from '~/styles/index.css';
import Header from "./components/header";
import Footer from "./components/footer";

export function meta() {
  return [
    { charset: "utf-8" },
    { title: "Yeris Aguilar" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
}
export function links(){
  return[
      {
          rel:'stylesheet',
          href:styles
      },
      {
          rel:'stylesheet',
          href:'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'
       
      }
  ]
}
export default function App() {
  return (
    <Document>
      <Outlet/>
    </Document>
  );
}

function Document({children}){
  return(
    <html lang="es">
        <head>
            <Meta/>
            <Links/>
        </head>
        <body>
            <Header/>
            {children}
            <Footer/>
            <Scripts/>
            <LiveReload/>
        </body>
    </html>
)
}
