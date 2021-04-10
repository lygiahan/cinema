import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Headers from "./layouts/Headers";
import Home from "./pages/Home";
import Showtimes from "./pages/Showtimes";
import Footers from "./layouts/Footers";
import DetailPhim from "./pages/DetailPhim";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS, ReduxThunk } from "./actions/type";
import Checkout from "./pages/Checkout";
import Auth from "./Auth";
import InfoUser from "./pages/InfoUser";
const { Header, Footer, Content } = Layout;
function App() {
   const dispatch  = useDispatch();
   
useEffect(()=>{
     let userlogin = JSON.parse(localStorage.getItem('curential'));
     if(userlogin){
          dispatch(ReduxThunk(LOGIN_SUCCESS,userlogin));
     }
},[])
  return (
    <>
      <Router>
        <Layout>
          <Header style={{backgroundColor:'rgba(255,255,255,.95)',boxShadow:' 1px 1px 6px #4e4e4e', height:60}}>
            <Headers />
          </Header>
          <Switch>
             <Content style={{height:'100%',backgroundColor:'#fff'}}>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/showtimes" component={Showtimes}></Route>
                <Route exact path="/phim/:id" component={DetailPhim}></Route>
                <Route exact path="/checkout/:id" component={Checkout}></Route>
                 <Route exact path="/user/thongtin" component={InfoUser}></Route>
             </Content>
          </Switch>
          <Footer style={{backgroundColor:'#222',zIndex:1}}>
              <Footers />
          </Footer>
        </Layout>
      </Router>
    </>
  );
}

export default App;
