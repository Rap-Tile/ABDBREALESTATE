import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../assets/assets';
import DholeraDescription from '../components/DholeraDescription';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  const [mainIndex, setMainIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!project || project.images.length === 0) return;

    timeoutRef.current = setTimeout(() => {
      setMainIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 4000);

    return () => clearTimeout(timeoutRef.current);
  }, [mainIndex, project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center text-red-600 text-xl font-semibold">🚫 Project not found</div>
      </div>
    );
  }

  const mainImage = project.images[mainIndex];

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-12 bg-gray-50 min-h-screen">
      {/* Main Image + Details Card */}
      <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col lg:flex-row gap-8">
        {/* Left: Main Image */}
        <div
          className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 mx-auto flex-shrink-0"
          style={{
            width: '100%',
            maxWidth: 506,
            aspectRatio: '506 / 651',
            position: 'relative',
          }}
        >
          <img
            key={mainImage}
            src={mainImage}
            alt="Main"
            className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{ opacity: 1 }}
          />
        </div>

        {/* Right: Project details */}
        <div className="flex flex-col justify-between" style={{ minHeight: 651 }}>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">{project.title}</h1>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{project.description}</p>
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-xl sm:text-2xl font-semibold text-green-700">💰 Price: {project.price}</p>
            <p className="text-gray-500 text-sm sm:text-base">📍 Location: {project.location}</p>
            <button
              className="mt-4 bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-800 transition duration-300 w-full sm:w-auto font-semibold"
              onClick={() => alert('Project liked! ❤️')}
            >
              ❤️ Like Project
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-4 overflow-x-auto py-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            onClick={() => setMainIndex(idx)}
            className={`cursor-pointer rounded-lg border-4 transition-transform duration-300 ease-in-out flex-shrink-0
              ${idx === mainIndex ? 'border-blue-600 scale-110 shadow-lg' : 'border-transparent hover:scale-105'}`}
            style={{ width: 100, height: 130, objectFit: 'cover' }}
          />
        ))}
      </div>

      {/* Videos Section */}
      {project.videos.length > 0 && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Project Videos</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {project.videos.map((video, idx) => (
              <div key={idx} className="relative w-full rounded-xl overflow-hidden shadow-lg bg-black aspect-video">
                <iframe
                  src={video}
                  title={`Video ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Brochures Section */}
      {project.pdfs.length > 0 && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Brochures</h2>
          <ul className="space-y-2 mb-6">
            {project.pdfs.map((pdf, idx) => (
              <li key={idx}>
                <a
                  href={pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-medium"
                >
                  📄 {pdf.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={project.pdfs[0]?.url}
            download
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-2xl hover:bg-green-700 transition w-full sm:w-auto text-center font-semibold shadow-lg"
          >
            ⬇️ Download Brochure
          </a>
        </div>
      )}

      {/* Contact Info Section */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Contact Information</h2>
        <p className="text-lg mb-2">👤 <strong>{project.contact.name}</strong></p>
        <p className="text-lg mb-2">
          📞 <a href={`tel:${project.contact.phone}`} className="text-blue-700 hover:underline">{project.contact.phone}</a>
        </p>
        <p className="text-lg">
          📧 <a href={`mailto:${project.contact.email}`} className="text-blue-700 hover:underline">{project.contact.email}</a>
        </p>
      </div>

      {/* Dholera Smart City Description Section */}
      {project.title.toLowerCase().includes("dholera") && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">About Dholera Smart City</h2>
          <DholeraDescription />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
  