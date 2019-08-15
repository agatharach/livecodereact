import React from "react";
import Headermovie from "../component/Header2";
import Listmovie from "../component/Headline";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../store";

// news API
const baseURL = "https://api-todofancy.herokuapp.com/api/movies";
class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: ""
        };
    }

    componentDidMount = () => {
        console.log(this.props.match.params.id);
        this.setState({ val: this.props.match.params.id }, () => {
            const self = this;
            try {
                // fetch data from a url endpoinT
                const data = await axios.get(baseURL);
                self.props.setlistMovie(
                    data.movies.Category.filter(self.state.val)
                );
                console.log(data);
            } catch (error) {
                console.log("error", error);
                // appropriately handle the error
            }
        });
    };
    componentDidUpdate = prevProps => {
        const self = this;
        if (prevProps.match.params.id !== this.props.match.params.id) {
            axios
                .get(
                    baseURL
                )
                .then(response => {
                    self.props.setlistTop(response.data.articles);
                    console.log(response);
                })
                .catch(error => {
                    console.log("terdapat eror ini :", error);
                });
        }
    };
    render() {
        console.log("cek");
        return (
            <div>
                <Headermovie />
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <Listmovie top={this.props.listMovie} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    "listMovie",
    actions
)(Category);
