'use client';
import React, { useState } from 'react';
import styles from "./contact.module.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      setSuccess('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Name"
      className={styles.inputField}
      required
    />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email"
      className={styles.inputField}
      required
    />
    <input
      type="text"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      placeholder="Subject"
      className={styles.inputField}
      required
    />
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Your message"
      className={styles.textareaField}
      required
    />
    <button
      type="submit"
      disabled={loading}
      className={styles.submitButton}
    >
      {loading ? 'Sending...' : 'Send Message'}
    </button>
    {error && <p className={styles.errorMessage}>{error}</p>}
    {success && <p className={styles.successMessage}>{success}</p>}
  </form>
  );
};

export default ContactForm;
