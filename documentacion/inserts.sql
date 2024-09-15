INSERT INTO "tipo_usuario" ("name") VALUES
('Administrador'),
('Empleado');

INSERT INTO "usuarios" ("id", "username", "nombre", "apellido", "FK_tipo_id", "contrasenia") VALUES
(uuid_generate_v4(), 'admin_user', 'Juan', 'Pérez', 1, 'contrasenia123'),
(uuid_generate_v4(), 'empleado_user', 'Ana', 'García', 2, 'contrasenia456');

INSERT INTO "registros_de_llegada" ("id", "fecha_llegada", "FK_usuario_id") VALUES
(1, '2024-09-14 08:30:00', (SELECT "id" FROM "usuarios" WHERE "username" = 'admin_user')),
(2, '2024-09-14 09:00:00', (SELECT "id" FROM "usuarios" WHERE "username" = 'empleado_user'));