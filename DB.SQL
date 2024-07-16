create table users (
  idusers serial primary key,
  name varchar(150),
  username varchar(150),
  email varchar(100),
  password varchar(50),
  foto varchar(200)  
);
create table post (
 idpost serial primary key,
 imgURL varchar(200),
 descricao varchar(300),
 localizacao varchar(200),
 idusers int,
 usuario int,
 foreign key(idusers) references user(idusers)
);
create table comentario (
  idcomentario serial primary key
)
