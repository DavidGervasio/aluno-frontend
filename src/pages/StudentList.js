import React, { useState, useEffect } from 'react';
import './StudentList.css'
import api from '../services/api'
import { Link } from 'react-router-dom';

export default function Partner({ history }) {
    const [studentList, setStudentList] = useState([]);

    async function listStudent() {
        const response = await api.get('aluno/listar_alunos', {
            headers: {
                //authorization: 'Bearer ' + localStorage.getItem('authorization')

            }
        })
        setStudentList(response.data);
    };

    useEffect(() => {
        listStudent();
    }, []);

    async function deleteStudent(id) {
        //OBS: o metodo delete e put esta gerando o erro 405 (Method Not Allowed) no chrome
        const response = await api.get('aluno/delete/' + id, {
            headers: {
                //authorization: 'Bearer ' + localStorage.getItem('authorization')

            }
        })
        listStudent();
    }

    return (
        <div id="page">

            <div id="student-list" >

                <ul>
                    <div id="header">
                        <Link to="/create">
                            <button className='add' >ADICIONAR</button>
                        </Link>
                    </div>

                    {studentList.map(student => (
                        <li>
                            <img src={process.env.REACT_APP_API_URL + student.foto} alt='' ></img>
                            <stronge>{student.nome}</stronge>
                            <p>{student.endereco}</p>
                            <Link to={{
                                pathname: '/edit',
                                state: {
                                    student: student
                                }
                            }}>

                                <button className='edit'  >EDITAR</button>
                            </Link>

                            <button className='delete' onClick={(e) => deleteStudent(student.id)} >EXCLUIR</button>
                        </li>
                    ))}

                </ul>
            </div>
        </div>

    );

}

