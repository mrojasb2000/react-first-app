import { TwitterCard } from "../components/twitter-card";

export function App () {
    const formatUserName = (username) => `@${username}`
    return (<>
     <TwitterCard formatUserName={formatUserName} user='Mauricio Rojas' username='mavrodev' avatar='Bandit' />
     <TwitterCard formatUserName={formatUserName} user='Mauricio Rojas' username='mavrodev' avatar='bandit' />
     <TwitterCard formatUserName={formatUserName} user='Mauricio Rojas' username='mavrodev' avatar='a' />
     <TwitterCard formatUserName={formatUserName} user='Mauricio Rojas' username='mavrodev' avatar='b' />
     <TwitterCard formatUserName={formatUserName} user='Mauricio Rojas' username='mavrodev' avatar='c' />
    </>)
}