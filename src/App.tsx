import './App.css'
import { MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import { TopNav } from './components/TopNav';

type AppProps = {
  pca: IPublicClientApplication;
};

const App = ({ pca }: AppProps) => {

  return (
    <MsalProvider instance={pca}>

      <TopNav />
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href="https://reactjs.org" target="_blank">React</a></li>
          <li><a href="https://getbootstrap.com" target="_blank">Bootstrap</a></li>
          <li><a href="https://azure.microsoft.com/en-us/services/active-directory/develop/msal/overview" target="_blank">MSAL</a></li>
        </ul>
      </div>
      
    </MsalProvider>
  );
}

export default App
