export const featuredProject = {
  title: 'Automation Testing Script',
  badge: 'Featured Project',
  summary:
    'Python automation tooling built to streamline repetitive QA workflows, reduce manual ADB work, and accelerate reporting for validation tasks.',
  overview:
    'A focused automation toolkit that bundles repetitive test steps, parsing, log collection, and report generation into a repeatable QA workflow.',
  problem:
    'Stress-test preparation and repeated device commands took too much manual effort, slowing down validation cycles and making results harder to reproduce consistently.',
  solution:
    'Built Python scripts that automate data parsing, log collection, and report generation while reducing repetitive ADB command execution for the QA team.',
  architecture:
    'The workflow separates command orchestration, artifact capture, data parsing, and reporting so individual steps can evolve without breaking the rest of the toolchain.',
  features: [
    'Automated repetitive QA workflows with Python scripts',
    'Collected logs and parsed validation data automatically',
    'Generated reports for stress-test runs with less manual handling',
    'Reduced repeated ADB command execution through scripting',
    'Cut report preparation time by approximately 75%',
  ],
  challenges: [
    'Normalizing outputs from repeated test runs into a format suitable for reporting',
    'Keeping automation flexible enough for evolving QA scenarios and device states',
    'Reducing operator effort without hiding important validation signals',
  ],
  lessons: [
    'QA automation is most effective when it targets repetitive friction rather than forcing every test into full automation.',
    'Well-structured logs and parsing pipelines are as valuable as the automated actions themselves.',
    'Small workflow improvements compound quickly when they are used every test cycle.',
  ],
  roadmap: [
    'Expand scenario coverage for additional validation routines',
    'Improve report formatting for faster team review',
    'Add more reusable command wrappers for Android and XR test flows',
  ],
};

export const projects = [
  {
    title: 'VIVERSE Browser Game',
    description:
      'Placed 4th in an internal VIVERSE Game Competition with JavaScript gameplay systems for coin collection, purchasing, enemy AI, and event triggers.',
    techStack: ['PlayCanvas', 'JavaScript', 'VIVERSE', 'Game Systems'],
    imageVariant: 'browser-game',
    githubUrl: null,
    demoUrl: null,
  },
  {
    title: 'VR Zombie Shooter',
    description:
      'A university award-winning VR project built in C# with player health, animation integration, save and load, particle effects, and VR interaction systems.',
    techStack: ['Unity', 'C#', 'VR', 'Gameplay'],
    imageVariant: 'vr-shooter',
    githubUrl: null,
    demoUrl: null,
  },
];