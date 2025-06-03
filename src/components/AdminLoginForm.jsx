// src/components/AdminLoginForm.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { login, setSession } from '../utils/auth';

const AdminLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await login(email, password);
      if (success) {
        setSession();
        navigate('/admin/dashboard');
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error al intentar iniciar sesión:', err);
      setError(true);
    }
  };

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-jcavalier.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Capa oscura y cristalina */}
      <motion.div className="absolute inset-0 bg-black z-0" initial={{ opacity: 1 }} animate={{ opacity: 0.5 }} transition={{ duration: 1.4 }} />
      <motion.div className="absolute inset-0 z-10 backdrop-blur-xl bg-white bg-opacity-5" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ duration: 1.8, delay: 0.6 }} />

      {/* Formulario */}
      <motion.div
        className="relative z-20 px-6 text-white flex flex-col items-center space-y-8 w-full max-w-sm"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
      >
        <motion.img
          src="/LogoB.png"
          alt="Logo JCavalier"
          className="w-24 h-24 object-contain"
          initial={{ scale: 0 }}
          animate={{ scale: 2, y: -20 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <input
            ref={emailRef}
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-sm"
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-full bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-sm pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-white/80"
              aria-label="Mostrar contraseña"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center">
              Credenciales inválidas o error de conexión
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 border border-white text-white text-lg uppercase tracking-wider hover:bg-white hover:text-black transition rounded-full shadow-md backdrop-blur-sm"
          >
            Iniciar sesión
          </button>

          <a
            href="/"
            className="block text-sm text-white/70 text-center hover:text-white mt-2"
          >
            ← Volver al inicio
          </a>
        </form>
      </motion.div>
    </section>
  );
};

export default AdminLoginForm;
