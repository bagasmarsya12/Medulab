import { Users, UserCheck, BookOpen, Briefcase, Stethoscope, ClipboardList, TrendingUp, ShieldCheck } from 'lucide-react';
import { FeatureItem, ProgramItem, StepItem, TestimonialItem, InstructorItem, ScheduleItem, ExamQuestion } from './types';

export const FEATURES: FeatureItem[] = [
  {
    id: '1',
    title: 'Qualified Learning Partners',
    description: 'Diajar oleh dokter First Taker dengan IPK >3.25 dan skill komunikasi terbaik untuk penyampaian materi yang jelas.',
    icon: Users,
  },
  {
    id: '2',
    title: 'Course Director',
    description: 'Satu-satunya bimbel dengan Course Director di setiap kelas untuk memantau progress individual kamu secara intensif.',
    icon: UserCheck,
  },
  {
    id: '3',
    title: 'Structured Curriculum',
    description: 'Metode Pre-test, Materi, dan Post-test di setiap pertemuan untuk menjamin pemahaman konsep klinis.',
    icon: BookOpen,
  },
  {
    id: '4',
    title: 'Premium Learning Kits',
    description: 'Dapatkan Medical Reference Handbook, Question Bank terupdate, dan Tas eksklusif Medulab.',
    icon: Briefcase,
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'p1',
    title: 'Comprehensive Program',
    description: 'Program intensif 6 minggu untuk persiapan maksimal UKMPPD.',
    details: ['26x Pertemuan Materi', 'Pre-test & Post-test Harian', '5x Try Out Online (Real CBT)'],
    isPopular: true,
  },
  {
    id: 'p2',
    title: 'Intensive Program',
    description: 'Program padat materi dengan pembahasan soal komprehensif.',
    details: ['13x Pertemuan', 'Pembahasan 60 soal/hari', '2x Try Out Online'],
  },
  {
    id: 'p3',
    title: 'Drill Program',
    description: 'Fokus latihan soal untuk melatih kecepatan dan ketepatan.',
    details: ['10x Pertemuan', '100-150 soal/hari', '5x Try Out Online'],
  },
  {
    id: 'p4',
    title: 'Private Program',
    description: 'Kurikulum fleksibel (On-Demand) sesuai kebutuhanmu.',
    details: ['Waktu by Request', 'Materi Customized', '1-on-1 Mentoring'],
  },
  {
    id: 'p5',
    title: 'OSCE Program',
    description: 'Simulasi keterampilan klinis lengkap dengan alat peraga.',
    details: ['Simulasi 3 Hari', '12 Station Lengkap', 'Alat Peraga Medis'],
  },
];

export const LEARNING_STEPS: StepItem[] = [
  {
    id: 's1',
    number: '01',
    title: 'Pre-Test',
    description: 'Mengerjakan 35 soal awal untuk mengukur pemahaman dasar sebelum materi dimulai.',
    icon: ClipboardList,
  },
  {
    id: 's2',
    number: '02',
    title: 'Materi & Diskusi',
    description: 'Pembahasan mendalam oleh Learning Partner (First Taker) dengan studi kasus.',
    icon: BookOpen,
  },
  {
    id: 's3',
    number: '03',
    title: 'Post-Test',
    description: 'Evaluasi pemahaman akhir sesi untuk memastikan materi terserap dengan baik.',
    icon: ShieldCheck,
  },
  {
    id: 's4',
    number: '04',
    title: 'Progress Report',
    description: 'Laporan hasil mingguan dikirim ke peserta dan Course Director untuk monitoring.',
    icon: TrendingUp,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'dr. Sarah Wijaya',
    role: 'Alumni FK UI - Batch 2023',
    content: 'Materi yang disampaikan sangat terstruktur. Sangat terbantu dengan metode drill soal yang mirip banget sama aslinya. Terima kasih Medulab!',
    avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 't2',
    name: 'dr. Budi Santoso',
    role: 'Alumni FK UNAIR - Batch 2023',
    content: 'Mentor-mentornya keren abis! Penjelasannya detail tapi nggak bikin ngantuk. Suasana belajar di kelas juga kondusif banget.',
    avatarUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 't3',
    name: 'dr. Ami Putri',
    role: 'Alumni FK UGM - Batch 2024',
    content: 'Awalnya ragu bisa lulus one shot, tapi berkat bimbingan intensif dari Medulab, aku jadi makin pede dan akhirnya lulus dengan nilai memuaskan.',
    avatarUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
  },
];

export const INSTRUCTORS: InstructorItem[] = [
  {
    id: 'i1',
    name: 'dr. Kevin Sanjaya, Sp.JP',
    role: 'Cardiology Expert',
    university: 'Universitas Indonesia',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300',
    achievements: ['First Taker UKMPPD (Nilai 92.5)', 'IPK 3.85 (Cumlaude)', 'Best Graduate 2020'],
  },
  {
    id: 'i2',
    name: 'dr. Jessica Tan, Sp.A',
    role: 'Pediatric Expert',
    university: 'Universitas Gadjah Mada',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    achievements: ['First Taker UKMPPD', 'Juara 1 Olimpiade Kedokteran Nasional', 'Published Researcher'],
  },
  {
    id: 'i3',
    name: 'dr. Rizky Pratama',
    role: 'Internal Medicine',
    university: 'Universitas Airlangga',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
    achievements: ['First Taker UKMPPD', 'Asisten Dosen Anatomi', 'Speaker at National Medical Summit'],
  },
  {
    id: 'i4',
    name: 'dr. Maya Indah',
    role: 'Neurology Expert',
    university: 'Universitas Padjadjaran',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
    achievements: ['First Taker UKMPPD', 'IPK 3.90 (Cumlaude)', 'Best Research Paper Award'],
  },
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    id: 'sc1',
    date: '15 Mei 2025',
    time: '19.00 - 21.00 WIB',
    topic: 'Kardiologi: EKG Dasar & Aritmia',
    program: 'Comprehensive Batch 5',
    mentor: 'dr. Kevin Sanjaya, Sp.JP',
    status: 'Upcoming',
  },
  {
    id: 'sc2',
    date: '16 Mei 2025',
    time: '19.00 - 21.00 WIB',
    topic: 'Pulmonologi: Tuberkulosis & PPOK',
    program: 'Comprehensive Batch 5',
    mentor: 'dr. Rizky Pratama',
    status: 'Upcoming',
  },
  {
    id: 'sc3',
    date: '17 Mei 2025',
    time: '13.00 - 15.00 WIB',
    topic: 'Pediatri: Tumbuh Kembang Anak',
    program: 'Intensive Batch 3',
    mentor: 'dr. Jessica Tan, Sp.A',
    status: 'Upcoming',
  },
  {
    id: 'sc4',
    date: '18 Mei 2025',
    time: '09.00 - 12.00 WIB',
    topic: 'Try Out Online 1 (Simulasi CBT)',
    program: 'All Programs',
    mentor: 'Tim Akademik',
    status: 'Upcoming',
  },
  {
    id: 'sc5',
    date: '18 Mei 2025',
    time: '19.00 - 21.00 WIB',
    topic: 'Neurologi: Stroke & Cedera Kepala',
    program: 'Comprehensive Batch 5',
    mentor: 'dr. Maya Indah',
    status: 'Upcoming',
  },
];

export const EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 'q1',
    question: 'Seorang laki-laki 50 tahun datang dengan keluhan sesak napas yang memberat sejak 3 hari yang lalu. Pasien memiliki riwayat merokok 2 bungkus per hari selama 30 tahun. Pemeriksaan fisik menunjukkan barrel chest, perkusi hipersonor, dan auskultasi wheezing ekspirasi. Diagnosis yang paling mungkin adalah?',
    options: [
      'Asma Bronkial',
      'Penyakit Paru Obstruktif Kronik (PPOK)',
      'Tuberkulosis Paru',
      'Pneumothorax',
      'Efusi Pleura'
    ],
    correctAnswer: 1,
    explanation: 'Diagnosis PPOK (Penyakit Paru Obstruktif Kronik) didukung oleh usia pasien (>40 tahun), riwayat merokok berat (faktor risiko utama), dan temuan fisik khas seperti barrel chest dan wheezing. Asma biasanya bersifat reversibel dan onset usia muda.',
    optionExplanations: [
      'Asma biasanya onset usia muda (<40 tahun), bersifat reversibel, dan tidak disertai barrel chest. Riwayat merokok berat lebih mengarah ke PPOK.',
      'BENAR. Usia >40 tahun, riwayat merokok 60 pack-years (2 bungkus x 30 tahun), barrel chest, dan wheezing ekspirasi adalah tanda khas PPOK.',
      'TB Paru biasanya disertai batuk produktif >2 minggu, demam subfebris, keringat malam, dan penurunan berat badan. Tidak ada barrel chest.',
      'Pneumothorax ditandai dengan sesak mendadak, perkusi hipersonor, tapi suara napas menghilang (bukan wheezing) dan tidak ada barrel chest.',
      'Efusi pleura menunjukkan perkusi pekak (bukan hipersonor), suara napas menurun, dan fremitus menurun. Tidak sesuai dengan gambaran klinis.'
    ]
  },
  {
    id: 'q2',
    question: 'Wanita 25 tahun datang ke IGD dengan keluhan sesak napas mendadak. Pada pemeriksaan fisik didapatkan trakea terdorong ke kiri, dada kanan tertinggal, perkusi hipersonor pada dada kanan, dan suara napas menghilang pada dada kanan. Tekanan darah 80/50 mmHg. Tatalaksana awal yang paling tepat adalah?',
    options: [
      'WSD (Water Sealed Drainage)',
      'Oksigen Nasal Kanul 4 lpm',
      'Needle Decompression di ICS 2 linea midklavikula',
      'Foto Thorax AP',
      'Intubasi Endotrakeal'
    ],
    correctAnswer: 2,
    explanation: 'Gambaran klinis menunjukkan Tension Pneumothorax (deviasi trakea, hipotensi/syok obstruksi). Tatalaksana life-saving segera adalah Needle Decompression (thoracocentesis) sebelum pemasangan WSD.',
    optionExplanations: [
      'WSD adalah terapi definitif, namun pada tension pneumothorax dengan syok, needle decompression harus dilakukan TERLEBIH DAHULU sebagai tindakan life-saving.',
      'Oksigen saja tidak mengatasi masalah utama (tekanan udara berlebih di rongga pleura). Pasien dalam kondisi syok obstruktif yang memerlukan dekompresi segera.',
      'BENAR. Tension pneumothorax dengan tanda syok (TD 80/50) memerlukan needle decompression SEGERA di ICS 2 linea midklavikula sebagai tindakan life-saving.',
      'Foto thorax akan memperlambat tatalaksana. Diagnosis tension pneumothorax adalah diagnosis KLINIS dan memerlukan intervensi SEGERA tanpa menunggu konfirmasi radiologi.',
      'Intubasi dapat memperburuk kondisi karena ventilasi tekanan positif akan meningkatkan tekanan intrapleura. Dekompresi harus dilakukan terlebih dahulu.'
    ]
  },
  {
    id: 'q3',
    question: 'Seorang anak laki-laki usia 5 tahun dibawa ibunya dengan keluhan batuk menggonggong (barking cough) dan suara serak. Pada pemeriksaan fisik didapatkan stridor inspirasi. Rontgen leher menunjukkan "Steeple sign". Diagnosis yang paling mungkin adalah?',
    options: [
      'Epiglotitis',
      'Croup (Laringotrakeobronkitis)',
      'Abses Peritonsil',
      'Benda Asing Saluran Napas',
      'Trakeitis Bakterial'
    ],
    correctAnswer: 1,
    explanation: 'Croup (Laringotrakeobronkitis) khas ditandai dengan batuk menggonggong (barking cough), suara serak, dan stridor inspirasi. Gambaran radiologis "Steeple sign" (penyempitan subglotis) sangat sugestif untuk Croup.',
    optionExplanations: [
      'Epiglotitis ditandai dengan "tripod position", drooling, demam tinggi, dan tidak ada batuk. Gambaran radiologis menunjukkan "thumb sign", bukan steeple sign.',
      'BENAR. Batuk menggonggong (barking cough), suara serak, stridor inspirasi, dan steeple sign (penyempitan subglotis) adalah tanda patognomonik Croup.',
      'Abses peritonsil biasanya pada remaja/dewasa, ditandai dengan trismus, uvula terdorong kontralateral, dan "hot potato voice", bukan batuk menggonggong.',
      'Benda asing saluran napas onset mendadak dengan riwayat tersedak, biasanya tanpa suara serak atau batuk menggonggong. Tidak ada steeple sign.',
      'Trakeitis bakterial lebih berat dengan demam tinggi, tampak toksik, dan tidak responsif terhadap terapi Croup. Tidak menunjukkan steeple sign.'
    ]
  },
  {
    id: 'q4',
    question: 'Pasien laki-laki 65 tahun mengeluh nyeri dada kiri menjalar ke rahang sejak 2 jam lalu. EKG menunjukkan ST elevasi di lead II, III, dan aVF. Pembuluh darah koroner mana yang kemungkinan besar mengalami oklusi?',
    options: [
      'Left Anterior Descending (LAD)',
      'Left Circumflex (LCx)',
      'Right Coronary Artery (RCA)',
      'Left Main (LM)',
      'Posterior Descending Artery (PDA)'
    ],
    correctAnswer: 2,
    explanation: 'ST elevasi pada lead inferior (II, III, aVF) menunjukkan infark miokard dinding inferior, yang sebagian besar (80-90%) disuplai oleh Arteri Koroner Kanan (RCA).',
    optionExplanations: [
      'LAD menyuplai dinding anterior dan septum. Oklusi LAD akan menunjukkan ST elevasi di lead V1-V4 dan I, aVL (anterior/anteroseptal), bukan lead inferior.',
      'LCx menyuplai dinding lateral. Oklusi LCx menunjukkan ST elevasi di lead I, aVL, V5-V6 (lateral), bukan lead II, III, aVF.',
      'BENAR. RCA menyuplai dinding inferior jantung pada 80-90% populasi (right dominant). ST elevasi di lead II, III, aVF menunjukkan infark inferior akibat oklusi RCA.',
      'Left Main sangat jarang tersumbat. Jika terjadi, akan menunjukkan ST elevasi luas di banyak lead (anterior + lateral) dengan kondisi hemodinamik sangat tidak stabil.',
      'PDA adalah cabang terminal dari RCA (pada right dominant) atau LCx (pada left dominant). Namun jawaban yang lebih tepat adalah RCA sebagai arteri utama.'
    ]
  },
  {
    id: 'q5',
    question: 'Pasien dengan diagnosis TB Paru kasus baru BTA positif. Regimen pengobatan fase intensif yang tepat adalah?',
    options: [
      '2RHZE',
      '4RH',
      '2RHZ',
      '2RHZE / 4RH3',
      '5RHZE'
    ],
    correctAnswer: 0,
    explanation: 'Sesuai pedoman nasional dan WHO, pengobatan TB paru kasus baru (Kategori 1) dimulai dengan fase intensif selama 2 bulan terdiri dari Rifampisin, Isoniazid, Pirazinamid, dan Etambutol (2RHZE).',
    optionExplanations: [
      'BENAR. Sesuai pedoman WHO dan Kemenkes RI, TB kasus baru (Kategori 1) menggunakan 2RHZE (fase intensif 2 bulan) dilanjutkan 4RH (fase lanjutan).',
      '4RH adalah regimen fase LANJUTAN, bukan fase intensif. Fase intensif memerlukan 4 obat (RHZE) untuk membunuh kuman secara cepat.',
      '2RHZ tidak lengkap karena tidak ada Etambutol (E). Etambutol penting untuk mencegah resistensi dan meningkatkan efektivitas terapi fase intensif.',
      'Ini adalah regimen LENGKAP (intensif + lanjutan), bukan hanya fase intensif. Pertanyaan menanyakan fase intensif saja, yaitu 2RHZE.',
      '5RHZE terlalu lama untuk fase intensif. Durasi standar fase intensif adalah 2 bulan, bukan 5 bulan. Durasi 5 bulan tidak sesuai pedoman.'
    ]
  }
];