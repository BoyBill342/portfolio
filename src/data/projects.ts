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
    title: "God's Will Remains",
    description:
      'A Unity VR game with a low-poly visual style, slow pacing, and an interactable environment focused on fighting zombies.',
    techStack: ['Unity', 'C#', 'VR', 'Low Poly'],
    imageVariant: 'vr-remains',
    previewVideoUrl: 'https://www.youtube.com/embed/2Pbreav7fC0',
    previewPrimaryMedia: 'video',
    previewImages: [],
    isWide: true,
    actions: [
      {
        kind: 'github',
        label: 'GitHub',
        href: null,
      },
    ],
  },
  {
    title: 'Arcade Mania',
    description:
      'A retro neon arcade social world built for VIVERSE, where players explore a game hall, play mini-games, and earn coins for rewards. I placed 5th in the competition with this project. A later platform update broke the scripts, so the current build is limited to world exploration.',
    techStack: ['PlayCanvas', 'JavaScript', 'VIVERSE', 'Mini-games'],
    imageVariant: 'screenshot-gallery',
    previewImages: [
      '/projects/viverse/arcade-lobby.png',
      '/projects/viverse/arcade-chaser.png',
      '/projects/viverse/arcade-jackpot.png',
    ],
    actions: [
      {
        kind: 'play',
        label: 'Play Now',
        href: 'https://www.viverse.com/dbCxYzg',
      },
    ],
  },
  {
    title: 'Happy Forest Trip',
    description:
      'A short VIVERSE demo built in under 5 hours that opens with a cheerful forest mood before pivoting into a horror chase. The pacing shift was the core design hook for turning a lighthearted walk into a hidden scare experience.',
    techStack: ['PlayCanvas', 'JavaScript', 'VIVERSE', 'Horror Pacing'],
    imageVariant: 'screenshot-gallery',
    previewImages: [
      '/projects/viverse/forest-happy.png',
      '/projects/viverse/forest-hell.png',
      '/projects/viverse/forest-entity.png',
    ],
    actions: [
      {
        kind: 'play',
        label: 'Play Now',
        href: 'https://www.viverse.com/myvXTkJ',
      },
    ],
  },
];