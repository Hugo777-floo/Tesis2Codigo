// pages/MisDatos.tsx
import React, { useState } from "react";
import {
  Container, Header, EditButton,FormContainer,FieldContainer,Label,
  Input,SelectContainer,SectionTitle,AceptarButton,CancelarButton,ButtonGroup, AddButton,
  TitleContainer, ChildContainer, DeleteButton,SmallTitle   } from "./styles";
import styled from "styled-components";
import TabContainer from "../../components/ContenedorDato"; 
import { Tab } from "../../components/ContenedorDato/types"; 
import Notification from '../../components/avisoDatos';
import ConfirmModal from "../../components/ModalConfirmacion";
import InfoModal from "../../components/ModalInformativo";

const MisDatos: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Mis Datos Personales");
  const [showNotification, setShowNotification] = useState(true);
  const [isEditable, setIsEditable] = useState(false);
  const [openSelects, setOpenSelects] = useState<{ [key: string]: boolean }>({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  
  const [formData, setFormData] = useState({
    tipoDocumento: "",
    nombre: "",
    correoPersonal: "",
    documentoIdentidad: "",
    apellidoMaterno: "",
    numeroEmergencia: "",
    nacionalidad: "",
    apellidoPaterno: "",
    direccion: "",
    genero: "",
    telefono: "",
    estadoCivil: "",
    bancoDesignado: "",
    bancoDesignadoCTS: "",
    areaPertenece: "",
    modalidadTrabajo: "",
    nroCuentaPago: "",
    nroCuentaPagoCTS: "",
    rolEmpresa: "",
    jefeDirecto: "",
    ubicacionTrabajo: "",
    tallaRopa: "",
    tallaCalzado: "",
    nombreConyuge: "",
    apellidoPaternoConyuge: "",
    apellidoMaternoConyuge: "",
    fechaNacimientoConyuge: "",
  });

  const [backupData, setBackupData] = useState(formData);

  const [hijos, setHijos] = useState<Array<{ nombres: string; apellidoPaterno: string; apellidoMaterno: string; fechaNacimiento: string }>>([]);
  const [backupHijos, setBackupHijos] = useState(hijos);

  const tabs: Tab[] = [
    { label: "Mis Datos Personales" },
    { label: "Mis Datos De Trabajo" },
    { label: "Mis Datos De Familia" },
  ];

  

  const handleEditClick = () => {
    setIsEditable(true);
    setShowNotification(false); 
    setBackupData(formData);
    setBackupHijos(hijos);
  };

  const handleCancelClick = () => {
    setFormData(backupData);
    setHijos(backupHijos);
    setIsEditable(false); 
    setShowNotification(true);
  };
  
  const handleAcceptClick = () => {
    setShowConfirmModal(true); 
  };

  const confirmAccept = () => {
    setIsEditable(false);
    setShowNotification(true);
    setShowConfirmModal(false); 
    setShowInfoModal(true); 
    setBackupData(formData);
    setBackupHijos(hijos);
  };

  const closeInfoModal = () => {
    setShowInfoModal(false); 
  };

  const cancelConfirm = () => {
    setShowConfirmModal(false); 
    setIsEditable(true); 
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const agregarHijo = () => {
    setHijos((prevHijos) => [
      ...prevHijos,
      { nombres: "", apellidoPaterno: "", apellidoMaterno: "", fechaNacimiento: "" },
    ]);
  };

  const eliminarHijo = (index: number) => {
    setHijos((prevHijos) => prevHijos.filter((_, i) => i !== index));
  };

  const handleHijoChange = (index: number, field: string, value: string) => {
    const nuevosHijos = [...hijos];
    nuevosHijos[index] = { ...nuevosHijos[index], [field]: value };
    setHijos(nuevosHijos);
  };

  const toggleSelect = (name: string) => {
    setOpenSelects((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  const renderContent = () => {
    switch (activeTab) {
      case "Mis Datos Personales":
        return (
          <FormContainer>
          <FieldContainer>
              <Label>Tipo de Documento de Identidad</Label>
              <SelectContainer isOpen={openSelects["tipoDocumento"]} onClick={() => toggleSelect("tipoDocumento")}>
              <select 
              name="tipoDocumento"
              value={formData.tipoDocumento}
              onChange={handleInputChange}
              disabled={!isEditable}>
              <option disabled value="">
                Seleccione su tipo de Documento de Identidad
                </option>
                <option value="dni">DNI</option>
                <option value="carne_extranjeria">Carné de Extranjeria</option>
                <option value="ruc">RUC</option>
                <option value="pasaporte">Pasaporte</option>
                </select>
                </SelectContainer>
          </FieldContainer>
          <FieldContainer>
            <Label>Nombre</Label>
            <Input name="nombre"
                placeholder="Escriba aquí todos los nombres que tenga"
                value={formData.nombre}
                onChange={handleInputChange}
                disabled={!isEditable} />
          </FieldContainer>
          <FieldContainer>
            <Label>Correo Personal</Label>
            <Input name="correoPersonal"
                placeholder="Escriba su correo personal"
                value={formData.correoPersonal}
                onChange={handleInputChange}
                disabled={!isEditable}/>
          </FieldContainer>
          <FieldContainer>
        <Label>Documento de Identidad</Label>
            <Input
               type="number"
               name="documentoIdentidad"
               placeholder="Digite su documento de identidad"
               value={formData.documentoIdentidad}
               onChange={handleInputChange}
               disabled={!isEditable}
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "+" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>Apellido Materno</Label>
            <Input placeholder="Escriba su apellido materno" disabled={!isEditable} 
            value={formData.apellidoMaterno}
            onChange={handleInputChange}
            name="apellidoMaterno"/>
          </FieldContainer>
          <FieldContainer>
          <Label>Número de Emergencia</Label>
            <Input
               type="number"
               value={formData.numeroEmergencia}
               onChange={handleInputChange}
               name="numeroEmergencia"
               disabled={!isEditable}
                  placeholder="Digite un número de emergencia"
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "+" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>Nacionalidad</Label>
            <SelectContainer isOpen={openSelects["nacionalidad"]} onClick={() => toggleSelect("nacionalidad")}>
                <select disabled={!isEditable} 
                value={formData.nacionalidad}
                onChange={handleInputChange}
                name="nacionalidad">
              <option disabled value="">
                Seleccione su Nacionalidad
                </option>
                <option value="peru">Perú</option>
                <option value="extranjero">Extranjero</option>
                </select>
                </SelectContainer>
          </FieldContainer>
          <FieldContainer>
            <Label>Apellido Paterno</Label>
            <Input placeholder="Escriba su apellido paterno" disabled={!isEditable} 
            value={formData.apellidoPaterno}
            onChange={handleInputChange}
            name="apellidoPaterno"/>
          </FieldContainer>
          <FieldContainer>
            <Label>Dirección</Label>
            <Input placeholder="Escriba su dirección" disabled={!isEditable} 
            value={formData.direccion}
            onChange={handleInputChange}
            name="direccion" />
          </FieldContainer>
          <FieldContainer>
            <Label>Género</Label>
            <SelectContainer isOpen={openSelects["genero"]} onClick={() => toggleSelect("genero")}>
                <select disabled={!isEditable}
                value={formData.genero}
                onChange={handleInputChange}
                name="genero">
              <option disabled value="">
                Seleccione su género
                </option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                </select>
                </SelectContainer>
          </FieldContainer>
          <FieldContainer>
          <Label>Teléfono</Label>
            <Input
               type="number" 
               value={formData.telefono}
               onChange={handleInputChange}
               name="telefono"
               disabled={!isEditable}
                  placeholder="Digite un número de teléfono suyo"
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "+" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>Estado Civil</Label>
            <SelectContainer isOpen={openSelects["estado"]} onClick={() => toggleSelect("estado")}>
            <select disabled={!isEditable} 
            value={formData.estadoCivil}
            onChange={handleInputChange}
            name="estadoCivil">
              <option disabled value="">
                Seleccione su estado civil
                </option>
                <option value="soltero">Soltero</option>
                <option value="casado">Casado</option>
                <option value="viudo">Viudo</option>
                <option value="divorciado">Divorciado</option>
                </select>
                </SelectContainer>
          </FieldContainer>
        </FormContainer>
        );
      case "Mis Datos De Trabajo":
        return (
          <FormContainer>
            <FieldContainer>
              <Label>Banco Designado Pagos</Label>
              <SelectContainer isOpen={openSelects["bancoPago"]} onClick={() => toggleSelect("bancoPago")}>
                <select disabled={!isEditable} 
                value={formData.bancoDesignado}
                onChange={handleInputChange}
                name="bancoDesignado">
              <option disabled value="">
                Seleccione el Banco donde se realizará el depósito
                </option>
                <option value="bcp">BCP - BANCO DE CREDITO DEL PERÚ</option>
                <option value="bbva">BBVA</option>
                <option value="interbank">Interbank</option>
                <option value="scotiabank">Scotiabank</option>
                <option value="banbif">BanBif</option>
                <option value="pichincha">Banco Pichincha</option>
                </select>
                </SelectContainer>
            </FieldContainer>
            <FieldContainer>
              <Label>Nro de Cuenta para Pagos</Label>
              <Input
               type="number" 
               value={formData.nroCuentaPago}
               onChange={handleInputChange}
               name="nroCuentaPago"
               disabled={!isEditable}
                  placeholder="Digite el número de cuenta a pagar"
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "+" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
            />
            </FieldContainer>
            <FieldContainer>
              <Label>Ubicación Trabajo</Label>
              <SelectContainer isOpen={openSelects["ubitrabajo"]} onClick={() => toggleSelect("ubitrabajo")}>
                <select disabled={!isEditable} 
                value={formData.ubicacionTrabajo}
                onChange={handleInputChange}
                name="ubicacionTrabajo"> 
              <option disabled value="">
                Seleccione su lugar de trabajo
                </option>
                <option value="lima">Lima</option>
                <option value="ancash">Ancash</option>
                <option value="puno">Puno</option>
                <option value="cusco">Cusco</option>
                </select>
                </SelectContainer>
            </FieldContainer>
            <FieldContainer>
              <Label>Banco Designado CTS/Gratificaciones</Label>
              <SelectContainer isOpen={openSelects["bancoCTS"]} onClick={() => toggleSelect("bancoCTS")}>
              <select disabled={!isEditable} 
              value={formData.bancoDesignadoCTS}
              onChange={handleInputChange}
              name="bancoDesignadoCTS">
              <option disabled value="">
                Seleccione el Banco donde se realizará el depósito de CTS/Gratificaciones
                </option>
                <option value="bcp">BCP - BANCO DE CREDITO DEL PERÚ</option>
                <option value="bbva">BBVA</option>
                <option value="interbank">Interbank</option>
                <option value="scotiabank">Scotiabank</option>
                <option value="banbif">BanBif</option>
                <option value="pichincha">Banco Pichincha</option>
                </select>
                </SelectContainer>
            </FieldContainer>
            <FieldContainer>
              <Label>Nro de Cuenta CTS/Gratificaciones</Label>
              <Input
               type="number"
               disabled={!isEditable}
                value={formData.nroCuentaPagoCTS}
               onChange={handleInputChange}
               name="nroCuentaPagoCTS"
                  placeholder="Digite el número de cuenta donde se realizará los depósitos de CTS/Gratificaciones"
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "+" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
            />
            </FieldContainer>
            <FieldContainer>
              <Label>Talla de Ropa de Trabajo</Label>
              <SelectContainer isOpen={openSelects["tallaRopa"]} onClick={() => toggleSelect("tallaRopa")}>
              <select disabled={!isEditable} 
              value={formData.tallaRopa}
              onChange={handleInputChange}
              name="tallaRopa">
              <option disabled value="">
                Coloque su talla de ropa
                </option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
                <option value="xxxl">XXXL</option>
                </select>
                </SelectContainer>
            </FieldContainer>
            <FieldContainer>
              <Label>Área Perteneciente</Label>
              <SelectContainer isOpen={openSelects["area"]} onClick={() => toggleSelect("area")}>
                <select disabled={!isEditable} 
                value={formData.areaPertenece}
                onChange={handleInputChange}
                name="areaPertenece">
                <option disabled value="">
                Coloque el área al que pertenece
                </option>
                <option value="obra">Obra</option>
                <option value="manufactura">Manufactura</option>
                <option value="fabricacion">Fabricacion</option>
                <option value="calidad">Calidad</option>
                <option value="mantenimiento">Mantenimiento</option>
                </select>
                </SelectContainer>
            </FieldContainer>
            <FieldContainer>
              <Label>Rol Empresa</Label>
              <Input placeholder="Escriba su rol principal en la empresa" disabled={!isEditable} 
              value={formData.rolEmpresa}
              onChange={handleInputChange}
              name="rolEmpresa"/>
            </FieldContainer>
            <FieldContainer>
              <Label>Talla de Calzado de Trabajo</Label>
              <Input
               type="number"
              value={formData.tallaCalzado}
               onChange={handleInputChange}
               name="tallaCalzado"
               disabled={!isEditable}
                  placeholder="Digita la talla de tu calzado desde 36 a 46 "
                  min={36}
                  max={46}
                  onKeyDown={(e) => {
                    if (e.key === "-" || e.key === "+" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                  onBlur={(e) => {
                    const target = e.target as HTMLInputElement; 
                    const value = parseInt(target.value, 10);
                    if (value < 36) {
                      target.value = "Digita la talla de tu calzado desde 36 a 46";
                    } else if (value > 46) {
                      target.value = "Digita la talla de tu calzado desde 36 a 46";
                    }
                    
                  }}
            />
            </FieldContainer>
            <FieldContainer>
              <Label>Modalidad Trabajo</Label>
              <SelectContainer isOpen={openSelects["trabajoMod"]} onClick={() => toggleSelect("trabajoMod")}>
                <select disabled={!isEditable} 
                value={formData.modalidadTrabajo}
                onChange={handleInputChange}
                name="modalidadTrabajo">
              <option disabled value="">
                Seleccione su modalidad de trabajo
                </option>
                <option value="presencial">Presencial</option>
                <option value="virtual">Virtual</option>
                <option value="hibrido">Híbrido</option>
                </select>
                </SelectContainer>
            </FieldContainer>
            <FieldContainer>
              <Label>Jefe Directo</Label>
              <SelectContainer isOpen={openSelects["jefe"]} onClick={() => toggleSelect("jefe")}>
                <select disabled={!isEditable} 
                value={formData.jefeDirecto}
                onChange={handleInputChange}
                name="jefeDirecto">
                <option disabled value="">
                Seleccione su superior a Informar sobre usted
                </option>
                <option value="persona1">Diego Mendoza</option>
                <option value="persona2">Juan Sanchez</option>
                <option value="persona3">Abel Abelardo</option>
                <option value="persona4">Alejandra Gallegos</option>
                </select>
                </SelectContainer>
            </FieldContainer>
          </FormContainer>
        );
      case "Mis Datos De Familia":
        return (
          <div>
            <SectionTitle>Cónyuge</SectionTitle>
            <FormContainer>
              <FieldContainer>
                <Label>Nombres</Label>
                <Input placeholder="Digite los nombres de su Cónyuge" disabled={!isEditable} 
                value={formData.nombreConyuge}
                onChange={handleInputChange}
                name="nombreConyuge"/>
              </FieldContainer>
              <FieldContainer>
                <Label>Apellido Paterno</Label>
                <Input placeholder="Digite el apellido paterno de su conyuge" disabled={!isEditable} 
                value={formData.apellidoPaternoConyuge}
                onChange={handleInputChange}
                name="apellidoPaternoConyuge"/>
              </FieldContainer>
              <FieldContainer>
                <Label>Apellido Materno</Label>
                <Input placeholder="Digite el apellido materno de su conyuge" disabled={!isEditable}
                value={formData.apellidoMaternoConyuge}
                onChange={handleInputChange}
                name="apellidoMaternoConyuge"/>
              </FieldContainer>
              <FieldContainer>
                <Label>Fecha de Nacimiento</Label>
                <Input type="date" placeholder="Coloque la fecha de nacimiento de su conyuge" disabled={!isEditable} 
                value={formData.fechaNacimientoConyuge}
                onChange={handleInputChange}
                name="fechaNacimientoConyuge"/>
              </FieldContainer>
            </FormContainer>
            <SectionTitle>
              <div style={{ display: "flex", alignItems: "center" }}>
               Hijos
                {isEditable && <AddButton onClick={agregarHijo}>+ Añadir</AddButton>}
              </div>
            </SectionTitle>
            <FormContainer>
              {hijos.map((hijo, index) => (
                <ChildContainer key={index}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
                    <FieldContainer>
                      <Label>Nombres</Label>
                      <Input
                        placeholder="Digite los nombres de su hijo"
                        value={hijo.nombres}
                        onChange={(e) => handleHijoChange(index, "nombres", e.target.value)}
                        disabled={!isEditable}
                      />
                    </FieldContainer>
                    <FieldContainer>
                      <Label>Apellido Paterno</Label>
                      <Input
                        placeholder="Digite el apellido paterno de su hijo"
                        value={hijo.apellidoPaterno}
                        onChange={(e) => handleHijoChange(index, "apellidoPaterno", e.target.value)}
                        disabled={!isEditable}
                      />
                    </FieldContainer>
                    <FieldContainer>
                      <Label>Apellido Materno</Label>
                      <Input
                        placeholder="Digite el apellido materno de su hijo"
                        value={hijo.apellidoMaterno}
                        onChange={(e) => handleHijoChange(index, "apellidoMaterno", e.target.value)}
                        disabled={!isEditable}
                      />
                    </FieldContainer>
                    <FieldContainer>
                      <Label>Fecha de Nacimiento</Label>
                      <Input
                        type="date"
                        placeholder="dd/mm/aaaa"
                        value={hijo.fechaNacimiento}
                        onChange={(e) => handleHijoChange(index, "fechaNacimiento", e.target.value)}
                        disabled={!isEditable}
                      />
                    </FieldContainer>
                  </div>
                  {isEditable && (
                    <DeleteButton onClick={() => eliminarHijo(index)}>Eliminar</DeleteButton>
                  )}
                </ChildContainer>
              ))}
            </FormContainer>
            
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <TabContainer tabs={tabs} onTabSelect={setActiveTab} />
      <Header>
      <SmallTitle>{activeTab}</SmallTitle>
        {showNotification && <Notification onClose={() => setShowNotification(false)} />}
        {!isEditable ? (
          <EditButton onClick={handleEditClick}>Editar</EditButton>
        ) : (
          <ButtonGroup>
            <AceptarButton onClick={handleAcceptClick}>Aceptar</AceptarButton>
            <CancelarButton onClick={handleCancelClick}>Cancelar</CancelarButton>
            {}
            {showConfirmModal && (
              <ConfirmModal
                message="¿Estás seguro de que deseas aceptar los cambios?"
                onConfirm={confirmAccept}
                onCancel={cancelConfirm}
              />
            )}
          </ButtonGroup>
        )}
      </Header>
      {renderContent()}

      {}
      {showInfoModal && (
        <InfoModal
          message="La solicitud se realizó con exito. Será Notificada al área de Gestión Humana y a su Jefe."
          onClose={closeInfoModal}
        />
      )}
    </Container>
  );
};

export default MisDatos;