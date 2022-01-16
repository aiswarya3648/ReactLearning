// import logo from './logo.svg';
// import './App.css';
// import './login';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/* Edit <code>src/App.js</code> and save to reload. */}
//           Hi Aiswarya, Welcome to React Learning!!!
//         </p>
                
//         {/* <link to="/Buttonpage.js"></link> */}
//         {/* <form>
//           <input type="text"></input>
//           <input></input> */}
//           <button type="button" onClick="location.href='https://reactjs.org/docs/handling-events.html'">        
//           LOGIN.</button>
//        {/* </form> */}

//       </header>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
// 	return (
// 		<div>
// 				<p>Header</p>
// 		</div>
// 	)
// };

// const Homepage = () => {
// 	return (
// 		<div>
// 				<Header/>
// 				<h1>Homepage </h1>
// 				<Link to='/about'>Go to Aboutpage</Link>
// 		</div>
// 	)
// };

// const Aboutpage = () => {
// 	return (
// 		<div>
// 				<Header/>
// 				<h1>Aboutpage</h1>
// 				<Link to='/'>Go to Aboutpage</Link>
// 		</div>
// 	)
// };
// export {Homepage, Aboutpage } ;



import React from 'react';
import Login from './login';
import Buttonpage from './Buttonpage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  	return (
      <Router>
       
      <Route exact path="/" component={Login}/>
    <Route exact path="/about" component={Buttonpage }/>
  
</Router>
  	)
  };
   
    

export default App ;