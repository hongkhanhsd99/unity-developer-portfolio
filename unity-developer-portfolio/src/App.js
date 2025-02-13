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
      demoUrl: "https://demo.example.com/game1",
      githubUrl: "https://github.com/example/game1"
    },
    {
      title: "Mobile RPG Game",
      description: "Game nhập vai di động với hệ thống chiến đấu theo lượt và inventory system.",
      technologies: ["Unity", "C#", "Firebase", "Git"],
      image: "/api/placeholder/400/200",
      demoUrl: "https://demo.example.com/game2",
      githubUrl: "https://github.com/example/game2"
    },
    {
      title: "VR Training Simulator",
      description: "Ứng dụng thực tế ảo cho đào tạo công nghiệp sử dụng Unity XR Framework.",
      technologies: ["Unity", "C#", "XR Interaction Toolkit", "Oculus SDK"],
      image: "/api/placeholder/400/200",
      demoUrl: "https://demo.example.com/vr",
      githubUrl: "https://github.com/example/vr"
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

  const TabButton = ({ name, label }) => (
    <button
      onClick={() => setActiveTab(name)}
      className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
        activeTab === name
          ? 'bg-blue-500 text-white'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow mb-6">
          <div className="max-w-5xl mx-auto p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Nguyễn Văn A
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-4">
                  Unity Developer
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl">
                  5+ năm kinh nghiệm phát triển game và ứng dụng VR/AR với Unity
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <button 
                    onClick={() => window.open('https://github.com/your-username', '_blank')}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <Github className="w-6 h-6" />
                    <span className="sr-only">GitHub Profile</span>
                  </button>
                  <button
                    onClick={() => window.open('https://linkedin.com/in/your-username', '_blank')}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span className="sr-only">LinkedIn Profile</span>
                  </button>
                  <button
                    onClick={() => window.location.href = 'mailto:your.email@example.com'}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <Mail className="w-6 h-6" />
                    <span className="sr-only">Email Contact</span>
                  </button>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <img
                  src="/api/placeholder/150/150"
                  alt="Profile"
                  className="w-32 h-32 rounded-full ring-4 ring-gray-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-xl shadow mb-6">
          <div className="max-w-5xl mx-auto p-4">
            <div className="flex space-x-4">
              <TabButton name="projects" label="Dự án" />
              <TabButton name="skills" label="Kỹ năng" />
              <TabButton name="experience" label="Kinh nghiệm" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => window.open(project.demoUrl, '_blank')}
                        className="flex items-center text-blue-500 hover:text-blue-700 font-medium"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </button>
                      <button
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="flex items-center text-gray-600 hover:text-gray-900"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="bg-white rounded-xl shadow p-6">
              <div className="grid gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {skillList.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="bg-white rounded-xl shadow p-6">
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-4 border-blue-500"
                  >
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg text-gray-700 mb-2">{exp.company}</h4>
                    <p className="text-gray-500 mb-2">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;