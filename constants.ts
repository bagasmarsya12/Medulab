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
  // --- EXISTING QUESTIONS 1-5 ---
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
  },

  // --- NEW QUESTIONS 6-10 ---
  {
    id: 'q6',
    question: 'Seorang wanita 30 tahun mengeluh nyeri perut kanan bawah yang semakin memberat. Pada pemeriksaan fisik didapatkan nyeri tekan titik McBurney, Rovsing sign (+), dan Psoas sign (+). Tatalaksana definitif yang paling tepat adalah?',
    options: [
      'Pemberian Antibiotik Intravena',
      'Observasi di Rumah Sakit',
      'Apendektomi',
      'Pemberian Analgesik',
      'CT Scan Abdomen'
    ],
    correctAnswer: 2,
    explanation: 'Gambaran klinis (nyeri McBurney, Rovsing sign, Psoas sign) sangat khas untuk Apendisitis Akut. Tatalaksana definitif untuk apendisitis akut adalah pembedahan (apendektomi), baik secara terbuka maupun laparoskopi.',
    optionExplanations: [
      'Antibiotik hanya sebagai terapi ajuvan atau pada kasus early appendicitis tanpa komplikasi (tertentu), namun standar emas definitif tetap pembedahan.',
      'Observasi hanya dilakukan jika diagnosis meragukan. Pada pasien ini tanda klinis sudah sangat jelas mengarah ke apendisitis akut.',
      'BENAR. Apendektomi adalah terapi standar dan definitif untuk apendisitis akut guna mencegah perforasi dan peritonitis.',
      'Analgesik hanya meredakan gejala sementara dan dapat menyamarkan tanda klinis (masking), tidak mengobati penyebab.',
      'CT Scan adalah pemeriksaan penunjang untuk diagnosis, bukan tatalaksana.'
    ]
  },
  {
    id: 'q7',
    question: 'Laki-laki 70 tahun dibawa keluarga karena bicara pelo dan kelemahan anggota gerak kanan mendadak 3 jam yang lalu. Pasien memiliki riwayat fibrilasi atrium tidak terkontrol. Diagnosis yang paling mungkin adalah?',
    options: [
      'Stroke Hemoragik Intraserebral',
      'Stroke Iskemik Emboli',
      'Stroke Iskemik Trombotik',
      'Tumor Otak',
      'Transient Ischemic Attack (TIA)'
    ],
    correctAnswer: 1,
    explanation: 'Onset mendadak (akut) defisit neurologis fokal mengarah ke stroke. Riwayat fibrilasi atrium merupakan faktor risiko utama terbentuknya trombus di jantung yang dapat lepas menjadi emboli ke otak (Stroke Iskemik Kardioemboli).',
    optionExplanations: [
      'Stroke hemoragik biasanya disertai penurunan kesadaran, nyeri kepala hebat, dan riwayat hipertensi tidak terkontrol, bukan khas AF.',
      'BENAR. Fibrilasi atrium menyebabkan stasis darah di atrium, membentuk trombus yang bisa lepas menjadi emboli ke otak, menyebabkan stroke iskemik emboli.',
      'Stroke trombotik biasanya didahului gejala prodromal (TIA berulang), onset saat istirahat, dan terkait aterosklerosis, bukan AF.',
      'Tumor otak memiliki onset kronis progresif (perlahan memberat), bukan mendadak dalam hitungan jam.',
      'TIA gejala membaik sempurna dalam <24 jam. Pasien ini masih mengalami gejala setelah 3 jam, sehingga diagnosis kerja tetap Stroke sampai terbukti membaik.'
    ]
  },
  {
    id: 'q8',
    question: 'Wanita 45 tahun mengeluh sering berdebar-debar, banyak berkeringat, dan berat badan turun meski nafsu makan meningkat. Pemeriksaan fisik: eksoftalmos dan benjolan difus di leher yang ikut bergerak saat menelan. Hasil lab yang diharapkan adalah?',
    options: [
      'TSH meningkat, fT4 menurun',
      'TSH menurun, fT4 meningkat',
      'TSH normal, fT4 normal',
      'TSH meningkat, fT4 meningkat',
      'TSH menurun, fT4 menurun'
    ],
    correctAnswer: 1,
    explanation: 'Gejala klinis (berdebar, BB turun, nafsu makan naik, eksoftalmos, struma) sangat khas untuk Hipertiroidisme (Penyakit Graves). Pada hipertiroid primer, hormon tiroid (fT4/T4/T3) meningkat, yang menekan produksi TSH (feedback negatif), sehingga TSH rendah.',
    optionExplanations: [
      'Ini adalah gambaran Hipotiroidisme primer (kegagalan kelenjar tiroid memproduksi hormon).',
      'BENAR. Pada hipertiroidisme primer (seperti Graves), fT4 tinggi akan menekan hipofisis sehingga TSH menjadi rendah/tersupresi.',
      'Ini adalah kondisi Eutiroid.',
      'Kondisi ini jarang, terjadi pada Hipertiroidisme sekunder (misal tumor hipofisis penghasil TSH).',
      'Ini terjadi pada Hipotiroidisme sekunder (kegagalan hipofisis).'
    ]
  },
  {
    id: 'q9',
    question: 'Laki-laki 25 tahun jatuh dengan posisi tangan menumpu beban tubuh. Mengeluh nyeri dan bengkak pada pergelangan tangan kiri. Pemeriksaan radiologis menunjukkan fraktur radius distal dengan angulasi dorsal (seperti garpu makan). Apakah diagnosis dari gambar di atas?',
    images: ['https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200'], // Stable Unsplash URL for X-Ray
    options: [
      'Fraktur Smith',
      'Fraktur Colles',
      'Fraktur Monteggia',
      'Fraktur Galeazzi',
      'Fraktur Scaphoid'
    ],
    correctAnswer: 1,
    explanation: 'Fraktur Colles adalah fraktur radius distal dengan pergeseran fragmen distal ke arah dorsal dan radial, memberikan gambaran deformitas "dinner fork" (garpu makan). Ini terjadi akibat jatuh dengan tangan terextensi (FOOSH - Fall On Outstretched Hand).',
    optionExplanations: [
      'Fraktur Smith adalah kebalikan dari Colles (angulasi ke arah volar/palmar), biasanya akibat jatuh dengan tangan terfleksi.',
      'BENAR. Fraktur Colles khas dengan angulasi dorsal ("dinner fork deformity") pada radius distal.',
      'Fraktur Monteggia adalah fraktur ulna proksimal disertai dislokasi caput radius.',
      'Fraktur Galeazzi adalah fraktur radius distal disertai dislokasi sendi radioulnar distal (DRUJ).',
      'Fraktur Scaphoid biasanya nyeri di snuffbox anatomis, sering terlewat pada rontgen awal, tidak memberikan deformitas dinner fork.'
    ]
  },
  {
    id: 'q10',
    question: 'Seorang laki-laki 60 tahun datang dengan keluhan muncul bintil berair yang nyeri di dada kanan menjalar ke punggung, hanya pada satu sisi tubuh. Sebelumnya pasien merasa demam dan nyeri otot. Perhatikan gambar progresivitas lesi berikut. Diagnosis dan terapi antivirus yang tepat adalah?',
    images: [
       'https://images.unsplash.com/photo-1621899530235-327113d09a20?q=80&w=800', // Stable URL for vesicles
       'https://images.unsplash.com/photo-1580281658223-9b93f7d49b82?q=80&w=800', // Stable URL for rash on torso
       'https://images.unsplash.com/photo-1604882352758-4b7e875b1c67?q=80&w=800'  // Stable URL for crusted lesions
    ],
    options: [
      'Varicella - Acyclovir 5x800 mg selama 7 hari',
      'Herpes Zoster - Acyclovir 5x800 mg selama 7 hari',
      'Herpes Zoster - Acyclovir 5x200 mg selama 7 hari',
      'Dermatitis Venenata - Kortikosteroid topikal',
      'Herpes Simpleks - Acyclovir 5x200 mg selama 5 hari'
    ],
    correctAnswer: 1,
    explanation: 'Gambaran vesikel berkelompok dengan dasar eritema yang tersusun dermatomal (satu sisi, menjalar) khas untuk Herpes Zoster. Terapi standar untuk dewasa imunokompeten adalah Acyclovir 5x800 mg/hari selama 7 hari. Dosis 5x200 mg adalah untuk Herpes Simpleks.',
    optionExplanations: [
      'Varicella (cacar air) lesi menyebar ke seluruh tubuh (sentrifugal), polimorfik, tidak dermatomal.',
      'BENAR. Diagnosis Herpes Zoster (distribusi dermatomal). Dosis Acyclovir untuk Zoster adalah 5 x 800 mg (dosis tinggi).',
      'Dosis 5x200 mg terlalu rendah untuk Zoster, itu adalah dosis untuk Herpes Simpleks.',
      'Dermatitis venenata akibat kontak dengan racun serangga (tomcat), lesi biasanya linier ("kissing lesion"), tidak dermatomal.',
      'Herpes simpleks biasanya berulang di lokasi yang sama (misal bibir/genital), tidak menyebar luas secara dermatomal seperti Zoster.'
    ]
  }
];