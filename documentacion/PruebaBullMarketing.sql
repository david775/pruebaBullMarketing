CREATE TABLE "tipo_usuario" (
    "id" serial NOT NULL UNIQUE,
    "name" varchar(255),
    PRIMARY KEY("id")
);

CREATE TABLE "usuarios" (
    "id" uuid NOT NULL UNIQUE,
    "username" varchar(255) NOT NULL UNIQUE,
    "nombre" varchar(255),
    "apellido" varchar(255),
    "FK_tipo_id" int,
    "contrasenia" varchar(255),
    PRIMARY KEY("id")
);

CREATE TABLE "registros_de_llegada" (
    "id" serial NOT NULL UNIQUE,
    "fecha_llegada" timestamp,
    "FK_usuario_id" uuid,
    PRIMARY KEY("id")
);

ALTER TABLE "usuarios"
ADD FOREIGN KEY("FK_tipo_id") REFERENCES "tipo_usuario"("id")
ON UPDATE NO ACTION ON DELETE NO ACTION;

ALTER TABLE "registros_de_llegada"
ADD FOREIGN KEY("FK_usuario_id") REFERENCES "usuarios"("id")
ON UPDATE NO ACTION ON DELETE NO ACTION;