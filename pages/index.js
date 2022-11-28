import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <script src="https://commerce5.maxoptra.ru/gt/gt-api/website-widget?p=https://commerce5.maxoptra.ru/gt/&a=shurukov&l=ru&w=500&h=500" charset="utf-8" id="tracking-widget-script"></script>

        <link rel="icon" href="/favicon.ico" />
 <meta name="mailru-domain" content="3rNuhknz9U4gPcl5" />
      </Head>

      <main>
        <Header title="asdasd2efr!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
