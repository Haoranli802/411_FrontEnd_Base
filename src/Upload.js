import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';

function Upload() {
  const { username } = useContext(UserContext);

  const [form, setForm] = useState({
    event_time: '',
    longitude: '',
    latitude: '',
    country: '',
    state: '',
    bird_scientific_name: '',
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [submitted, setSubmitted] = useState(null);
  const [submittedImagePreview, setSubmittedImagePreview] = useState(null); // ✅ this one is used post-submit

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submission = {
      ...form,
      imageName: imageFile ? imageFile.name : null,
      username: username,
    };

    setSubmitted(submission);
    setSubmittedImagePreview(imagePreview); // ✅ save current preview for post-submit display
  };

  return (
    <div>
      <h2>Upload Bird Sighting</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}>
        <label>
          Event Time:
          <input type="datetime-local" name="event_time" value={form.event_time} onChange={handleChange} required />
        </label>
        <label>
          Longitude:
          <input type="number" name="longitude" value={form.longitude} onChange={handleChange} required />
        </label>
        <label>
          Latitude:
          <input type="number" name="latitude" value={form.latitude} onChange={handleChange} required />
        </label>
        <label>
          Country:
          <input type="text" name="country" value={form.country} onChange={handleChange} required />
        </label>
        <label>
          State:
          <input type="text" name="state" value={form.state} onChange={handleChange} required />
        </label>
        <label>
          Bird Scientific Name:
          <input type="text" name="bird_scientific_name" value={form.bird_scientific_name} onChange={handleChange} required />
        </label>
        <label>
          Bird Image:
          <input type="file" accept="image/*" onChange={handleImageChange} required />
        </label>

        {/* Preview while filling the form */}
        {imagePreview && (
          <img src={imagePreview} alt="Live Preview" style={{ marginTop: 10, maxWidth: '100%' }} />
        )}

        <button type="submit" style={{ marginTop: 10 }}>Submit</button>
      </form>

      {/* Preview after submission */}
      {submitted && (
        <div style={{ marginTop: 30 }}>
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>

          {submittedImagePreview && (
            <div>
              <p><strong>Submitted Image Preview:</strong></p>
              <img src={submittedImagePreview} alt="Submitted Bird" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
      )}

      <br />
      <Link to="/home">← Back to Home</Link>
    </div>
  );
}

export default Upload;