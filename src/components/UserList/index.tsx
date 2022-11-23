import React from "react";
import { ListComponent } from "../ListComponent";

export default class UserList extends React.Component {
    state = { list: null, loading: true }

    async componentDidMount() {
        // adicionar token
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ''
            }
        }
        config.headers['Authorization'] = 'Token f299e1f62495c9af4ab316c77130adf718071b69';

        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        this.setState({list: data, loading: false})
        console.log(data);
    }
    render() {     
        return (
            <div>
                <ListComponent listName={'Minha Lista'} />
                <ListComponent listName={'Minha Lista 2'} />
            </div>
        );
    }
}