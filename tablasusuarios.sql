select * from cementerio.users

CREATE TABLE usuarios(
	CodigoUsuario varchar(10) NOT NULL,
	ApellidosUsuario varchar(50) NOT NULL,
	NombresUsuario varchar(50) NOT NULL,
	ClaveUsuario varchar(10) NOT NULL,usuarios
	CorreoElectronicoUsuario varchar(100) NOT NULL,
	CodigoUsuarioSupervisor char(10) NULL,
	ActivoInactivoUsuario char(1) NOT NULL,
	CodigoRolUsuario char(1) NOT NULL,
	UbicacionFisicaUsuario varchar(250) NOT NULL
)

CREATE TABLE perfiles(
	CodigoPerfil varchar(10) NOT NULL,
	NombrePerfil varchar(100) NOT NULL
) 

CREATE TABLE menusoperacion(
	CodigoMenu varchar(10) NOT NULL,
	NombreMenu varchar(100) NOT NULL,
	UrlMenu varchar(500) NOT NULL,menusoperacion
	AyudaMenu varchar(500) NOT NULL,
	OrdenMenu numeric(3, 0) NOT NULL,
	CodigoMenuSuperior char(10) NULL,
	NivelMenu numeric(3, 0) NOT NULL,
	ColorSemantic varchar(50) NULL,
	IconoSemantic varchar(15) NULL
)

CREATE TABLE menusoperacionporperfil(
	CodigoPerfil varchar(10) NOT NULL,
	CodigoMenu varchar(10) NOT NULL
)

CREATE TABLE usuariosporperfil(
	CodigoPerfil varchar(10) NOT NULL,
	CodigoUsuario varchar(10) NOT NULL
)




