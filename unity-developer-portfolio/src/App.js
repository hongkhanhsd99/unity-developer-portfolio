import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: "Game Battle Royale 3D",
      description: "Game sinh tồn nhiều người chơi được phát triển bằng Unity và Photon Networking.",
      technologies: ["Unity", "C#", "Photon", "Blender"],
      image: "/api/placeholder/400/200",
      link: "#"
    },
    {
      title: "Mobile RPG Game",
      description: "Game nhập vai di động với hệ thống chiến đấu theo lượt và inventory system.",
      technologies: ["Unity", "C#", "Firebase", "Git"],
      image: "/api/placeholder/400/200",
      link: "#"
    },
    {
      title: "VR Training Simulator",
      description: "Ứng dụng thực tế ảo cho đào tạo công nghiệp sử dụng Unity XR Framework.",
      technologies: ["Unity", "C#", "XR Interaction Toolkit", "Oculus SDK"],
      image: "/api/placeholder/400/200",
      link: "#"
    }
  ];

  const skills = {
    "Game Development": ["Unity Engine", "C#", "Game Design", "Level Design"],
    "Graphics & 3D": ["Blender", "Maya", "Substance Painter", "PBR Texturing"],
    "Version Control": ["Git", "Plastic SCM"],
    "Networking": ["Photon", "Mirror Networking", "Firebase"],
    "Other": ["Agile/Scrum", "XR Development", "Performance Optimization"]
  };

  const experience = [
    {
      company: "GameStudio X",
      position: "Senior Unity Developer",
      period: "2021 - Hiện tại",
      description: "Phát triển và tối ưu hóa game mobile, làm việc với team 10 người."
    },
    {
      company: "VR Solutions",
      position: "Unity Developer",
      period: "2019 - 2021",
      description: "Phát triển ứng dụng VR cho đào tạo và giáo dục."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Nguyễn Văn A</h1>
            <h2 className="text-2xl text-gray-600 mb-4">Unity Developer</h2>
            <p className="text-gray-600 mb-4">
              5+ năm kinh nghiệm phát triển game và ứng dụng VR/AR với Unity
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <img
            src="/api/placeholder/150/150"
            alt="Profile"
            className="w-32 h-32 rounded-full mt-4 md:mt-0"
          />
        </div>
      </header>

      {/* Navigation */}
      <nav className="max-w-4xl mx-auto mb-8">
        <div className="flex space-x-4 bg-white rounded-lg shadow-lg p-4">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded ${
              activeTab === 'projects'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Dự án
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2 rounded ${
              activeTab === 'skills'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Kỹ năng
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2 rounded ${
              activeTab === 'experience'
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Kinh nghiệm
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="flex items-center text-blue-500 hover:text-blue-700"
                  >
                    Xem chi tiết
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="mb-8 last:mb-0">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-4 py-2 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="mb-8 last:mb-0 border-l-4 border-blue-500 pl-4"
              >
                <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                <h4 className="text-lg text-gray-600 mb-2">{exp.company}</h4>
                <p className="text-gray-500 mb-2">{exp.period}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Portfolio;