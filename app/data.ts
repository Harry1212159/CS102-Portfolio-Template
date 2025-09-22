type Project = {
  name: string
  description: string
  link: string
  video?: string | null
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const EMAIL = 'trungnguyenthe1212@gmail.com'

export const WEB_TITLE = 'Name - Personal Website'
export const WEB_DESCRIPTION =
  'A personal website showcasing my work and projects.'
export const FOOTER_COPYRIGHT = '© 2025 Nguyen The Trung.'
export const FOOTER_LINK = 'https://github.com/Harry1212159'

export const NAME = 'Nguyen The Trung'
export const JOB_TITLE = 'Unemployment status'
export const DESCRIPTION = 'I am trying to be an cybersecurity engineer and developer'

export const PROJECTS: Project[] = [
  {
    name: 'Certificate Authority Simulator',
    description:
      'Simulated CA operations, including certificate issuance and revocation using OpenSSL.',
    link: 'https://github.com/Harry1212159/CA_simulator',
    video:
      '',
    id: 'project1',
  },
  {
    name: 'Web Security Vulnerabilities Report (PortSwigger)',
    description: 'Simulated and mitigated common web vulnerabilities (XSS, SQLi, CSRF) using PortSwigger Academy.',
    link: 'https://github.com/Harry1212159/Web-Security',
    video:
      '',
    id: 'project2',
  },
  {
    name: 'Security System Simulation Application',
    description: 'Built a desktop app simulating secure systems with MFA, RSA/AES encryption, digital signatures, and role-based access.',
    link: 'https://github.com/BeKhanhCute2004/Project1---Computer-Security/tree/final',
    video: '',
    id: 'project3'
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [


]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'My first blog',
    description: 'How Pokemon exist',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/Harry1212159',
  },
  {
    label: 'linkedin',
    link: 'https://linkedin.com/in/nguy%E1%BB%85n-trung-9533b22a4/'
  }
]
