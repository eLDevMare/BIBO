const pertanyaan = [
    { question: "Fotosintesis adalah proses di mana tumbuhan mengubah energi matahari menjadi energi kimia dalam bentuk glukosa.", answer: true },
    { question: "Semua makhluk hidup memerlukan oksigen untuk bertahan hidup.", answer: false },
    { question: "Daur nitrogen melibatkan proses fiksasi nitrogen oleh bakteri tanah.", answer: true },
    { question: "Rantai makanan selalu dimulai dengan produsen.", answer: true },
    { question: "Hewan karnivora hanya memakan tumbuhan.", answer: false },
    { question: "Ekosistem hanya terdiri dari komponen biotik.", answer: false },
    { question: "Interaksi antara dua spesies di mana satu spesies diuntungkan dan spesies lain dirugikan disebut komensalisme.", answer: false },
    { question: "Fotosintesis terjadi di kloroplas sel tumbuhan.", answer: true },
    { question: "Pengurai memainkan peran penting dalam mengembalikan nutrisi ke tanah.", answer: true },
    { question: "Konsumen primer dalam rantai makanan biasanya adalah herbivora.", answer: true },
    { question: "Adaptasi adalah proses di mana makhluk hidup mengalami perubahan fisik atau perilaku untuk bertahan hidup di lingkungannya.", answer: true },
    { question: "Efek rumah kaca disebabkan oleh penumpukan gas seperti karbon dioksida di atmosfer.", answer: true },
    { question: "Populasi adalah kelompok individu dari spesies yang sama yang hidup di tempat yang sama pada waktu yang sama.", answer: true },
    { question: "Habitat adalah tempat hidup yang spesifik untuk suatu organisme.", answer: true },
    { question: "Perubahan iklim tidak mempengaruhi distribusi makhluk hidup di bumi.", answer: false },
    { question: "Simbiosis adalah interaksi antara dua atau lebih spesies yang hidup bersama dalam jangka waktu lama.", answer: true },
    { question: "Spesies invasif adalah spesies asli yang mendukung keseimbangan ekosistem lokal.", answer: false },
    { question: "Rantai makanan dan jaring-jaring makanan menggambarkan hubungan makan-memakan dalam ekosistem.", answer: true },
    { question: "Suatu ekosistem yang seimbang memiliki lebih banyak produsen daripada konsumen.", answer: true },
    { question: "Polusi hanya berdampak pada komponen biotik dalam ekosistem.", answer: false },
    { question: "Bernapas adaralah proses menghirup oksigen.", answer: true },
    { question: "Manusia Bernapas dengan paru paru.", answer: true },
    { question: "oksigen adaah CO2.", answer: false },
    { question: "Makhluk hidup bernafas dengan paru paru.", answer: false },
    { question: "Semua makhluk hidup bergerak meskipun tidak berpindah tempat.", answer: true },
    { question: "Air mendidih pada suhu 100 derajat Celsius pada tekanan atmosfer standar.", answer: true },
    { question: "Semua zat padat memiliki titik leleh yang sama.", answer: false },
    { question: "Zat cair dapat berubah menjadi gas melalui proses penguapan.", answer: true },
 
    { question: "Sublimasi adalah perubahan dari zat padat langsung menjadi gas tanpa melalui fase cair.", answer: true },
    { question: "Proses pembakaran merupakan reaksi kimia yang bersifat endotermis.", answer: false },
    { question: "Perubahan fisika adalah perubahan yang tidak menghasilkan zat baru.", answer: true },
    { question: "Proses karat pada besi merupakan contoh perubahan kimia.", answer: true },
    { question: "Pada perubahan kimia, massa total zat sebelum dan sesudah reaksi tetap sama.", answer: true },
    { question: "Gas nitrogen mudah terbakar di udara.", answer: false },
    { question: "Zat dengan titik leleh yang rendah cenderung berada dalam fase cair pada suhu kamar.", answer: true },
    { question: "Pelelehan es merupakan contoh perubahan fisika.", answer: true },
    { question: "Campuran heterogen adalah campuran yang komposisinya seragam.", answer: false },
    { question: "Air adalah contoh senyawa kimia.", answer: true },
    { question: "Pelarutan garam dalam air merupakan perubahan kimia.", answer: false },
    { question: "Asam dan basa dapat bereaksi untuk membentuk garam dan air.", answer: true },
    { question: "Perubahan wujud dari gas menjadi cair disebut kondensasi.", answer: true },
    { question: "Korosi pada logam hanya terjadi pada lingkungan basah.", answer: false },
    { question: "Sifat fisika suatu zat dapat diamati tanpa mengubah komposisi zat tersebut.", answer: true },
    { question: "Panas yang dilepaskan atau diserap selama reaksi kimia disebut kalor reaksi.", answer: true },
    { question: "Pembekuan air adalah contoh perubahan kimia.", answer: false },
    { question: "Energi tidak dapat diciptakan atau dimusnahkan, hanya dapat diubah bentuknya.", answer: true },
    { question: "Energi kinetik adalah energi yang dimiliki benda karena gerakannya.", answer: true },
    { question: "Energi potensial gravitasi bergantung pada massa, gravitasi, dan ketinggian benda.", answer: true },
    { question: "Hukum kekekalan energi menyatakan bahwa total energi dalam sistem tertutup tetap konstan.", answer: true },
    { question: "Energi panas dapat berpindah melalui konduksi, konveksi, dan radiasi.", answer: true },
    { question: "Energi kimia adalah energi yang tersimpan dalam ikatan kimia senyawa.", answer: true },
    { question: "Energi listrik dihasilkan dari pergerakan elektron.", answer: true },
    { question: "Sumber energi terbarukan termasuk matahari, angin, dan air.", answer: true },
    { question: "Pembakaran bahan bakar fosil adalah sumber energi yang ramah lingkungan.", answer: false },
    { question: "Energi nuklir dihasilkan dari proses fusi dan fisi nuklir.", answer: true },
    { question: "Energi mekanik adalah jumlah energi kinetik dan potensial dalam sistem.", answer: true },
    { question: "Energi kalor mengalir dari benda yang lebih panas ke benda yang lebih dingin.", answer: true },
    { question: "Efisiensi mesin adalah perbandingan antara energi yang dihasilkan dengan energi yang digunakan.", answer: true },
    { question: "Panel surya mengubah energi panas menjadi energi listrik.", answer: false },
    { question: "Energi potensial elastis adalah energi yang tersimpan pada benda yang diregangkan atau dikompresi.", answer: true },
    { question: "Gesekan selalu mengubah energi kinetik menjadi energi potensial.", answer: false },
    { question: "Kincir angin mengubah energi kinetik angin menjadi energi listrik.", answer: true },
    { question: "Energi geotermal berasal dari panas yang tersimpan di dalam bumi.", answer: true },
    { question: "energi nuklir adalah energi akibat reaksi bom tangan.", answer: false },

    { question: "Bumi adalah planet ketiga dari Matahari dalam tata surya.", answer: true },
    { question: "Satelit alami Bumi adalah Bulan.", answer: true },
    { question: "Gravitasi di Bumi lebih rendah daripada di Bulan.", answer: false },
    { question: "Rotasi Bumi mengakibatkan pergantian siang dan malam.", answer: true },
    { question: "Bulan memiliki atmosfer yang tebal seperti Bumi.", answer: false },
    { question: "Matahari merupakan bintang terdekat dengan Bumi.", answer: true },
    { question: "Komet terdiri dari es, debu, dan batu.", answer: true },
    { question: "Mars memiliki atmosfer yang kaya akan oksigen.", answer: false },
    { question: "Galaksi Bima Sakti adalah galaksi spiral.", answer: true },
    { question: "Planet terbesar dalam tata surya adalah Jupiter.", answer: true },
    { question: "Sabuk asteroid terletak di antara Mars dan Jupiter.", answer: true },
    { question: "Awan Oort adalah daerah di luar tata surya yang berisi komet dan objek es.", answer: true },
    { question: "Saat gerhana matahari, Bumi berada di antara Matahari dan Bulan.", answer: false },
    { question: "Awan cumulonimbus adalah tanda cuaca cerah dan tenang.", answer: false },
    { question: "Teleskop Hubble adalah teleskop angkasa yang terletak di Mars.", answer: false },
    { question: "Asteroid yang cukup besar dapat disebut planet kerdil.", answer: false },
    { question: "Anular eclipse terjadi saat Bulan berada di antara Matahari dan Bumi.", answer: false },
    { question: "Jarak antara Bumi dan Matahari disebut satu unit astronomi (AU).", answer: true },
    { question: "Cahaya merah memiliki panjang gelombang yang lebih pendek daripada cahaya biru.", answer: false },
    { question: "Proses yang mengubah gas menjadi cair disebut sublimasi.", answer: false },

    { question: "Peta adalah representasi dua dimensi dari permukaan bumi.", answer: true },
    { question: "Peta tematik memberikan informasi tentang topografi dan elevasi suatu daerah.", answer: false },
    { question: "Garis lintang adalah garis vertikal yang mengukur jarak dari Kutub Utara atau Kutub Selatan.", answer: false },
    { question: "Fusosfer adalah zona waktu yang setiap 15 derajat bujur membentuk satu zona.", answer: false },
    { question: "Titik nol meridian diakui secara internasional adalah Greenwich Mean Time (GMT).", answer: true },
    { question: "Garis bujur digunakan untuk menunjukkan lokasi timur dan barat di bumi.", answer: true },
    { question: "Skala pada peta adalah perbandingan antara jarak pada peta dengan jarak sebenarnya di lapangan.", answer: true },
    { question: "Sistem GPS (Global Positioning System) menggunakan satelit untuk menentukan posisi geografis.", answer: true },
    { question: "Komunikasi antar ruang dapat dilakukan menggunakan teknologi seperti internet dan jaringan komputer.", answer: true },
    { question: "Google Maps adalah contoh aplikasi yang menggunakan teknologi GPS untuk navigasi.", answer: true },
    { question: "Longitude adalah garis horizontal yang mengukur jarak dari Equator.", answer: false },
    { question: "Waktu Greenwich bervariasi tergantung pada musim panas atau musim dingin di Inggris.", answer: true },
    { question: "Satelit geostasioner bergerak sejajar dengan rotasi bumi, sehingga tampak diam di langit.", answer: true },
    { question: "Proyeksi Mercator adalah proyeksi peta yang paling akurat untuk menunjukkan ukuran wilayah yang sebenarnya.", answer: false },
    { question: "Perubahan waktu antara dua fuso waktu berbeda adalah selisih waktu yang tetap sepanjang tahun.", answer: false },
    { question: "Skala peta 1:100.000 berarti setiap satuan pada peta sama dengan 100.000 satuan di lapangan.", answer: true },
    { question: "Telepon seluler menggunakan sinyal radio untuk mentransmisikan suara dan data.", answer: true },
    { question: "Algoritma Dijkstra adalah algoritma yang digunakan dalam navigasi GPS.", answer: true },
    { question: "Zona waktu di Indonesia adalah GMT+8.", answer: true },
    { question: "Proyeksi Robinson adalah proyeksi peta yang digunakan secara luas untuk navigasi penerbangan.", answer: false }, 


    { question: "Interaksi sosial adalah proses dimana individu atau kelompok saling berinteraksi satu sama lain.", answer: true },
    { question: "Konflik selalu berdampak negatif pada hubungan sosial.", answer: false },
    { question: "Stereotip adalah pandangan umum yang benar-benar akurat terhadap suatu kelompok.", answer: false },
    { question: "Keluarga adalah agen sosialisasi primer.", answer: true },
    { question: "Agama tidak memiliki peran dalam membentuk norma sosial.", answer: false },
    { question: "Anomie adalah keadaan di mana individu merasa terisolasi dan tidak memiliki tujuan hidup.", answer: true },
    { question: "Norma adalah aturan atau standar perilaku yang diharapkan dalam suatu masyarakat.", answer: true },
    { question: "Prejudice adalah sikap positif terhadap kelompok atau individu tertentu.", answer: false },
    { question: "Sosialisasi adalah proses belajar memahami norma, nilai, dan budaya dalam masyarakat.", answer: true },
    { question: "Struktur sosial adalah pola-pola interaksi yang stabil di dalam masyarakat.", answer: true },
    { question: "Peran sosial adalah bagaimana individu bertindak dan berinteraksi dalam masyarakat.", answer: true },
    { question: "Peran sosial bersifat statis dan tidak berubah seiring waktu.", answer: false },
    { question: "Mobilitas sosial adalah perpindahan individu dari satu status sosial ke status sosial yang lain.", answer: true },
    { question: "Konformitas adalah ketidaksesuaian individu terhadap norma-norma sosial yang berlaku.", answer: false },
    { question: "Agresi adalah bentuk interaksi sosial yang positif dan konstruktif.", answer: false },
    { question: "Kelompok primer adalah kelompok yang memiliki pengaruh besar terhadap identitas individu dan sosialisasi awal.", answer: true },
    { question: "Gangguan sosial selalu merugikan masyarakat.", answer: false },
    { question: "Kelompok sekunder memiliki interaksi yang lebih intens dan berkelanjutan daripada kelompok primer.", answer: false },
    { question: "Stratifikasi sosial adalah pembagian masyarakat berdasarkan status ekonomi saja.", answer: false },
    { question: "Interaksi sosial hanya terjadi di antara individu yang memiliki kesamaan budaya dan latar belakang.", answer: false },

    { question: "Permintaan adalah jumlah produk yang ingin dibeli oleh konsumen pada berbagai tingkat harga.", answer: true },
    { question: "Hukum permintaan menyatakan bahwa ketika harga suatu barang naik, jumlah barang yang diminta oleh konsumen akan turun.", answer: true },
    { question: "Ketika harga suatu barang naik, maka barang tersebut akan memiliki elastisitas harga yang rendah.", answer: false },
    { question: "Pasar persaingan sempurna adalah pasar di mana terdapat banyak penjual dan pembeli dengan barang homogen.", answer: true },
    { question: "Monopoli adalah pasar di mana terdapat banyak penjual yang menjual produk homogen.", answer: false },
    { question: "Pajak adalah salah satu alat kebijakan ekonomi yang digunakan untuk mengurangi permintaan suatu barang.", answer: false },
    { question: "Inflasi adalah penurunan umum harga barang dan jasa dalam jangka waktu yang lama.", answer: false },
    { question: "Pendapatan nasional adalah total pendapatan yang diterima oleh seluruh penduduk suatu negara dalam suatu periode waktu tertentu.", answer: true },
    { question: "Ekonomi mikro mempelajari perilaku ekonomi individu, rumah tangga, dan perusahaan.", answer: true },
    { question: "Bunga adalah biaya yang dibayarkan oleh peminjam kepada pemberi pinjaman sebagai imbalan atas penggunaan uang.", answer: true },
    { question: "Pertumbuhan ekonomi selalu menghasilkan peningkatan kesejahteraan sosial bagi seluruh lapisan masyarakat.", answer: false },
    { question: "Anggaran belanja pemerintah yang mengalami defisit menunjukkan bahwa pemerintah mengeluarkan lebih banyak uang daripada yang diterimanya.", answer: true },
    { question: "Produktivitas adalah kemampuan suatu negara untuk menghasilkan barang dan jasa menggunakan sumber daya yang dimilikinya.", answer: true },
    { question: "Anggaran belanja pemerintah yang mengalami surplus menunjukkan bahwa pemerintah tidak mengeluarkan lebih banyak uang daripada yang diterimanya.", answer: true },
    { question: "Upah minimum adalah upah yang ditetapkan oleh pemerintah dan harus dibayar oleh perusahaan kepada pekerjanya.", answer: true },
    { question: "Keseimbangan ekonomi terjadi ketika jumlah barang yang ditawarkan sama dengan jumlah barang yang diminta pada tingkat harga tertentu.", answer: true },
    { question: "Pajak progresif adalah pajak yang tarifnya tetap sepanjang tingkat pendapatan individu.", answer: false },
    { question: "Bank sentral bertanggung jawab untuk mengatur dan mengawasi kebijakan fiskal suatu negara.", answer: false },
    { question: "Anggaran belanja pemerintah termasuk dalam kebijakan moneter suatu negara.", answer: false },
    { question: "Inovasi teknologi dapat meningkatkan produktivitas dan pertumbuhan ekonomi suatu negara.", answer: true },
    { question: "Pertumbuhan ekonomi yang berkelanjutan adalah pertumbuhan ekonomi yang berlangsung terus-menerus tanpa ada penurunan.", answer: true }



]  ;

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerId;

const questionElement = document.getElementById('question');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const trueButton = document.getElementById('trueButton');
const falseButton = document.getElementById('falseButton');
const startButton = document.getElementById('startButton');
const button_two = document.querySelectorAll('.game1-button-answer');
const song_game = document.querySelector('.song-game')
const back_game_again = document.querySelector('.back-game-2')

function shuffleQuestions() {
    for (let i = pertanyaan.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pertanyaan[i], pertanyaan[j]] = [pertanyaan[j], pertanyaan[i]];
    }
}

function displayQuestion() {
    questionElement.textContent = pertanyaan[currentQuestionIndex].question;
}

function startTimer() {
    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerElement.textContent = timeLeft;
        } else {
            endGame();
        }
    }, 1000);
}

function checkAnswer(givenAnswer) {
    if (givenAnswer === pertanyaan[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < pertanyaan.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

trueButton.addEventListener('click', () => checkAnswer(true));
falseButton.addEventListener('click', () => checkAnswer(false));

function endGame() {
    clearInterval(timerId);
    if (score > 50 && score < 70) {
        questionElement.textContent = `Kamu Tidak Membaca Pertanyaan dan Hanya menekan Tombol False Berkali kali`;
    }else if (score > 70) {
        questionElement.textContent = `Kamu Tidak Membaca Pertanyaan dan Hanya menekan Tombol True Berkali kali`;
    }else if (score >= 0 && score <= 4) {
        questionElement.textContent = `Nilai Yang Bagus Untuk Pemula`;
    }else if (score >= 5 && score <= 7 || score >= 16 && score <= 18 ) {
        questionElement.textContent = `New Code = BACKGROUND 2`;
    } else if (score >= 8 && score <= 10 || score >= 19 && score <= 21 ) {
        questionElement.textContent = `New Code = OPEN MUSIK 1`;
    } else if (score >= 11 && score <= 13 || score >= 22 && score <= 24 ) {
        questionElement.textContent = `New Code = BACKGROUND 3`;
    } else if (score >= 14 && score <= 15 || score >= 25 && score <= 30 ) {
        questionElement.textContent = `New Code = OPEN MUSIK 2`;
    } else {
        questionElement.textContent = `Kamu Mendapatkan Score ${score}`;
    }


    scoreElement.textContent = `${score}`;
    trueButton.disabled = true;
    falseButton.disabled = true;
    startButton.disabled = false;
    button_two.forEach(element => {
        element.style.opacity = 0;
    })
    currentQuestionIndex = 0;
    timeLeft = 31;
    score = 0;

    song_game.pause()
    song_game.currentTime = 0;
}

function startGame() {
    shuffleQuestions();
    displayQuestion();
    scoreElement.textContent = `-`;
    startTimer();
    trueButton.disabled = false;
    falseButton.disabled = false;
    startButton.disabled = true;
    button_two.forEach(element => {
        element.style.opacity = 1;
    })
    song_game.play()
}

startButton.addEventListener('click', startGame);

back_game_again.addEventListener('click', endGame);



// ============= MOBILE
document.querySelector('#setting-mobile').addEventListener('click', () => {
    const setting = document.querySelectorAll('.setting-mobile-new,#key-mobile-password')
    document.querySelectorAll('.sidebar').forEach(element => {
        element.style.transform = ' translateY(150%)'
    })

    setting.forEach(element => {
        element.style.display = 'block'

        setTimeout(() => {
            element.style.opacity = '1'
        },40)
    })

     const all = document.querySelectorAll('.materi, .soal, .game-section-1,.select-team');
     all.forEach(element => {
        element.style.display = 'none'
        element.style.opacity = '0'
     })

     song_game.pause()
     endGame()
})



document.querySelector('#materi-mobile').addEventListener('click', () => {
    const setting = document.querySelectorAll('.materi')
    document.querySelectorAll('.sidebar').forEach(element => {
        element.style.transform = ' translateY(150%)'
    })

    setting.forEach(element => {
        element.style.display = 'block'

        setTimeout(() => {
            element.style.opacity = '1'
        },40)
    })

     const all = document.querySelectorAll('.setting-mobile-new, .soal, .game-section-1,.select-team,#team-new');
     all.forEach(element => {
        element.style.display = 'none'
        element.style.opacity = '0'
     })

     song_game.pause()
     endGame()
})

document.querySelector('#soal-mobile').addEventListener('click', () => {
    const setting = document.querySelectorAll('.soal')
    document.querySelectorAll('.sidebar').forEach(element => {
        element.style.transform = ' translateY(150%)'
    })

    setting.forEach(element => {
        element.style.display = 'block'

        setTimeout(() => {
            element.style.opacity = '1'
        },40)
    })

     const all = document.querySelectorAll('.materi,.setting-mobile-new, .game-section-1,.select-team,#team-new');
     all.forEach(element => {
        element.style.display = 'none'
        element.style.opacity = '0'
     })

     song_game.pause()
     endGame()
})

document.querySelector('#game-mobile').addEventListener('click', () => {
    const setting = document.querySelectorAll('.game-section-1')
    document.querySelectorAll('.sidebar').forEach(element => {
        element.style.transform = ' translateY(150%)'
    })

    setting.forEach(element => {
        element.style.display = 'block'

        setTimeout(() => {
            element.style.opacity = '1'
        },40)
    })

     const all = document.querySelectorAll('.materi, .soal, .setting-mobile-new,.select-team,#team-new');
     all.forEach(element => {
        element.style.display = 'none'
        element.style.opacity = '0'
     })


     song_game.pause()
     
})








