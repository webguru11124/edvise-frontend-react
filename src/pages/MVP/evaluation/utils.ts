export const speakerOptions = [
  { id: 'all', label: 'All Speakers' },
  { id: 'teacher', label: 'Teacher' },
  { id: 'student', label: 'Student' },
  { id: 'both', label: 'Both' }
];

export const filterblooms = [
  { id: 'all', label: 'All Moments' },
  { id: 'creating', label: 'Creating' },
  { id: 'evaluating', label: 'Evaluating' },
  { id: 'analyzing', label: 'Analyzing' },
  { id: 'applying', label: 'Applying' },
  { id: 'remembering', label: 'Remembering' },
  { id: 'understanding', label: 'Understanding' },
  { id: 'none', label: 'None' }
];

export const speakers = {
  both: 'both',
  teacher: 'teacher',
  student: 'student'
};

export const getColorCodes = (key: string | boolean) => {
  switch (key) {
    case 'question':
      return 'rgb(190 242 100 / var(--tw-bg-opacity))';
    case 'evaluating':
      return '#ff9800';
    case 'analyzing':
      return '#fff176';
    case 'applying':
      return '#43a047';
    case 'understanding':
      return '#1e88e5';
    case 'remembering':
      return '#8E24AA';
    case 'none':
      return '#e0e0e0';
    case true:
      return 'rgb(190 242 100 / var(--tw-bg-opacity))';
    case false:
      return 'rgb(209 213 219 / var(--tw-bg-opacity))';
    case 'knowledge':
      return '#F4C550';
    case 'creating':
      return '#e53935';
    case 'both':
      return '#c084fc';
    case 'teacher':
      return '#42a5f5';
    case 'student':
      return '#F05467';
    default:
      return '#8EE16A';
  }
};

export const getBorderCodes = (key: string | boolean) => {
  switch (key) {
    case 'question':
      return 'rgb(190 242 100 / var(--tw-bg-opacity))';
    case 'evaluating':
      return '#ff980055';
    case 'analyzing':
      return '#fff17655';
    case 'applying':
      return '#43a04755';
    case 'understanding':
      return '#1e88e555';
    case 'remembering':
      return '#8E24AA55';
    case 'none':
      return '#e0e0e055';
    case true:
      return 'rgb(190 242 100 / var(--tw-bg-opacity))';
    case false:
      return 'rgb(209 213 219 / var(--tw-bg-opacity))';
    case 'knowledge':
      return '#F4C55055';
    case 'creating':
      return '#e5393555';
    case 'both':
      return '#CCFBF1';
    case 'teacher':
      return '#FFE4E6';
    case 'student':
      return '#E1EFFE';
    default:
      return '#8EE16A55';
  }
};

export const edviseTags = [
  { id: 'both', label: 'Both' },
  { id: 'teacher', label: 'Teacher' },
  { id: 'student', label: 'Student' }
];

export const blooms = [
  { id: 'creating', label: 'Creating' },
  { id: 'evaluating', label: 'Evaluating' },
  { id: 'analyzing', label: 'Analyzing' },
  { id: 'applying', label: 'Applying' },
  { id: 'remembering', label: 'Remembering' },
  { id: 'understanding', label: 'Understanding' },
  { id: 'none', label: 'None' }
];
