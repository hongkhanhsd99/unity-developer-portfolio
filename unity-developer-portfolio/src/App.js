import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Facebook,
  Gamepad2,
  GraduationCap,
  Mail,
  Phone,
  Play,
  Rocket,
  Smartphone,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';

const projects = [
  {
    title: 'Dreamory: Dream Room',
    technologies: ['Simulation', 'Puzzle', 'Unity', 'C#'],
    description:
      'Game unpacking và trang trí phòng trên mobile với hơn 500.000 lượt tải, kể chuyện thông qua những đồ vật và không gian sống.',
    googlePlayUrl:
      'https://play.google.com/store/apps/details?id=com.game.dreamory.dream.room.decor',
    appStoreUrl: 'https://apps.apple.com/app/id6752017697',
    youtubeUrl: 'https://www.youtube.com/watch?v=6-y7n_tAM5s',
    featured: true,
    accent: 'from-rose-400 to-violet-600',
  },
  {
    title: 'Jigsawdom Solitaire',
    technologies: ['Card Game', 'Puzzle', 'Unity', 'C#'],
    description:
      'Game puzzle thư giãn với gameplay ghép các thẻ bài thành một tấm hình hoàn chỉnh.',
    googlePlayUrl:
      'https://play.google.com/store/apps/details?id=com.skyrise.jigsaw.solitaire.puzzle',
    appStoreUrl: 'https://apps.apple.com/app/id6761818277',
    youtubeUrl: 'https://www.youtube.com/watch?v=yM0BWEo3ztM',
    featured: true,
    accent: 'from-amber-400 to-orange-600',
  },
  {
    title: 'Pixel Yarn: Sort Puzzle',
    technologies: ['Sort Puzzle', 'Pixel Art', 'Unity', 'C#'],
    description:
      'Game yarn sort kết hợp pixel art: sắp xếp các cuộn len theo màu để gỡ từng lớp sợi và hoàn thiện bức tranh.',
    googlePlayUrl:
      'https://play.google.com/store/apps/details?id=com.puzzleone.pixel.yarn.loop.puzzle',
    appStoreUrl: 'https://apps.apple.com/app/id6786139139',
    youtubeUrl: 'https://www.youtube.com/watch?v=gAbWBZtv5qM',
    accent: 'from-fuchsia-500 to-pink-600',
  },
  {
    title: 'Brain Rush – Thinking Puzzle',
    technologies: ['2D Puzzle', 'Unity', 'C#'],
    description: 'Game puzzle 2D trên mobile với hơn 1.000.000 lượt tải.',
    googlePlayUrl:
      'https://play.google.com/store/apps/details?id=bounce.Brain.Thingking',
    youtubeUrl: 'https://youtu.be/L3NguBIeBBY?si=YVmNRXDtOXEAYgRE',
    accent: 'from-sky-500 to-indigo-600',
  },
  {
    title: 'My Office - Magic Fever',
    technologies: ['Unity', 'C#'],
    demoUrl: 'https://www.youtube.com/watch?v=0ZSmS0TV9O8',
    accent: 'from-violet-500 to-fuchsia-600',
  },
  {
    title: 'Tank On Box',
    technologies: ['Unity', 'C#'],
    demoUrl: 'https://www.youtube.com/watch?v=pdEpdwePDUM',
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Imposter vs Monster - ZDefense',
    technologies: ['Unity', 'C#'],
    demoUrl: 'https://www.youtube.com/watch?v=J9GY3wdggLs',
    accent: 'from-orange-500 to-rose-600',
  },
  {
    title: 'Snake Attack IO',
    technologies: ['Unity', 'C#'],
    demoUrl: 'https://www.youtube.com/watch?v=T_KFNoFQVow',
    accent: 'from-lime-500 to-emerald-600',
  },
  {
    title: 'Garden Princess: Dress Up ASMR',
    technologies: ['Unity', 'C#'],
    demoUrl: 'https://skich.app/es/games/garden-princess-dress-up-asmr',
    accent: 'from-pink-400 to-purple-600',
  },
  {
    title: 'Plant Clash: Shooting Battle',
    technologies: ['Unity', 'C#'],
    demoUrl: 'https://www.youtube.com/watch?v=e78sn1osWIU&t',
    accent: 'from-green-500 to-lime-600',
  },
  {
    title: 'Brain Puzzle: Pirate Story',
    technologies: ['Unity', 'C#'],
    demoUrl: 'https://www.youtube.com/watch?v=QYmCSr3eUuM',
    accent: 'from-cyan-500 to-blue-700',
  },
  {
    title: 'Wood Nut: Screws Puzzle',
    technologies: ['Unity', 'C#'],
    demoUrl: 'https://www.youtube.com/watch?v=5iqF8J8XZoY',
    accent: 'from-amber-500 to-orange-700',
  },
  {
    title: 'Star Girl: Life Story',
    technologies: ['Unity', 'C#'],
    demoUrl: 'https://www.youtube.com/watch?v=0bA1q1wHCqo',
    accent: 'from-fuchsia-500 to-pink-600',
  },
  {
    title: 'Doll World: Build a story',
    technologies: ['Unity', 'C#'],
    demoUrl: 'https://www.youtube.com/watch?v=ui-0CMXXYlQ',
    accent: 'from-rose-400 to-violet-600',
  },
  {
    title: 'Supermarket Manager Story 3D',
    technologies: ['Unity', 'C#'],
    demoUrl: 'https://play.google.com/store/apps/details?id=com.Supermarket.Manager.Story',
    accent: 'from-yellow-400 to-orange-600',
  },
  {
    title: 'IQ Test: Escape Room',
    technologies: ['3D Puzzle', 'Unity', 'C#'],
    description: 'Game 3D giải đố IQ theo chủ đề escape room.',
    googlePlayUrl:
      'https://play.google.com/store/apps/details?id=com.IQ.Test.Escape.Room',
    youtubeUrl: 'https://www.youtube.com/watch?v=WdFAYtzvFjU',
    featured: true,
    accent: 'from-slate-500 to-blue-700',
  },
];

const featuredProjectOrder = [
  'Jigsawdom Solitaire',
  'Dreamory: Dream Room',
  'IQ Test: Escape Room',
];

const skillGroups = [
  {
    title: 'Unity & Gameplay',
    icon: Gamepad2,
    items: ['Unity Engine', 'C#', 'Gameplay Programming', 'Game 2D/3D'],
  },
  {
    title: 'SDK & Dịch vụ',
    icon: Rocket,
    items: ['AppLovin', 'AdMob', 'Adjust', 'Firebase'],
  },
  {
    title: 'Quy trình & Nền tảng',
    icon: Zap,
    items: ['Performance Optimization', 'Git', 'Android'],
  },
];

const experience = [
  {
    company: 'Sky Game Studio',
    position: 'Unity Developer',
    period: '03/2025 - Hiện tại',
    description:
      'Phát triển và hoàn thiện gameplay cho game mobile bằng Unity/C#; xây dựng playable game bằng Luna.',
  },
  {
    company: 'Bounce Game Studio',
    position: 'Unity Developer',
    period: '05/2022 - 03/2025',
    description:
      'Tham gia phát triển, hoàn thiện và phát hành game mobile 2D/3D; tối ưu hiệu năng trên thiết bị di động.',
  },
  {
    company: 'ABI Game Studio',
    position: 'Intern Unity Developer',
    period: '05/2021 - 05/2022',
    description: 'Tham gia phát triển các dự án game mobile 2D/3D bằng Unity.',
  },
];

const education = {
  major: 'Ngành Công nghệ Thông tin',
  school: 'Đại học Bách khoa Hà Nội',
  period: '2017 - 2021',
};

const getYoutubeVideoId = (url) => {
  if (!url) return null;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|shorts\/|watch\?v=))([^#&?]{11})/
  );
  return match ? match[1] : null;
};

const getProjectUrl = (project) =>
  project.youtubeUrl ||
  project.googlePlayUrl ||
  project.appStoreUrl ||
  project.demoUrl;

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mb-8 max-w-2xl md:mb-12">
    <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
        {description}
      </p>
    )}
  </div>
);

const MediaCover = ({ project, compact = false, onPlay }) => {
  const videoId = getYoutubeVideoId(project.youtubeUrl || project.demoUrl);
  const projectUrl = getProjectUrl(project);

  if (videoId) {
    return (
      <button
        type="button"
        onClick={() => onPlay(project, videoId)}
        className={`group relative block w-full overflow-hidden bg-slate-900 text-left ${
          compact ? 'aspect-[16/10]' : 'aspect-video'
        }`}
        aria-label={`Phát video demo ${project.title}`}
      >
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt={`Gameplay ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-600 shadow-xl transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
            <Play className="ml-1 h-6 w-6 fill-current" />
          </span>
        </span>
        <span className="absolute bottom-3 left-3 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          Gameplay video
        </span>
      </button>
    );
  }

  return (
    <a
      href={projectUrl}
      target="_blank"
      rel="noreferrer"
      className={`group relative flex w-full items-end overflow-hidden bg-gradient-to-br p-5 text-white ${
        project.accent
      } ${compact ? 'aspect-[16/10]' : 'aspect-video'}`}
      aria-label={`Mở trang demo ${project.title}`}
    >
      <span className="cover-grid absolute inset-0 opacity-40" />
      <Gamepad2 className="absolute -right-5 -top-5 h-32 w-32 rotate-12 opacity-20 transition duration-500 group-hover:rotate-0 group-hover:scale-110" />
      <span className="relative z-10">
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-white/80">
          Released game
        </span>
        <span className="block max-w-xs text-xl font-black leading-tight">
          {project.title}
        </span>
      </span>
      <ExternalLink className="absolute bottom-5 right-5 h-5 w-5 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
    </a>
  );
};

const ProjectLinks = ({ project, compact = false }) => {
  const links = [
    project.googlePlayUrl && {
      label: 'Google Play',
      url: project.googlePlayUrl,
      icon: Gamepad2,
      className: 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100',
    },
    project.appStoreUrl && {
      label: 'App Store',
      url: project.appStoreUrl,
      icon: Smartphone,
      className: 'border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200',
    },
    project.youtubeUrl && {
      label: 'YouTube',
      url: project.youtubeUrl,
      icon: Play,
      className: 'border-red-200 bg-red-50 text-red-700 hover:bg-red-100',
    },
    project.demoUrl && {
      label: 'Demo',
      url: project.demoUrl,
      icon: ExternalLink,
      className: 'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100',
    },
  ].filter(Boolean);

  return (
    <div className={`flex flex-wrap ${compact ? 'gap-2' : 'gap-2.5'}`}>
      {links.map(({ label, url, icon: Icon, className }) => (
        <a
          key={`${project.title}-${label}`}
          href={url}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-lg border font-bold transition ${className} ${
            compact ? 'px-2.5 py-1.5 text-xs' : 'px-3.5 py-2 text-sm'
          }`}
        >
          <Icon className="h-4 w-4" /> {label}
        </a>
      ))}
    </div>
  );
};

const FeaturedProject = ({ project, onPlay }) => (
  <article className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <MediaCover project={project} onPlay={onPlay} />
    <div className="p-6 md:p-7">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
          Dự án nổi bật
        </span>
        <span className="text-sm font-medium text-slate-500">Unity Developer</span>
      </div>
      <h3 className="text-2xl font-black tracking-tight text-slate-950">
        {project.title}
      </h3>
      <p className="mt-3 leading-6 text-slate-600">
        {project.description ||
          'Dự án game mobile đã phát hành, tham gia phát triển và hoàn thiện bằng Unity/C#.'}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700"
          >
            {technology}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <ProjectLinks project={project} />
      </div>
    </div>
  </article>
);

const VideoModal = ({ video, onClose }) => {
  useEffect(() => {
    if (!video) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Video demo ${video.title}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-5xl">
        <div className="mb-3 flex items-center justify-between gap-4 text-white">
          <h2 className="truncate text-lg font-bold md:text-xl">{video.title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
            aria-label="Đóng video"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const avatarUrl = `${process.env.PUBLIC_URL}/avatar.JPG`;
  const featuredProjects = useMemo(
    () =>
      projects
        .filter((project) => project.featured)
        .sort(
          (firstProject, secondProject) =>
            featuredProjectOrder.indexOf(firstProject.title) -
            featuredProjectOrder.indexOf(secondProject.title)
        ),
    []
  );
  const otherProjects = useMemo(
    () => projects.filter((project) => !project.featured),
    []
  );

  const playVideo = (project, id) => {
    setActiveVideo({ title: project.title, id });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8fb] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Về đầu trang">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white">
              LK
            </span>
            <span className="hidden text-sm font-extrabold tracking-tight text-slate-900 sm:block">
              Lê Hồng Khanh
            </span>
          </a>
          <nav className="flex items-center gap-4 text-sm font-bold text-slate-600 md:gap-7" aria-label="Điều hướng chính">
            <a className="transition hover:text-blue-600" href="#projects">
              Dự án
            </a>
            <a className="hidden transition hover:text-blue-600 sm:block" href="#experience">
              Kinh nghiệm
            </a>
            <a className="transition hover:text-blue-600" href="#contact">
              Liên hệ
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20">
          <div className="hero-glow absolute inset-x-0 top-0 -z-10 mx-auto h-[580px] max-w-7xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Unity Developer · Mobile Games
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.045em] text-slate-950 md:text-7xl">
                Xây dựng gameplay
                <span className="block text-blue-600">mượt mà và cuốn hút.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Tôi là <strong className="text-slate-900">Lê Hồng Khanh</strong>,
                Unity Developer với hơn 5 năm kinh nghiệm phát triển, hoàn thiện
                và tối ưu game mobile 2D/3D bằng Unity và C#.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Xem dự án <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="mailto:hongkhanhsd99@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400"
                >
                  <Mail className="h-5 w-5" /> Gửi email
                </a>
              </div>
              <dl className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 py-5">
                <div className="pr-4">
                  <dt className="text-sm font-medium text-slate-500">Kinh nghiệm</dt>
                  <dd className="mt-1 text-2xl font-black text-slate-950">5+ năm</dd>
                </div>
                <div className="px-4 md:px-7">
                  <dt className="text-sm font-medium text-slate-500">Game tiêu biểu</dt>
                  <dd className="mt-1 text-2xl font-black text-slate-950">16</dd>
                </div>
                <div className="pl-4 md:pl-7">
                  <dt className="text-sm font-medium text-slate-500">Nền tảng</dt>
                  <dd className="mt-1 text-2xl font-black text-slate-950">Mobile</dd>
                </div>
              </dl>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-2xl shadow-slate-900/10">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100">
                  <img
                    src={avatarUrl}
                    alt="Lê Hồng Khanh - Unity Developer"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent px-6 pb-6 pt-20 text-white">
                    <p className="text-2xl font-black">Lê Hồng Khanh</p>
                    <p className="mt-1 text-sm font-medium text-white/75">
                      Unity Developer · Hà Nội, Việt Nam
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl md:-left-10">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Code2 className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-slate-400">
                    Core stack
                  </span>
                  <span className="font-black text-slate-900">Unity · C#</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 bg-white px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Selected work"
              title="Dự án nổi bật"
              description="Một số game mobile tiêu biểu tôi đã tham gia phát triển. Video chỉ được tải khi bạn bấm xem để trang luôn nhanh và nhẹ."
            />
            <div className="grid gap-7 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <FeaturedProject key={project.title} project={project} onPlay={playVideo} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Shipped titles"
              title="Các game khác đã tham gia"
              description="Những sản phẩm khác được trình bày gọn để nhà tuyển dụng có thể xem nhanh toàn bộ kinh nghiệm phát hành game."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <MediaCover project={project} compact onPlay={playVideo} />
                  <div className="p-5">
                    <h3 className="text-lg font-black leading-snug text-slate-950">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm font-semibold text-slate-500">Unity Developer</p>
                    <div className="mt-4">
                      <ProjectLinks project={project} compact />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 bg-slate-950 px-5 py-20 text-white md:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Experience
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Hơn 5 năm làm game mobile
              </h2>
              <p className="mt-5 max-w-lg leading-7 text-slate-400">
                Kinh nghiệm xuyên suốt từ thực tập, phát triển sản phẩm đến hoàn thiện gameplay và playable game.
              </p>
            </div>
            <div className="space-y-5">
              {experience.map((item, index) => (
                <article
                  key={`${item.company}-${item.period}`}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-6 md:p-8"
                >
                  <span className="absolute right-6 top-6 text-4xl font-black text-white/[0.06]">
                    0{index + 1}
                  </span>
                  <p className="text-sm font-bold uppercase tracking-wider text-blue-400">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-2xl font-black">{item.position}</h3>
                  <p className="mt-1 font-bold text-slate-300">{item.company}</p>
                  <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Capabilities"
              title="Kỹ năng chuyên môn"
              description="Bộ công cụ tập trung cho quá trình xây dựng, phát hành và tối ưu game mobile."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <article key={group.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-black text-slate-950">{group.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 font-medium text-slate-600">
                          <Sparkles className="h-4 w-4 shrink-0 text-blue-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center md:p-8">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <GraduationCap className="h-7 w-7" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Học vấn</p>
                <h3 className="mt-1 text-xl font-black text-slate-950">{education.major}</h3>
                <p className="mt-1 text-slate-600">
                  {education.school} · {education.period}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-blue-600 px-6 py-12 text-white shadow-2xl shadow-blue-600/20 md:px-12 md:py-16">
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">Contact</p>
                <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
                  Cùng xây dựng một trải nghiệm game đáng nhớ.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                  Tôi sẵn sàng trao đổi về cơ hội Unity Developer và các dự án game mobile.
                </p>
              </div>
              <a
                href="mailto:hongkhanhsd99@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-black text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Liên hệ ngay <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-7 text-sm font-semibold text-blue-50 sm:flex-row sm:items-center sm:gap-8">
              <a className="inline-flex items-center gap-2 hover:text-white" href="mailto:hongkhanhsd99@gmail.com">
                <Mail className="h-4 w-4" /> hongkhanhsd99@gmail.com
              </a>
              <a className="inline-flex items-center gap-2 hover:text-white" href="tel:+84365729850">
                <Phone className="h-4 w-4" /> +84 365 729 850
              </a>
              <a
                className="inline-flex items-center gap-2 hover:text-white"
                href="https://www.facebook.com/le.hongkhanh.1999"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="h-4 w-4" /> Facebook
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-7 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Lê Hồng Khanh. Unity Developer Portfolio.</p>
          <p className="inline-flex items-center gap-2">
            <BriefcaseBusiness className="h-4 w-4" /> Unity · C# · Mobile Games
          </p>
        </div>
      </footer>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
};

export default Portfolio;
