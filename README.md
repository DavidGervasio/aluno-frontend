***Aluno-Frontend
Este projeto compõe o Frontend de uma aplicação Web e fornece um CRUD de aluno com os campos: nome, endereço e foto.

***Funções e URLs
Registrar aluno: POST https://aluno-backend.herokuapp.com/index.php/student/student Campos(multipart/form-data): nome(String); endereco(String); foto(File).

Atualizar dados do aluno: POST https://aluno-backend.herokuapp.com/index.php/student/student/update Campos(multipart/form-data): id(int); nome(String); endereco(String); foto(File).

Mostrar aluno: GET https://aluno-backend.herokuapp.com/index.php/student/student/:id

Listar aluno: GET https://aluno-backend.herokuapp.com/index.php/student/list_students

Deletar aluno: GET https://aluno-backend.herokuapp.com/index.php/student/delete/:id (Há navegadores que não aceitam a função delete).

***Tecnologias utilizadas
React: Bibliteca JavaScript destinada a criação de interfaces com usuario.

***Instalação e execução do programa
1-Salve a aplicação em um diretório. 
2-Vá até o diretorio do projeto ,via terminal linux, e digite "yran start" ou "npm start". Então um 
navegadore será aberto.

