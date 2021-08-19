import { BrowserRouter as Router } from 'react-router-dom';

import MainFooter from './components/shared/navigation/MainFooter';
import MainHeader from './components/shared/navigation/MainHeader';
import MainLayout from './components/shared/ui/MainLayout';

import Routes from './Routes';

import MuiThemeProvider from './MuiThemeProvider';
import ProductMetaDataContextProvider from './components/shared/contexts/ProductMetaDataContextProvider';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Router>
          <ProductMetaDataContextProvider>
            <Helmet>
              <title>GoShop</title>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&family=Noto+Sans+JP:wght@300&family=Nunito+Sans:wght@300;400&family=Open+Sans&family=PT+Sans&family=Roboto&family=Rubik:wght@800&family=Dancing+Script&display=swap"
              />
              <meta name="description" content="An Ecommerce app" />
              <link
                rel="icon"
                type="image/png"
                href="favicon.ico"
                sizes="16x16"
              />
              <meta name="author" content="Tarik Khan" />
            </Helmet>
            <MainHeader />
            <MainLayout>
              <Routes />
            </MainLayout>
            <MainFooter />
          </ProductMetaDataContextProvider>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
