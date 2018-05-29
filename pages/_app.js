import App, { Container } from "next/app"
import { ApolloProvider } from "react-apollo"
import withApollo from "../lib/withApollo"

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props

    console.log("XXXXXXXX apollo.store.cache.data.data XXXXXXXX")
    console.table(apollo.store.cache.data.data)

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)
