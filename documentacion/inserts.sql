CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- SELECT uuid_in(overlay(overlay(md5(random()::text || ':' || random()::text) placing '4' from 13) placing to_hex(floor(random()*(11-8+1) + 8)::int)::text from 17)::cstring);
-- gen_random_uuid()

INSERT INTO "tipo_usuario" ("name") VALUES
('Administrador'),
('Empleado');

INSERT INTO "usuarios" ("id", "username", "nombre", "apellido", "FK_tipo_id", "contrasenia") VALUES
(gen_random_uuid(), 'admin_user', 'Juan', 'Pérez', 1, 'contrasenia123'),
(gen_random_uuid(), 'empleado_user', 'Ana', 'García', 2, 'contrasenia456');

INSERT INTO "registros_de_llegada" ("id", "fecha_llegada", "FK_usuario_id") VALUES
(1, '2024-09-14 08:30:00', (SELECT "id" FROM "usuarios" WHERE "username" = 'admin_user')),
(2, '2024-09-14 09:00:00', (SELECT "id" FROM "usuarios" WHERE "username" = 'empleado_user'));