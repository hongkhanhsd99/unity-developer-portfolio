import React, { useState } from 'react';
import { Github, Mail, ExternalLink, Facebook,Phone } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const avatarUrl = process.env.PUBLIC_URL + '/avatar.JPG';

  // Helper function to extract YouTube video ID
  const getYoutubeVideoId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const projects = [
    {
      title: "Brain Rush - Thinking Puzzle",
      technologies: ["Puzzle Game","Unity", "C#"],
      demoUrl: "https://youtu.be/L3NguBIeBBY?si=YVmNRXDtOXEAYgRE"
    },
    {
      title: "My Office - Magic Fever",
      technologies: ["Unity", "C#"],
      demoUrl: "https://www.youtube.com/watch?v=0ZSmS0TV9O8"
    },
    {
      title: "Tank On Box",
      technologies: ["Unity", "C#"],
      demoUrl: "https://www.youtube.com/watch?v=pdEpdwePDUM",
    },
    {
      title: "Imposter vs Monster - ZDefense",
      technologies: ["Unity", "C#"],
      demoUrl: "https://www.youtube.com/watch?v=J9GY3wdggLs",
    },
    {
      title: "Snake Attack IO",
      technologies: ["Unity", "C#"],
      demoUrl: "https://www.youtube.com/watch?v=T_KFNoFQVow",
    },
    {
      title: "Garden Princess: Dress Up ASMR",
      technologies: ["Unity", "C#"],
      demoUrl: "https://skich.app/es/games/garden-princess-dress-up-asmr",
    },
    {
      title: "Plant Clash: Shooting Battle",
      technologies: ["Unity", "C#"],
      demoUrl: "https://www.youtube.com/watch?v=e78sn1osWIU&t",
    },
     {
          title: "Brain Puzzle: Pirate Story",
          technologies: ["Unity", "C#"],
          demoUrl: "https://www.youtube.com/watch?v=QYmCSr3eUuM",
        },
    {
      title: "Wood Nut: Screws Puzzle",
      technologies: ["Unity", "C#"],
      demoUrl: "https://www.youtube.com/watch?v=5iqF8J8XZoY",
    },
    {
       title: "Star Girl: Life Story",
       technologies: ["Unity", "C#"],
       demoUrl: "https://www.youtube.com/watch?v=0bA1q1wHCqo",
    },
      {
          title: "Doll World: Build a story",
          technologies: ["Unity", "C#"],
          demoUrl: "https://www.youtube.com/watch?v=ui-0CMXXYlQ",
     },
     {
              title: "Supermarket Manager Story 3D",
              technologies: ["Unity", "C#"],
              demoUrl: "https://play.google.com/store/apps/details?id=com.Supermarket.Manager.Story",
     },
     {
     title: "Oh No! Help Sky Music Box Spurnki",
          technologies: ["Unity", "C#"],
         demoUrl: "https://www.youtube.com/watch?v=GxF9wKgy7MA",
     }
  ];

  const skills = {
    "Game Development": ["Unity Engine", "C#", "Game Design"],
    "Version Control": ["Git"],
    "Third-party Library": ["Applovin","Admob", "Adjust", "Firebase"],
    "Other": ["Performance Optimization"]
  };

  const experience = [
    {
      company: "Bounce Game Studio",
      position: "Unity Developer",
      period: "05/2022 - Hiện tại",
      description: "Phát triển và tối ưu hóa game mobile cho Android"
    },
    {
      company: "ABI Game Studio",
      position: "Intern Unity Developer",
      period: "05/2021 - 05/2022",
      description: "Tham gia các dự án game."
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
                  Lê Hồng Khanh
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-4">
                  Unity Developer
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl">
                  3+ năm kinh nghiệm phát triển game với Unity
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <button 
                    onClick={() => window.open('https://www.facebook.com/le.hongkhanh.1999', '_blank')}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <Facebook className="w-6 h-6" />
                    <span className="sr-only">Facebook Profile</span>
                  </button>
             
                  <button
                    onClick={() => window.location.href = 'mailto:hongkhanhsd99@gmail.com'}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <Mail className="w-6 h-6" />
                    <span className="sr-only">Email Contact</span>
                  </button>
                     <div className="flex items-center">
                                  <Phone className="w-4 h-4 mr-2" />
                                  <span>+84 365 729 850</span>
                                </div>
                </div>
              </div>
              <div className="mb-6 pb:6">
                <img
                  src={avatarUrl}
                  alt="Profile"
                  onError={(e) => {
                    console.error('Image failed to load');
                    e.target.onerror = null;
                    e.target.src = "/api/placeholder/200/200";
                  }}
                  className="w-36 h-44  rounded-lg ring-0 ring-gray-100 overflow-hidden"
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
                  {getYoutubeVideoId(project.demoUrl) ? (
                    <div className="relative w-full pt-[56.25%]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${getYoutubeVideoId(project.demoUrl)}`}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <img
                      src="/api/placeholder/400/200"
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
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
                      {project.demoUrl && (
                        <button
                          onClick={() => window.open(project.demoUrl, '_blank')}
                          className="flex items-center text-blue-500 hover:text-blue-700 font-medium"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </button>
                      )}
                      {project.githubUrl && (
                        <button
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className="flex items-center text-gray-600 hover:text-gray-900"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </button>
                      )}
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