
// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Pusat tata surya yang dapat memancarkan sinarnya sendiri adalah?",
    answer: "Matahari",
    options: [
      "Matahari",
      "Bulan",
      "Galaksi",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 2,
    question: "Benda langit yang bergerak di angkasa dengan kecepatan tinggi adalah?",
    answer: "Meteoroid",
    options: [
      "Asteroid",
      "Planetoid",
      "Meteoroid",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 3,
    question: "Lapisan matahari terdiri dari?",
    answer: "Korona, kromosfer, fotosfer, dan inti matahari (core)",
    options: [
      "Korona, kromosfer, fotosfer, dan inti matahari (core)",
      "Granulasi, korona, fotosfer, dan inti matahari (core)",
      "Korona, prominence, fotosfer, dan inti matahari (core)",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 4,
    question: "Inti matahari (core) adalah?",
    answer: "Lapisan paling dalam yang merupakan pusat terjadinya reaksi fusi antara atom hidrogen dan helium",
    options: [
      "Lapisan paling dalam yang merupakan pusat terjadinya reaksi fusi antara atom hidrogen dan helium",
      "Lapisan paling luar yang merupakan pusat terjadinya reaksi fusi antara atom hidrogen dan helium",
      "Lapisan paling dingin yang merupakan pusat terjadinya reaksi fusi antara atom hidrogen dan helium",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 5,
    question: "Planet yang mengorbit pada matahari dalam sistem tata surya adalah?",
    answer: "Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus",
    options: [
      "Sunsport, granulasi, lidah api, bintang, Neptunus, Uranus",
      "Suar matahari, bintang, granulasi, lidah api, Neptunus, Uranus",
      "Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 6,
    question: "Jarak Bumi ke matahari kurang lebih 150 juta km. Bumi memiliki sebuah satelit pengiring yang dinamakan?",
    answer: "Bulan",
    options: [
      "Asteroid",
      "Bulan",
      "Bintang",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 7,
    question: "Planet terbesar di tata surya dengan diameter kurang lebih 15.000 km dan massa 318 kali lebih dari massa Bumi adalah?",
    answer: "Jupiter",
    options: [
      "Neptunus",
      "Jupiter",
      "Saturnus",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 8,
    question: "Benda langit dengan bentuk tak teratur yang tersusun dari kumpulan debu dan es adalah?",
    answer: "Asteroid",
    options: [
      "Asteroid",
      "Orbit",
      "Komet",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 9,
    question: "Kumpulan bintang yang sangat banyak dan membentuk gugusan dengan pola tertentu di alam semesta adalah?",
    answer: "Galaksi",
    options: [
      "Rasi Bintang",
      "Bintang",
      "Galaksi",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 10,
    question: "Rasi Bintang (constellation) adalah?",
    answer: "Kelompok Bintang yang membentuk konfigurasi khusus",
    options: [
      "Kelompok Bintang yang membentuk konfigurasi khusus",
      "Bagian kecil gugusan Bintang",
      "Benda langit yang mengeluarkan cahayanya sendiri",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 11,
    question: "Bumi tersusun dari tiga komponen yaitu?",
    answer: "Litosfer, hidrosfer, atmosfer",
    options: [
      "Selimut dalam, kerak bumi, subsoil",
      "Litosfer, hidrosfer, atmosfer",
      "Atmosfer, kromosfer, litosfer",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 12,
    question: "Lapisan bumi paling luar sebagai tempat tumbuhnya tanaman serta tempat tinggal manusia dan hewan adalah?",
    answer: "Kerak bumi",
    options: [
      "Kerak bumi",
      "Lapisan batuan",
      "Lapisan tanah tengah",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 13,
    question: "Inti bumi dibedakan menjadi dua yaitu?",
    answer: "Inti luar dan inti dalam",
    options: [
      "Inti Tengah dan inti luar",
      "Inti samping dan inti dalam",
      "Inti luar dan inti dalam",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 14,
    question: "Daur hidrologi yaitu suatu proses daur ulang air secara berurutan yang terjadi secara kontinu dan terus menerus. Jenis-jenis daur hidrologi meliputi?",
    answer: "Daur pendek, daur sedang, daur panjang",
    options: [
      "Daur pendek, daur sedang, daur panjang",
      "Daur ulang, daur pendek, daur samping",
      "Daur sedang, daur inti, daur panjang",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 15,
    question: "Contoh perairan darat yaitu?",
    answer: "Danau, waduk, embung, rawa, sungai, dan air tanah",
    options: [
      "Danau, waduk, embung, rawa, sungai, dan air tanah",
      "Danau vulkanik, rawa, sungai, laut dan embung",
      "Samudra, benua, danau, dan air tanah",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 16,
    question: "Medan magnet bumi atau medan geomagnetik merupakan fenomena fisis yang sangat penting dalam dunia navigasi salah satu alasan bumi memiliki medan magnetik adalah?",
    answer: "Kecepatan rotasi bumi yang tinggi",
    options: [
      "Induksi magnet luar",
      "Kecepatan rotasi bumi yang tinggi",
      "Inti luar yang konduktif",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 17,
    question: "Gerak bumi berputar terhadap porosnya disebut?",
    answer: "Rotasi bumi",
    options: [
      "Rotasi bumi",
      "Revolusi bumi",
      "Gerak semu bumi",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 18,
    question: "Gerhana matahari terjadi jika?",
    answer: "Tertutupnya matahari oleh bayangan bulan ketika bulan berada di antara matahari dan bumi",
    options: [
      "Tertutupnya bulan di antara bayangan matahari",
      "Tertutupnya bulan di antara matahari dan bumi",
      "Tertutupnya matahari oleh bayangan bulan ketika bulan berada di antara matahari dan bumi",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 19,
    question: "Bencana alam adalah peristiwa atau rangkaian peristiwa yang mengancam dan mengganggu kehidupan yang disebabkan oleh faktor alam maupun faktor manusia. Bencana yang sering terjadi di wilayah Indonesia antara lain?",
    answer: "Kebakaran, banjir, tanah longsor, gempa bumi, tsunami",
    options: [
      "Kebakaran, banjir, tanah longsor, gempa bumi, tsunami",
      "Kecelakaan, kebakaran, reboisasi, tsunami, tanah longsor",
      "Kebakaran, penghijauan, reboisasi, gempa bumi, tsunami",
      "Semua jawaban benar"
    ]
  },
  {
    numb: 20,
    question: "Tindakan prabencana merupakan faktor yang sangat penting dalam mengurangi risiko potensi bahaya di suatu tempat. Tindakan prabencana antara lain?",
    answer: "Kegiatan pencegahan, kesiapsiagaan, peringatan dini",
    options: [
      "Kegiatan pengrusakan, kegiatan pemulihan, peringatan dini",
      "Kegiatan pencegahan, kesiapsiagaan, peringatan dini",
      "Kegiatan pengamanan, kegiatan pengrusakan, kegiatan sosial",
      "Semua jawaban benar"
    ]
  }
];














//selecting all required elements
const start_btn_bab_1_soal_multiplai  = document.querySelector(".mulai-bab-1-soal-multiplai");
const box_bab_1_soal_multiplai = document.querySelector(".box-bab-1-soal-multiplai");
const result_box_bab_1_soal_multiplai = document.querySelector(".result-box-bab-1-soal-multiplai");
const option_box_bab_1_soal_multiplai = document.querySelector(".option-box-bab-1-soal-multiplai");
const button_bab_1_soal_multiplai = document.querySelectorAll(".soal-bab-1-isi-click");
const close_bab_1_soal_multiplai = document.querySelector(".close-soal-1-logo-close-multiple");


// if startQuiz button clicked
start_btn_bab_1_soal_multiplai.addEventListener('click', () => {
    box_bab_1_soal_multiplai.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    button_bab_1_soal_multiplai.forEach(element => {
        element.style.display = 'none';
        setTimeout(() => {
            element.style.opacity = '0';
        },40) 
    })
})

close_bab_1_soal_multiplai.addEventListener('click', () => {
    box_bab_1_soal_multiplai.classList.remove("activeQuiz");
    button_bab_1_soal_multiplai.forEach(element => {
        element.style.display = 'grid';
        setTimeout(() => {
            element.style.opacity = '1';
        },215) 
    })
})




let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_bab_1_soal_multiplai = result_box_bab_1_soal_multiplai.querySelector(".buttons .restart-bab-1-soal-multiplai");


// if restartQuiz button clicked
restart_bab_1_soal_multiplai.onclick = ()=>{
    box_bab_1_soal_multiplai.classList.add("activeQuiz"); //show quiz box
    result_box_bab_1_soal_multiplai.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    next_btn_bab_1_soal_multiplai.classList.remove("show"); //hide the next button
}



const next_btn_bab_1_soal_multiplai = document.querySelector("footer .next-btn-bab-1-soal-multiplai");
const bottom_ques_counter_bab_1_soal_multiplai = document.querySelector("footer .total-que-bab-1-soal-multiplai ");

// if Next Que button clicked
next_btn_bab_1_soal_multiplai.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        next_btn_bab_1_soal_multiplai.classList.remove("show"); //hide the next button
    }else{
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_box_bab_1_soal_multiplai.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_box_bab_1_soal_multiplai.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_box_bab_1_soal_multiplai.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_box_bab_1_soal_multiplai.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_box_bab_1_soal_multiplai.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_box_bab_1_soal_multiplai.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_box_bab_1_soal_multiplai.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn_bab_1_soal_multiplai.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    box_bab_1_soal_multiplai.classList.remove("activeQuiz"); //hide quiz box
    result_box_bab_1_soal_multiplai.classList.add("activeResult"); //show result box
    const scoreText = result_box_bab_1_soal_multiplai.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>Selamat , Kamu menjawab <p>'+ userScore +'</p> dari <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>Selamat , Kamu menjawab <p>'+ userScore +'</p> dari <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>Selamat , Kamu menjawab <p>'+ userScore +'</p> dari <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}


function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> dari <p>'+ questions.length +'</p> Soal</span>';
    bottom_ques_counter_bab_1_soal_multiplai.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter_bab_1_soal_multiplai
}















const kunci_jawaban_open = document.querySelector('.soal-bab-1-isi-click-kunci-jawaban') 
const kunci_jawaban = document.querySelectorAll('.soal-bab-1-kunci-jawaban')
const close_kunci_jawaban = document.querySelector('.header-soal-1-logo-close-kunci-jawaban')
const password_bab_1 = document.querySelectorAll('.scrollbox-inner-password')

kunci_jawaban_open.addEventListener('click', () => {

    password_bab_1.forEach(element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1'
        },50)
    })

    button_bab_1_soal_multiplai.forEach(element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0'
        },50)
    })
})


close_kunci_jawaban.addEventListener('click', () => {

    kunci_jawaban.forEach(element => {
        element.style.transform = 'translateY(200%)'
    })

    button_bab_1_soal_multiplai.forEach(element => {
        element.style.display = 'grid'
        setTimeout(() => {
            element.style.opacity = '1'
        },220)
    })
})


document.querySelector('.back-soal-1-logo-close-password').addEventListener('click', () => {

    password_bab_1.forEach(element => {
        element.style.opacity = '0'
        setTimeout(() => {
            element.style.display = 'none'
        },120)
    })

    button_bab_1_soal_multiplai.forEach(element => {
        element.style.display = 'grid'
        setTimeout(() => {
            element.style.opacity = '1'
        },80)
    })
})



document.querySelector('.quit-keluar-bab-1').addEventListener('click', () => {
    window.location.reload()
})





const FormBab1 = document.getElementById('password-form');


FormBab1.addEventListener('submit',(event) => {
    const SandiBab1Multiple = "OPEN BAB 4 PILGAN";
    const KunciBab1Multiple = document.querySelector('.scrollbox-inner-pertanyaan-kunci-jawaban-bab-1-multiple');
    const AllFormBab1 = document.querySelector('.scrollbox-inner-password')

    

    event.preventDefault(); 
    const jawab = document.querySelector('.password').value;


    console.log('Jawaban yang dimasukkan:', jawab);
    console.log('SandiBab1MultipleMobile:', SandiBab1Multiple);

    if (jawab === SandiBab1Multiple) {
        kunci_jawaban.forEach(element => {
            element.style.transform = 'translateY(20%)'
        })
        AllFormBab1.style.display = 'none'
    }else{
      const salah_boss = document.querySelector('.wrong-sound-new')
      salah_boss.play();
    }

    document.getElementById('password').value = '';

});






