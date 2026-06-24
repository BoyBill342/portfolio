export const featuredProject = {
  title: 'VR Device Automation Platform',
  badge: 'Featured Project',
  summary:
    'A modular platform for accelerating VR device validation, repeatable Android device checks, and QA workflow automation.',
  overview:
    'The platform centralizes device control, log capture, scenario playback, and quick sanity checks into one operator-friendly workflow.',
  problem:
    'Manual VR QA cycles were slow, error-prone, and difficult to repeat consistently across many Android device states and headset scenarios.',
  solution:
    'A desktop-first automation console that orchestrates device commands, collects evidence, and reduces the time needed to validate common release paths.',
  architecture:
    'A layered design separates orchestration, device communication, reporting, and operator controls so the system stays maintainable as test coverage grows.',
  features: [
    'Device discovery and session-aware command execution',
    'Scenario-based test orchestration',
    'Structured logs and artifact collection',
    'Quick launch shortcuts for repeatable QA tasks',
    'Clear operator feedback for pass/fail states',
  ],
  challenges: [
    'Handling flaky device connectivity without interrupting the operator flow',
    'Keeping the interface fast while collecting status updates in real time',
    'Designing the tool to stay generic across Android devices and VR setups',
  ],
  lessons: [
    'Good QA tooling should remove friction instead of adding more surfaces to manage.',
    'Automation works best when it complements manual judgment rather than replacing it entirely.',
    'A consistent architecture makes it easier to add new device scenarios later.',
  ],
  roadmap: [
    'Add richer device presets and saved workflows',
    'Expand reporting with searchable history',
    'Introduce AI-assisted triage suggestions',
  ],
};

export const projects = [
  {
    title: 'VR Zombie Shooter',
    description:
      'A Unity-based VR shooter demo focused on interaction feel, scene feedback, and enemy pacing.',
    techStack: ['Unity', 'C#', 'VR', 'Gameplay'],
    imageVariant: 'vr-shooter',
    githubUrl: null,
    demoUrl: null,
  },
  {
    title: 'Android QA Command Center',
    description:
      'Placeholder concept for a lightweight desktop panel that groups ADB, logs, and fastboot actions.',
    techStack: ['Python', 'Tkinter', 'ADB', 'Fastboot'],
    imageVariant: 'command-center',
    githubUrl: null,
    demoUrl: null,
  },
  {
    title: 'AI-Assisted Test Notes',
    description:
      'Placeholder concept for turning raw QA notes into structured summaries and bug report drafts.',
    techStack: ['Python', 'AI', 'Automation'],
    imageVariant: 'ai-notes',
    githubUrl: null,
    demoUrl: null,
  },
];