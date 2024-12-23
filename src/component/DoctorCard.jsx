import React, { useContext } from 'react';
import { HospitalContext } from '../App';


function DoctorCard(props) {
    const { doctores } = useContext(HospitalContext);

    const doctor = doctores.find(doc => doc.nombre === props.doctor)
    if (!doctor) {
        return <div> Doctor not Found</div>
    }
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{doctor.nombre}</h5>
                    <p className="card-text">Experiencia: {doctor.experiencia}</p>
                    <p className="card-text">Especialidad: {doctor.especialidad}</p>
                    <p className="card-text">Descripción: {doctor.descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default DoctorCard;
