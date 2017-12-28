INSERT INTO `cementerio`.`usuariosensesion`
(`CodigoUsuario`,
`FechaHoraEntrada`,
`FechaHoraSalida`)
VALUES
('MEROBLESC',
now(),
NULL);

select * from cementerio.usuariosensesion
delete FROM cementerio.usuariosensesion where CodigoUsuario ='MEROBLESC'
select now()

UPDATE cementerio.usuarios
SET usuarios.ActivoInactivoUsuario='A'
WHERE usuarios.CodigoUsuario='MEROBLESC'

select * from cementerio.usuarios
select concat(ApellidosUsuario, ' ' ,NombresUsuario) as NombreCompleto
from cementerio.usuarios

INSERT INTO `cementerio`.`usuarios`
(`CodigoUsuario`,
`ApellidosUsuario`,
`NombresUsuario`,
`ClaveUsuario`,
`CorreoElectronicoUsuario`,
`CodigoUsuarioSupervisor`,
`ActivoInactivoUsuario`,
`CodigoRolUsuario`,
`UbicacionFisicaUsuario`)
VALUES
('SEOTERO',
'OTERO',
'SAMUEL ELIAS',
'SE',
'samxunited@hotmail.com',
'SEOTERO',
'A',
'1',
'TORRE PGR');

SELECT 
cementerio.perfiles.NombrePerfil, 
cementerio.perfiles.CodigoPerfil 
FROM cementerio.usuariosporperfil INNER JOIN cementerio.perfiles
ON cementerio.usuariosporperfil.CodigoPerfil = cementerio.perfiles.CodigoPerfil
WHERE  cementerio.usuariosporperfil.CodigoUsuario ='VLAGUILLON'

select * from cementerio.usuariosporperfil
WHERE CodigoUsuario='SEOTERO'

DELETE FROM cementerio.usuariosporperfil
WHERE CodigoUsuario = 'SEOTERO' AND CodigoPerfil='CEMPE01'

DELETE FROM cementerio.usuariosporperfil
WHERE CodigoPerfil ='CEMPE02'

INSERT INTO cementerio.usuariosporperfil(CodigoPerfil, CodigoUsuario)
VALUES ('CEMPE01','MEROBLESC')