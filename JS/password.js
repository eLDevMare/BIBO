


const FormBab1Mobile = document.getElementById('password-form');

FormBab1Mobile.addEventListener('submit', (event) => {
    const SandiTeam = "TEAM";
    const SandiPanduan = "PANDUAN";
    const SandiBackground1 = "BACKGROUND ORIGINAL";
    const SandiBackground2 = "BACKGROUND 2";
    const SandiBackground3 = "BACKGROUND 3";
    const Sandi_matikan_musik = "MATIKAN MUSIK";
    const Sandi_open_musik_1 = "OPEN MUSIK 1";
    const Sandi_open_musik_2 = "OPEN MUSIK 2";
    const SandiBab1MultipleMobile = "OPEN BAB 1 PILGAN";
    const SandiBab2MultipleMobile = "OPEN BAB 2 PILGAN";
    const SandiBab4MultipleMobile = "OPEN BAB 4 PILGAN";
    const SandiBab5MultipleMobile = "OPEN BAB 5 PILGAN";
    const SandiBab6MultipleMobile = "OPEN BAB 6 PILGAN";
    const SandiBab3MultipleMobile = "OPEN BAB 3 PILGAN";
    const SandiBab7MultipleMobile = "OPEN BAB 7 PILGAN";
    const mobile_team = document.querySelector('#team-new');
    const mobile_kunci_panduan = document.querySelectorAll('#key-mobile-bab-panduan');
    const mobile_kunci_bab_1 = document.querySelectorAll('#key-mobile-bab-1');
    const mobile_kunci_bab_2 = document.querySelectorAll('#key-mobile-bab-2');
    const mobile_kunci_bab_4 = document.querySelectorAll('#key-mobile-bab-4');
    const mobile_kunci_bab_5 = document.querySelectorAll('#key-mobile-bab-5');
    const mobile_kunci_bab_6 = document.querySelectorAll('#key-mobile-bab-6');
    const mobile_kunci_bab_3 = document.querySelectorAll('#key-mobile-bab-3');
    const mobile_kunci_bab_7 = document.querySelectorAll('#key-mobile-bab-7');
    const AllFormBab1 = document.querySelector('#key-mobile-password');
    const song_secret_1 = document.querySelector('.secret-sound-biola-new')
    const song_secret_2 = document.querySelector('.secret-sound-aja-new')
    const matikan_lagu = document.querySelectorAll('.secret-sound-biola-new, .secret-sound-aja-new')

    event.preventDefault();
    const jawab = document.querySelector('.password').value; 

    if (jawab === SandiBab1MultipleMobile) {
        mobile_kunci_bab_1.forEach(element => {
            element.style.transform = 'translateY(10%)';
        });
        AllFormBab1.style.opacity = '0';  
        setTimeout(() => {
            AllFormBab1.style.display = 'none'; 
        }, 200);
    } else if (jawab === SandiBab2MultipleMobile) {  
        mobile_kunci_bab_2.forEach(element => {
            element.style.transform = 'translateY(10%)';
        });
        AllFormBab1.style.opacity = '0';  
        setTimeout(() => {
            AllFormBab1.style.display = 'none';  
        }, 200);
    }else if (jawab === SandiBab4MultipleMobile) {  
        mobile_kunci_bab_4.forEach(element => {
            element.style.transform = 'translateY(10%)';
        });
        AllFormBab1.style.opacity = '0';  
        setTimeout(() => {
            AllFormBab1.style.display = 'none';  
        }, 200);
    }else if (jawab === SandiBab5MultipleMobile) {  
        mobile_kunci_bab_5.forEach(element => {
            element.style.transform = 'translateY(10%)';
        });
        AllFormBab1.style.opacity = '0';  
        setTimeout(() => {
            AllFormBab1.style.display = 'none';  
        }, 200);
    }else if (jawab === SandiBab6MultipleMobile) {  
        mobile_kunci_bab_6.forEach(element => {
            element.style.transform = 'translateY(10%)';
        });
        AllFormBab1.style.opacity = '0';  
        setTimeout(() => {
            AllFormBab1.style.display = 'none';  
        }, 200);
    }else if (jawab === SandiBab3MultipleMobile) {  
        mobile_kunci_bab_3.forEach(element => {
            element.style.transform = 'translateY(10%)';
        });
        AllFormBab1.style.opacity = '0';  
        setTimeout(() => {
            AllFormBab1.style.display = 'none';  
        }, 200);
    }else if (jawab === SandiBab7MultipleMobile) {  
        mobile_kunci_bab_7.forEach(element => {
            element.style.transform = 'translateY(10%)';
        });
        AllFormBab1.style.opacity = '0';  
        setTimeout(() => {
            AllFormBab1.style.display = 'none';  
        }, 200);


    }else if (jawab === SandiTeam) {  
        mobile_team.style.display = 'block';
        mobile_team.style.opacity = '1'
        setTimeout(() => {
            mobile_team.style.transform = 'translateY(10%)';  
        },40)
        AllFormBab1.style.opacity = '0';  
        setTimeout(() => {
            AllFormBab1.style.display = 'none';  
        }, 200);
        
    }else if (jawab === SandiPanduan) {  
        mobile_kunci_panduan.forEach(element => {
            element.style.transform = 'translateY(10%)';
        });
        AllFormBab1.style.opacity = '0';  
        setTimeout(() => {
            AllFormBab1.style.display = 'none';  
        }, 200);
    }else if (jawab === SandiBackground1) {  
        const original = document.getElementById('default');
        const original_mobile = document.getElementById('default-mobile')
        original.classList.add('tema-1')
        original.classList.remove('tema-2', 'tema-3')
        original_mobile.classList.add('tema-1')
        original_mobile.classList.remove('tema-2', 'tema-3')
    }else if (jawab === SandiBackground2) {  
        const original = document.getElementById('default');
        const original_mobile = document.getElementById('default-mobile')
        original.classList.add('tema-2')
        original.classList.remove('tema-1', 'tema-3')
        original_mobile.classList.add('tema-2')
        original_mobile.classList.remove('tema-1', 'tema-3')
    }else if (jawab === SandiBackground3) {  
        const original = document.getElementById('default');
        const original_mobile = document.getElementById('default-mobile')
        original.classList.add('tema-3')
        original.classList.remove('tema-1', 'tema-2')
        original_mobile.classList.add('tema-3')
        original_mobile.classList.remove('tema-1', 'tema-2')

    }else if (jawab === Sandi_open_musik_1) {  
        song_secret_1.play();
        song_secret_1.currentTime = 630;
        song_secret_2.pause();
    }else if (jawab === Sandi_open_musik_2) {  
        song_secret_2.play();
        song_secret_1.pause();
    }else if (jawab === Sandi_matikan_musik) {  
        matikan_lagu.forEach(element => {
            element.pause();
        })
    }else {
        const salah_boss = document.querySelector('.wrong-sound-new')
        salah_boss.play();
    }

    document.getElementById('password').value = '';
});



document.querySelectorAll('#key-close-kunci-jawab').forEach(button => {
    button.addEventListener('click', () => {
        const close_1 = document.querySelectorAll('#key-mobile-bab-1, #key-mobile-bab-2, #key-mobile-bab-4, #key-mobile-bab-5, #key-mobile-bab-6, #key-mobile-bab-panduan , #key-mobile-bab-3, #key-mobile-bab-7')
        const close_2 = document.querySelectorAll('#key-mobile-password')
        const close_team = document.querySelectorAll('#team-new')


        close_team.forEach(element => {
            element.style.transform = 'translateY(200%)'; 
            setTimeout(() => {
                element.style.display = 'none'
            }, 1000)
        })

        close_1.forEach(element => {
            element.style.transform = 'translateY(150%)'
        })

        close_2.forEach(element => {
            element.style.display = 'block'
            setTimeout(() => {
                element.style.opacity = '1'
            }, 200)
        })
    })
})












document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById('password');
    const placeholders = ["    MASUKAN CODE DI SINI", "  KETIK PANDUAN UNTUK INFO"];
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % placeholders.length;
        input.placeholder = placeholders[currentIndex];
    }, 4000);
});