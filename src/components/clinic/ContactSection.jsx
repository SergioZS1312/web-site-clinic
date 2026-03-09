'use client';

import React, { useState } from 'react';
import { sectionHeaderClass, sectionSubtitleClass, sectionTitleClass } from './constants';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12z"/>
          <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>
      ),
      label: 'Dirección',
      value: 'Av. Salud 245, Ciudad, Colombia',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
    },
    {
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 7v5l3 3"/>
        </svg>
      ),
      label: 'Horario',
      value: 'Lun-Vie: 8am-7pm | Sáb: 9am-2pm',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
    },
  ];

  return (
    <section id="contact" className="bg-surface-0 px-6 py-24 md:px-[8%] md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className={sectionHeaderClass}>
          <h2 className={`${sectionTitleClass} text-primary-700`}>Agenda tu cita</h2>
          <p className={sectionSubtitleClass}>
            Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="border-t-4 border-primary-600 bg-surface-0 p-8 shadow-lg md:p-10">
              {submitted && (
                <div className="mb-8 border-l-4 border-primary-500 bg-primary-50 p-4 text-primary-800">
                  <strong>✓ ¡Mensaje enviado!</strong> Te contactaremos pronto.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold uppercase tracking-wide text-secondary-700">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 border-secondary-200 bg-muted-50 px-4 py-3 text-secondary-900 transition-all focus:border-primary-600 focus:bg-surface-0 focus:outline-none"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold uppercase tracking-wide text-secondary-700">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-2 border-secondary-200 bg-muted-50 px-4 py-3 text-secondary-900 transition-all focus:border-primary-600 focus:bg-surface-0 focus:outline-none"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold uppercase tracking-wide text-secondary-700">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-2 border-secondary-200 bg-muted-50 px-4 py-3 text-secondary-900 transition-all focus:border-primary-600 focus:bg-surface-0 focus:outline-none"
                    placeholder="+57 123 456 7890"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-bold uppercase tracking-wide text-secondary-700">
                    Servicio de interés *
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border-2 border-secondary-200 bg-muted-50 px-4 py-3 text-secondary-900 transition-all focus:border-primary-600 focus:bg-surface-0 focus:outline-none"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="deportiva">Fisioterapia deportiva</option>
                    <option value="manual">Terapia manual</option>
                    <option value="rehab">Rehabilitación física</option>
                    <option value="electro">Electroterapia</option>
                    <option value="maso">Masoterapia</option>
                    <option value="post">Rehabilitación postoperatoria</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-bold uppercase tracking-wide text-secondary-700">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full border-2 border-secondary-200 bg-muted-50 px-4 py-3 text-secondary-900 transition-all focus:border-primary-600 focus:bg-surface-0 focus:outline-none"
                    placeholder="Cuéntanos brevemente sobre tu situación..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-700 px-8 py-4 font-black uppercase tracking-wide text-surface-0 transition-all duration-300 hover:bg-primary-800 hover:shadow-xl"
                >
                  Enviar solicitud
                </button>
              </form>
            </div>
          </div>

          {/* Right: Info & Map */}
          <div className="order-1 space-y-6 lg:order-2">
            {/* Top contact row: Telefono + WhatsApp */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="group flex h-full min-h-30 flex-col justify-between bg-primary-50 p-6 transition-all duration-300 hover:shadow-lg">
                <div className="mb-3 text-primary-600">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 4h4l2 5-3 2a15 15 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z"/>
                  </svg>
                </div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-secondary-700">Telefono</p>
                <p className="font-semibold text-secondary-900">+57 123 456 7890</p>
              </div>

              <a
                href="https://wa.me/571234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-30 flex-col justify-between bg-primary-50 p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-3 text-primary-600">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-secondary-700">WhatsApp</p>
                <p className="font-semibold text-secondary-900">+57 123 456 7890</p>
              </a>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`group ${info.bgColor} p-6 transition-all duration-300 hover:shadow-lg`}
                >
                  <div className={`mb-3 ${info.color}`}>{info.icon}</div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-secondary-700">
                    {info.label}
                  </p>
                  <p className="font-semibold text-secondary-900">{info.value}</p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="group overflow-hidden shadow-lg">
              <iframe
                title="Mapa de ubicación"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14589.562355868906!2d-73.99767754634881!3d5.020766838381728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e40710047ccd86b%3A0x57c348644c75e520!2sFisvital%20Fisioterapia!5e1!3m2!1ses!2sco!4v1773002806147!5m2!1ses!2sco"
                className="h-100 w-full border-0 transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;




