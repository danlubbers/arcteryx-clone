import React, {Component} from 'react';
import axios from 'axios';

export default class Product extends Component {
    constructor() {
        super();

        this.state = {
            product: []
        }
    }

    componentDidMount() {
        console.log(this.props)
        let id = this.props.match.params.id
        axios.get(`/api/getOneProduct/:${id}`).then(res => {
            this.setState({product: res.data})
        })
    }
   
    render() {
        return(
            <div>
                <p>BLAH BLAH BLAH</p>
            </div>
        )
    }
}