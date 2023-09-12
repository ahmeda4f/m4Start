// import React from 'react';
// import Layout from './Layout/Layout';
// import Home from './Home/Home';
// import About from './About/About';
// import Port from './Port/Port';
// import Contact from './Contact/Contact';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/portfolio" component={Port} />
//           <Route path="/contact" component={Contact} />
//            {/* <Route component={Notfound} />  */}
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import About from './About/About';
import Port from './Port/Port';
import Contact from './Contact/Contact';
import {createBrowserRouter , RouterProvider } from 'react-router-dom';
import Notfound from './Notfound/Notfound';
function App() {
  let routers= createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Port /> },
        { path: 'contact', element: <Contact /> },
        {path:'*', element: <Notfound/>}
      ],
    }
  ])
  return (
 <RouterProvider router={routers}/>
  );
}

export default App;
