import React, { Component } from 'react';
import './CreateStudent.css';
import api from '../services/api'

class CreateStudent extends Component {
    state = {
        image: null,
        name: '',
        address: '',
    }

    handleSubmit = async e => {
        e.preventDefault();//prevents default behavior of sending user to another page

        const data = new FormData();
        data.append('foto', this.state.image);
        data.append('nome', this.state.name);
        data.append('endereco', this.state.address);

        await api.post('student/student', data);
        this.props.history.push('/');

    }
    handleImageChange = e => {
        this.setState({ image: e.target.files[0] });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form id="app-form" onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleImageChange} />

                <input
                    type="text"
                    name="name"
                    placeholder="Nome do aluno"
                    onChange={this.handleChange}
                    value={this.state.author}
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Endereço"
                    onChange={this.handleChange}
                    value={this.state.place}
                />

                <button type="submit">Enviar</button>
            </form>
        );
    }
}
export default CreateStudent;