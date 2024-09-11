import Footer from "./footer"
import Header from "./header"
import Body from "./Body"

export default function App () {
  return(
    <>
    <Header />
    <Body name="maq" food="pizza" isHealthy = {false} age={23}/>
    <Body name="A" food="apples" isHealthy = {true} age={20}/>
    <Body name="name" food="KFC" isHealthy = {false} age={16}/>
    <Body name="tao" food="almonds" isHealthy = {true} age={67}/>
    <Body name="roldam" food="junk food" isHealthy = {false} age={50}/>
    <Footer />
    </>
  )
}