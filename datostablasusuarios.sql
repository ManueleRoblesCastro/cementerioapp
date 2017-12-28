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
('MEROBLESC',
'ROBLES CASTRO',
'MANUEL EDUARDO',
'ME',
'memeerc@yahoo.com',
'MEROBLESC',
'A',
'1',
'PGR SAN SALVADOR');

SELECT * FROM USUARIOS

INSERT INTO `cementerio`.`perfiles`
(`CodigoPerfil`,
`NombrePerfil`)
VALUES
('CEMPE01',
'Vendedor');

select * from perfiles

INSERT INTO `cementerio`.`perfiles`
(`CodigoPerfil`,
`NombrePerfil`)
VALUES
('CEMPE02',
'Digitador');

INSERT INTO usuariosporperfil(CodigoPerfil, CodigoUsuario)
VALUES ('CEMPE02', 'MEROBLESC')

SELECT * FROM usuariosporperfil

INSERT INTO `cementerio`.`menusoperacion`
(`CodigoMenu`,
`NombreMenu`,
`UrlMenu`,
`AyudaMenu`,
`OrdenMenu`,
`CodigoMenuSuperior`,
`NivelMenu`,
`ColorSemantic`,
`IconoSemantic`)
VALUES
('CEMME',
'Menus de sistema cementerio',
'',
'Menus de sistema cementerio',
1,
'CEMME',
1,
'red',
'legal');

SELECT * FORM menusoperacion

INSERT INTO `cementerio`.`menusoperacionporperfil`
(`CodigoPerfil`,
`CodigoMenu`)
VALUES
('CEMPE02',
'CEMME');

