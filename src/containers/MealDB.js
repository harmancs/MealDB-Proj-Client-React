import React from 'react'
import { BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import Home from "../components/Home/Home";
import Search from "../components/Search/Search";
import DishDetails from "../components/DishDetails/DishDetails";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/Register";
import Profile from "../components/Profile/Profile";
import ProfileEdit from "../components/Profile/ProfileEdit";
import UserService from "../services/UserService";
import Header from "../components/Header/Header.js"



class MealDB extends React.Component {

    state = {
        loaded: false,
        sessionUser:null
    };

    componentDidMount(){
        UserService.findUserInSession().then(
            user => this.setState({
                sessionUser:user,
                loaded:true
            })
        )
    }
    render(){
        if (!this.state.loaded) {
            return null;
        }

        return(
            <Router>
                <div>
                    <Header/>
                    <Switch>
                    <Route exact path="/" render={props => <Home user={this.state.sessionUser} />} />
                    <Route exact path="/home" render={props => <Home user={this.state.sessionUser} />} />
                    <Route exact path="/login" component={SignIn} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/search" render={props => <Search {...props} />}/>
                    <Route path="/search/:searchCriteria?/:course?/:page?" render={props => <Search {...props} />}/>
                    <Route path="/:dishId/view" render={props => <DishDetails {...props} />}/>
                    <Route path="/profile/:userId?" render={props => <Profile {...props}
                                                                                    user={this.state.sessionUser} />} />
                    <Route exact path="/user/edit" render={props => <ProfileEdit {...props} />}/>
                    <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        )
    }

}

export default MealDB;
