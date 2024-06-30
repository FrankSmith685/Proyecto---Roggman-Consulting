import { useNavigate } from "react-router-dom";
import bannerPrincipal from "../../assets/imagenes/home/imagen11.jpg";
import { useEffect, useState } from "react";
import { TextField, Button, Container, Typography, Box, Card, CardContent, IconButton, Avatar } from '@mui/material';
import { CloudUpload, Delete } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';
import { useAppState } from "../../hooks/useAppState";

const RegistrierenSieIhrenLebenslauf = () => {
  const {imagenesPreloader } = useAppState();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [cv, setCv] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClickHome = () => {
        navigate("/");
    };

    const handleDrop = (acceptedFiles) => {
        setCv(acceptedFiles[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("CV:", cv);
        console.log("Message:", message);
    };

    const handleRemoveCv = () => {
        setCv(null);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleDrop,
        accept: ".pdf,.doc,.docx"
    });

    return (
        <>
            {/* <div className="w-full h-screen bg-bg_favorite_1 relative">
                <img src={bannerPrincipal} alt="NOT FOUND" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
                
                <div className="bg-bg_favorite_1 flex flex-col justify-center items-end h-full z-20 relative space-y-4 p-4 pt-96 sm:p-6 md:p-8">
                    <div className="w-1/2 h-auto">
                        <h2 className="text-white font-bold text-4xl sm:text-4xl md:text-5xl font-bell text-center px-2">
                        Registrieren Sie Ihren Lebenslauf 
                        </h2>
                    </div>
                </div>
            </div> */}
            <div className="w-full h-screen bg-bg_favorite_1 relative">
                <img 
                src={imagenesPreloader?.kandidate1?.src} 
                alt="Registrieren Sie Ihren Lebenslauf" 
                className="absolute top-0 left-0 w-full h-full object-cover z-0" 
                />
                <div className="bg-bg_favorite_1 flex flex-col justify-center items-center md:items-end h-full z-20 relative space-y-4 p-4 pt-32 sm:pt-48 md:pt-64 sm:p-6 md:p-8">
                <div className="w-full md:w-1/2 h-auto">
                    <h2 className="text-white font-bold text-2xl sm:text-4xl  md:text-5xl font-bell text-center md:text-end px-2">
                        Registrieren Sie Ihren Lebenslauf 
                    </h2>
                </div>
                </div>
            </div>
            <Container maxWidth="md" className="pb-10">
    {/* <Typography variant="body1" color="textSecondary" className="py-10">
        <span onClick={handleClickHome} className="hover:cursor-pointer text-gray-800 font-bold">
            Sandra Roggero <span className="text-gray-500 font-medium text-xs">Beratung</span>
        </span>
        {' > '}
        Registrieren Sie Ihren Lebenslauf 
    </Typography> */}
        <p className="text-base text-gray-400 py-10">
            <span onClick={handleClickHome} className="hover:cursor-pointer text-gray-800 font-bold">
                Sandra Roggero <span className="text-gray-500 font-medium text-xs">Beratung</span>
            </span>
            {' > '}
            Registrieren Sie Ihren Lebenslauf
        </p>
    {/* <Typography variant="body1" color="textSecondary" className="py-0"> */}
        <p className="text-gray-700 text-start w-full pb-1 px-2">
        Wir helfen Ihnen, das nächste Kapitel Ihrer Karriere zu schreiben. Erzählen Sie uns Ihre Geschichte!
        </p>
    {/* </Typography> */}
    <form onSubmit={handleSubmit} className="w-full maxlg mx-w--auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-Mail
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>
        <div className="mb-4">
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
            {cv && (
                <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                    <Avatar>
                        <CloudUpload />
                    </Avatar>
                    <Typography variant="body1" className="text-base">{cv.name}</Typography>
                    <IconButton onClick={handleRemoveCv}>
                        <Delete />
                    </IconButton>
                </Box>
            )}
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Nachricht (Optional)
            </label>
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Ihre Nachricht hier..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
        </div>
        <div className="flex items-center justify-start">
            <button 
                type="submit" 
                variant="contained" 
                color="primary" 
                className="w-1/3 py-2 bg-bg_favorite_3 hover:bg-bg_favorite_4 text-white font-bold rounded transition duration-200"
            >
                Senden
            </button>
        </div>
    </form>


</Container>

        </>
    );
}

export default RegistrierenSieIhrenLebenslauf;
