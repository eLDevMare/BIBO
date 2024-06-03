
// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Ilmu ekonomi menurut Alfred W. Stonier dan Douglas C. Hague dapat dibedakan menjadi kelompok ekonomi",
    answer: "Diskriptif, teori, dan terapan",
    options: [
      "Diskriptif, teori, dan terapan",
      "Makro, mikro, dan terapan",
      "Pertanian, industri, dan publik",
      "Pertanian, industri, dan terapan"
    ]
  },
  {
    numb: 2,
    question: "Kebutuhan menurut intensitas adalah kebutuhan yang dibedakan menurut",
    answer: "Tingkat keutamaan pemenuhannya",
    options: [
      "Waktu pemenuhannya",
      "Pelaku yang menggunakan alat pemenuhannya",
      "Tingkat keutamaan pemenuhannya",
      "Tingkat pendidikan dan peradaban"
    ]
  },
  {
    numb: 3,
    question: "Demonstration effect adalah",
    answer: "Sifat dan kebiasaan meniru tingkah laku orang lain",
    options: [
      "Memecahkan masalah perekonomian",
      "Keinginan untuk memenuhi kebutuhan",
      "Sifat dan kebiasaan meniru tingkah laku orang lain",
      "Cara untuk menanggulangi efek negatif dari konsumsi"
    ]
  },
  {
    numb: 4,
    question: "Motif ekonomi yang paling tinggi nilainya adalah",
    answer: "Membuka cabang usaha untuk menambah omzet penjualan",
    options: [
      "Membuka usaha dua puluh empat jam",
      "Membuka cabang usaha untuk menambah omzet penjualan",
      "Membuka usaha untuk menampung keluarga bekerja",
      "Mengusahakan segala cara agar dapat menghasilkan untung"
    ]
  },
  {
    numb: 5,
    question: "Sistem ekonomi tradisional memiliki kelemahan di antaranya",
    answer: "Profesionalisme rendah",
    options: [
      "Sering terjadi krisis",
      "Monopoli lebih besar peluangnya",
      "Profesionalisme rendah",
      "Produktivitas yang terkendali"
    ]
  },
  {
    numb: 6,
    question: "Contoh penerapan sistem demokrasi ekonomi Pancasila yaitu ditunjukkan dengan adanya",
    answer: "Perusahaan Ilegal",
    options: [
      "BUMN",
      "BUMS",
      "Perusahaan ilegal",
      "Koperasi"
    ]
  },
  {
    numb: 7,
    question: "Salah satu prinsip ekonomi syariah adalah",
    answer: "Hak bersama dalam masyarakat",
    options: [
      "Jaminan sosial",
      "Hak bersama dalam masyarakat",
      "Distribusi kekayaan terbatas",
      "Setiap individu memiliki kekayaan yang tidak terbatas"
    ]
  },
  {
    numb: 8,
    question: "Penawaran suatu barang akan dipengaruhi banyak faktor, kecuali",
    answer: "Selera calon konsumen",
    options: [
      "Kebijakan pemerintah",
      "Biaya produksi",
      "Selera calon konsumen",
      "Harga barang lain"
    ]
  },
  {
    numb: 9,
    question: "Pasaran motor di Indonesia dikuasai oleh tiga besar produk yaitu Honda, Suzuki, dan Yamaha. Pasar sepeda motor di Indonesia menunjukkan pasar",
    answer: "Oligopoli",
    options: [
      "Oligopoli",
      "Monopsoni",
      "Oligopsoni",
      "Persaingan sempurna"
    ]
  },
  {
    numb: 10,
    question: "Bank Sentral Asia adalah bank yang melakukan kegiatan usaha secara konvensional yang dalam kegiatannya memberikan jasa lalu lintas perdagangan. BCA termasuk jenis",
    answer: "Bank umum",
    options: [
      "Bank sentral",
      "BPR",
      "Bank syariah",
      "Bank umum"
    ]
  },
  {
    numb: 11,
    question: "Tugas Bank Indonesia yang kini dilakukan oleh Otoritas Jasa Keuangan (OJK) adalah",
    answer: "Mengatur dan mengawasi bank",
    options: [
      "Menetapkan dan melaksanakan kebijakan moneter",
      "Mengatur dan menjaga kelancaran sistem pembayaran",
      "Mengatur dan mengawasi bank",
      "Penyedia dana terakhir"
    ]
  },
  {
    numb: 12,
    question: "Berikut yang bukan karakteristik sistem ekonomi komando atau terpusat adalah",
    answer: "Penguasaan individu atas aset ekonomi sangat dibatasi",
    options: [
      "Penguasaan individu atas aset ekonomi sangat dibatasi",
      "Peranan negara dibatasi dalam perekonomian",
      "Mendorong lahirnya pasar monopoli",
      "Peranan mekanisme pasar ditekan seminimal mungkin"
    ]
  },
  {
    numb: 13,
    question: "Salah satu faktor penting dalam kegiatan produksi adalah besarnya modal. Dampak yang ditimbulkan akibat kelangkaan modal adalah",
    answer: "Menghambat kegiatan produksi",
    options: [
      "Kemampuan sumber daya manusia menurun",
      "Status sosial suatu negara menjadi turun",
      "Distribusi pembangunan tidak merata",
      "Menghambat kegiatan produksi"
    ]
  },
  {
    numb: 14,
    question: "Ilmu ekonomi yang diterapkan langsung dalam kehidupan sehari-hari disebut",
    answer: "Ekonomi terapan",
    options: [
      "Ekonomi diskriptif",
      "Teori ekonomi",
      "Ekonomi makro",
      "Ekonomi terapan"
    ]
  },
  {
    numb: 15,
    question: "Salah satu faktor penting dalam kegiatan produksi adalah besarnya modal. Dampak yang ditimbulkan akibat kelangkaan modal adalah",
    answer: "Menghambat kegiatan produksi",
    options: [
      "Mendorong pembangunan di suatu negara",
      "Kemampuan sumber daya manusia menurun",
      "Status sosial negara menjadi turun",
      "Menghambat kegiatan produksi"
    ]
  },
  {
    numb: 16,
    question: "Upaya untuk memenuhi kebutuhan hidup pada dasarnya tidak pernah berakhir karena itu manusia harus bertindak rasional artinya",
    answer: "Tidak boros dan melakukan tindakan seefisien mungkin",
    options: [
      "Tidak boros dan melakukan tindakan seefisien mungkin",
      "Mencari penghasilan tambahan",
      "Tergantung pada selera",
      "Sesuai dengan banyaknya keinginan"
    ]
  },
  {
    numb: 17,
    question: "Suatu sistem ekonomi dimana tujuan utamanya adalah kebebasan dan efisiensi ekonomi yang diperoleh dengan memfasilitasi persaingan secara sehat bagi seluruh warga negara disebut",
    answer: "Sistem ekonomi pasar",
    options: [
      "Sistem ekonomi pasar",
      "Sistem ekonomi komando",
      "Sistem ekonomi tradisional",
      "Sistem ekonomi campuran"
    ]
  },
  {
    numb: 18,
    question: "Globalisasi ekonomi ditandai dengan semakin meningkatnya perdagangan bebas mendorong suatu negara menganut sistem ekonomi",
    answer: "Liberal/pasar",
    options: [
      "Tradisional",
      "Campuran",
      "Liberal/pasar",
      "Komando"
    ]
  },
  {
    numb: 19,
    question: "Kajian ekonomi makro meliputi hal tersebut kecuali",
    answer: "Biaya produksi",
    options: [
      "Konsumsi masyarakat",
      "Biaya produksi",
      "Tabungan masyarakat",
      "Tingkat harga umum"
    ]
  },
  {
    numb: 20,
    question: "Dorongan yang menyebabkan manusia melakukan tindakan ekonomi dinamakan",
    answer: "Motif ekonomi",
    options: [
      "Tindakan ekonomi",
      "Prinsip ekonomi",
      "Berpikir ekonomi",
      "Motif ekonomi"
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
    const SandiBab1Multiple = "OPEN BAB 7 PILGAN";
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






