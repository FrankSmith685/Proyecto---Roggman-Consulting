import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  TextField,
  Typography,
  FormGroup,
  Grid,
  Paper,
  Container,
  Avatar,
  IconButton
} from '@mui/material';
import { CloudUpload, CloudUploadOutlined, Delete, DeleteOutline } from '@mui/icons-material';
import bannerPrincipal from "../../assets/imagenes/home/imagen15.jpg";

const Kontakt = () => {
  const navigate = useNavigate();
  const [formType, setFormType] = useState('firma');
  const [formValues, setFormValues] = useState({
    vorname: '',
    nachname: '',
    telefon: '',
    firma: '',
    stadt: '',
    position: '',
    email: '',
    nachricht: '',
    akzeptiereKommerzielleInfos: false,
    akzeptiereDatenschutz: false,
    cv: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleDrop = (acceptedFiles) => {
    setFormValues(prev => ({
      ...prev,
      cv: acceptedFiles[0]
    }));
  };

  const handleRemoveCv = () => {
    setFormValues(prev => ({
      ...prev,
      cv: null
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formValues);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: ".pdf,.doc,.docx"
  });

  const handleClickHome = () => {
    navigate("/");
};

  return (
    <>
      <div className="w-full h-screen bg-bg_favorite_1 relative">
        <img 
        src={bannerPrincipal} 
        alt="NOT FOUND" 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
        />
        <div className="bg-bg_favorite_1 flex flex-col justify-center items-center md:items-end h-full z-20 relative space-y-4 p-4 pt-32 sm:pt-48 md:pt-64 sm:p-6 md:p-8">
          <div className="w-full md:w-1/2 h-auto">
              <h2 className="text-white font-bold text-2xl sm:text-4xl  md:text-5xl font-bell text-center md:text-end px-2">
                Kontakt 
              </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-11/12 md:w-3/5 pb-10">
        {/* <Container> */}
        <p className="text-base text-gray-400 py-10">
            <span onClick={handleClickHome} className="hover:cursor-pointer text-gray-800 font-bold">
                Sandra Roggero <span className="text-gray-500 font-medium text-xs">Beratung</span>
            </span>
            {' > '}
            Kontakt
        </p>
        <div className="flex justify-center py-4">
            <button
                onClick={() => setFormType('firma')}
                className={`px-4 py-2 font-bold ${formType === 'firma' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'} rounded-l`}
            >
                ICH BIN EIN UNTERNEHMEN
            </button>
            <button
                onClick={() => setFormType('bewerber')}
                className={`px-4 py-2 font-bold ${formType === 'bewerber' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'} rounded-r`}
            >
                ICH BIN EIN BEWERBER
            </button>
        </div>
        <div className="w-full maxlg mx-w--auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          {/* p-4 md:p-8 bg-white rounded-lg shadow-lg */}
            <form onSubmit={handleSubmit} className="grid grid-cols-2  gap-4 ">
              {/* grid grid-cols-1 sm:grid-cols-2 gap-4 */}
                <div className="w-full col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm text-gray-600" htmlFor="vorname">Vorname</label>
                    <input
                        type="text"
                        id="vorname"
                        name="vorname"
                        value={formValues.vorname}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                </div>
                <div className="w-full col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm text-gray-600" htmlFor="nachname">Nachname</label>
                    <input
                        type="text"
                        id="nachname"
                        name="nachname"
                        value={formValues.nachname}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                </div>
                <div className="w-full col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm text-gray-600" htmlFor="telefon">Telefon</label>
                    <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        value={formValues.telefon}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                </div>
                {formType === 'firma' && (
                    <>
                        <div className="w-full col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm text-gray-600" htmlFor="firma">Firma</label>
                            <input
                                type="text"
                                id="firma"
                                name="firma"
                                value={formValues.firma}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                        </div>
                        <div className="w-full col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm text-gray-600" htmlFor="stadt">Stadt</label>
                            <input
                                type="text"
                                id="stadt"
                                name="stadt"
                                value={formValues.stadt}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                        </div>
                        <div className="w-full col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm text-gray-600" htmlFor="position">Position</label>
                            <input
                                type="text"
                                id="position"
                                name="position"
                                value={formValues.position}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                        </div>
                    </>
                )}
                <div className="col-span-2">
                    <label className="block mb-2 text-sm text-gray-600" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block mb-2 text-sm text-gray-600" htmlFor="nachricht">Nachricht (optional)</label>
                    <textarea
                        id="nachricht"
                        name="nachricht"
                        value={formValues.nachricht}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    ></textarea>
                </div>
                
                {/* {formType === 'bewerber' && (
                    <div className="col-span-2">
                        <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-md p-4 cursor-pointer hover:bg-gray-100">
                            <input {...getInputProps()} />
                            <CloudUploadOutlined className="h-6 w-6 text-gray-400 mb-2 mx-auto" />
                            <p className="text-center text-gray-600">Ziehen Sie Ihren Lebenslauf hierher oder klicken Sie, um eine Datei auszuwählen (Nur PDF- oder Word-Dateien)</p>
                        </div>
                        {formValues.cv && (
                            <div className="flex items-center justify-between mt-2">
                                <Avatar className="bg-blue-500">
                                    <CloudUploadOutlined className="h-6 w-6 text-white" />
                                </Avatar>
                                <p className="text-gray-700">{formValues.cv.name}</p>
                                <IconButton onClick={handleRemoveCv}>
                                    <DeleteOutline className="text-red-500" />
                                </IconButton>
                            </div>
                        )}
                    </div>
                )} */}
                {
                  formType === 'bewerber' && (
                    <div className="col-span-2 ">
                      <Box {...getRootProps()} p={2} border="2px dashed #ccc" borderRadius="5px" textAlign="center" className="hover:cursor-pointer">
                          <input {...getInputProps()} />
                          <CloudUpload style={{ fontSize: '2rem', color: '#ccc' }} />
                              <p className="text-base mt-2">
                                  Ziehen Sie Ihren Lebenslauf hierher oder klicken Sie, um eine Datei auszuwählen
                              </p>
                              <p className="text-sm mt-2">
                                  (Nur PDF- oder Word-Dateien)
                              </p>
                      </Box>
                      {formValues.cv && (
                          <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                              <Avatar>
                                  <CloudUpload />
                              </Avatar>
                              <Typography variant="body1" className="text-base">{formValues.cv.name}</Typography>
                              <IconButton onClick={handleRemoveCv}>
                                  <Delete />
                              </IconButton>
                          </Box>
                      )}
                    </div>
                  )
                }
                <div className="col-span-2">
                    {formType === 'firma' && (
                        <label className="flex items-center text-gray-700">
                            <input
                                type="checkbox"
                                name="akzeptiereKommerzielleInfos"
                                checked={formValues.akzeptiereKommerzielleInfos}
                                onChange={handleChange}
                                className="form-checkbox h-4 w-4 mr-2"
                            />
                            Ich akzeptiere die
                            <Link to="/datenschutzrichtlinie" className="font-normal text-gray-to-blue-600">datenschutzrichtlinie</Link>
                            
                        </label>
                    )}
                    <label className="flex items-center text-gray-700">
                        <input
                            type="checkbox"
                            name="akzeptiereDatenschutz"
                            checked={formValues.akzeptiereDatenschutz}
                            onChange={handleChange}
                            required
                            className="form-checkbox h-4 w-4 mr-2"
                        />
                        {/* {formType === 'firma' ? "Ich akzeptiere die Datenschutzrichtlinie und das Impressum." : "Ich habe die Datenschutzrichtlinie gelesen und akzeptiere sie."} */}
                        {formType === 'firma' ? (
                                <>
                                    Ich akzeptiere die 
                                    <Link to="/benutzerrechte" className="font-normal ml-1 text-gray-to-blue-600">Benutzerrechte</Link>.
                                </>
                            ) : (
                                <>
                                    Ich akzeptiere die
                                    <Link to="/benutzerrechte" className="font-normal ml-1 text-gray-to-blue-600">Benutzerrechte</Link> 
                                </>
                        )}
                    </label>
                </div>
                <div className="col-span-2">
                    <button
                        type="submit"
                        className="w-full md:w-1/3 py-2 bg-gray-800 text-white font-bold rounded transition duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
                    >
                        Senden
                    </button>
                </div>
            </form>
        </div>
      </div>
    </>
  );
};

export default Kontakt;