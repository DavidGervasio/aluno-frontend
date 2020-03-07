import React, { Component } from 'react';
import './EditStudent.css';
import api from '../services/api'
var student;

class EditStudent extends Component {
    state = {
        image: null,
        name: '',
        address: '',
    }

    componentDidMount() {
        student = this.props.location.state.student;
        this.state.name = student.nome;
        this.state.address = student.endereco;

    }

    // student = this.history.state.student;

    handleSubmit = async e => {
        e.preventDefault();//prevents default behavior of sending user to another page

        const data = new FormData();
        data.append('foto', this.state.image);
        data.append('nome', this.state.name);
        data.append('endereco', this.state.address);
        data.append('id', student.id);

        await api.post('aluno/alterar', data);
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
                    placeholder='Digite novo nome'
                    onChange={this.handleChange}
                    value={this.state.name}
                />

                <input
                    type="text"
                    name="address"
                    placeholder='Digite novo endereço'
                    onChange={this.handleChange}
                    value={this.state.address}
                />

                <button type="submit">Enviar</button>
            </form>
        );
    }
}
export default EditStudent;