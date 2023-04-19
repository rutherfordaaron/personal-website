import Head from "next/head"

const CustomHead = (props: { title: string, description: string, keywords: string }) => {
  return (
    <Head>
      <title>{props.title}</title>

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
      <link rel="icon" href="/favicon.svg" />

      <meta charSet="UTF-8" />
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  )
}

export default CustomHead;