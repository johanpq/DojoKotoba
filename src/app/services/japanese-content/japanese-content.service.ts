import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JapaneseContent {
  /* Terms that are being userd in 'Explorer Page' */
   karateTerms = [
    // =========================
    // COMANDOS
    // =========================
    { category: "Comandos", japanese: "Seiretsu", meaning: "Alinhar-se / formar fila", imageUrl: "/cards/seiretsu.png" },
    { category: "Comandos", japanese: "Naore", meaning: "Voltar à posição normal", imageUrl: "/cards/naore.png" },
    { category: "Comandos", japanese: "Yasume", meaning: "Descansar", imageUrl: "/cards/yasume.png" },
    { category: "Comandos", japanese: "Kiotsuke", meaning: "Atenção", imageUrl: "/cards/naore.png" },
    { category: "Comandos", japanese: "Rei", meaning: "Cumprimento / reverência", imageUrl: "/cards/rei.png" },
    { category: "Comandos", japanese: "Shomen ni rei", meaning: "Cumprimento ao shomen (frente do dojo)", imageUrl: "/cards/rei.png" },
    { category: "Comandos", japanese: "Sensei ni rei", meaning: "Cumprimento ao instrutor", imageUrl: "/cards/rei.png" },
    { category: "Comandos", japanese: "Otagai ni rei", meaning: "Cumprimento entre os alunos", imageUrl: "/cards/rei.png" },
    { category: "Comandos", japanese: "Hajime", meaning: "Começar", imageUrl: "/cards/hajime.png" },
    { category: "Comandos", japanese: "Yame", meaning: "Parar", imageUrl: "/cards/yame.png" },
    { category: "Comandos", japanese: "Mawatte", meaning: "Virar / dar meia-volta", imageUrl: "/cards/mawatte.png" },
    { category: "Comandos", japanese: "Tsuzukete", meaning: "Continuar", imageUrl: "/cards/tsuzukete.png" },
    { category: "Comandos", japanese: "Yoi", meaning: "Preparar / posição pronta", imageUrl: "/cards/yoi.png" },
    { category: "Comandos", japanese: "Mokuso", meaning: "Meditar / concentrar-se", imageUrl: "/cards/mokuso.png" },
    { category: "Comandos", japanese: "Kamaete", meaning: "Preparar para a técnica", imageUrl: "/cards/kamaete.png" },
    { category: "Comandos", japanese: "Choku rei", meaning: "Saudação curta", imageUrl: "/cards/choku-rei.png" },
    { category: "Comandos", japanese: "Seiza", meaning: "Sentar-se em posição formal", imageUrl: "/cards/seiza.png" },

    // =========================
    // GOLPES
    // =========================
    { category: "Golpes", japanese: "Oi zuki", meaning: "Soco avançando", imageUrl: "/cards/oi-zuki.png" },
    { category: "Golpes", japanese: "Gyaku zuki", meaning: "Soco reverso", imageUrl: "/cards/gyaku-zuki.png" },
    { category: "Golpes", japanese: "Kizami zuki", meaning: "Soco rápido com a mão da frente", imageUrl: "/cards/oi-zuki.png" },
    { category: "Golpes", japanese: "Age zuki", meaning: "Soco ascendente", imageUrl: "/cards/oi-zuki.png" },
    { category: "Golpes", japanese: "Tate zuki", meaning: "Soco vertical", imageUrl: "/cards/tate-zuki.png" },
    { category: "Golpes", japanese: "Ura zuki", meaning: "Soco curto com a palma para cima", imageUrl: "/cards/ura-zuki.png" },
    { category: "Golpes", japanese: "Choku zuki", meaning: "Soco direto", imageUrl: "/cards/choku-zuki.png" },
    { category: "Golpes", japanese: "Kagi zuki", meaning: "Soco em gancho", imageUrl: "/cards/kagi-zuki.png" },
    { category: "Golpes", japanese: "Empi uchi", meaning: "Golpe de cotovelo", imageUrl: "/cards/empi-uchi.png" },
    { category: "Golpes", japanese: "Mae geri", meaning: "Chute frontal", imageUrl: "/cards/mae-geri.png" },
    { category: "Golpes", japanese: "Yoko geri", meaning: "Chute lateral", imageUrl: "/cards/yoko-geri.png" },
    { category: "Golpes", japanese: "Mawashi geri", meaning: "Chute circular", imageUrl: "/cards/yoko-geri.png" },
    /* { category: "Golpes", japanese: "Ushiro mawashi geri", meaning: "Chute circular giratório para trás", imageUrl: "/cards/yoko-geri.png" }, */
    { category: "Golpes", japanese: "Hiza geri", meaning: "Joelhada", imageUrl: "/cards/hiza-geri.png" },
    { category: "Golpes", japanese: "Shuto uchi", meaning: "Golpe de mão aberta", imageUrl: "/cards/shuto-uchi.png" },
    { category: "Golpes", japanese: "Teisho uchi", meaning: "Golpe com a palma da mão", imageUrl: "/cards/teisho-uchi.png" },
    { category: "Golpes", japanese: "Uraken uchi", meaning: "Golpe com dorso do punho", imageUrl: "/cards/uraken-uchi.png" },
    { category: "Golpes", japanese: "Tetsui uchi", meaning: "Golpe com a lateral do punho", imageUrl: "/cards/uraken-uchi.png" },

    // =========================
    // POSIÇÕES
    // =========================
    { category: "Posições", japanese: "Heiko dachi", meaning: "Posição paralela", imageUrl: "/cards/heiko-dachi.png" },
    { category: "Posições", japanese: "Musubi dachi", meaning: "Pés juntos (posição de cumprimento)", imageUrl: "/cards/musubi-dachi.png" },
    { category: "Posições", japanese: "Zenkutsu dachi", meaning: "Base avançada / frontal", imageUrl: "/cards/oi-zuki.png" },
    { category: "Posições", japanese: "Kokutsu dachi", meaning: "Base recuada", imageUrl: "/cards/kokutsu-dachi.png" },
    { category: "Posições", japanese: "Kiba dachi", meaning: "Base do cavalo", imageUrl: "/cards/kiba-dachi.png" },
    /* { category: "Posições", japanese: "Neko ashi dachi", meaning: "Base do gato" },
    { category: "Posições", japanese: "Fudo dachi", meaning: "Base enraizada / imóvel", imageUrl: "/cards/oi-zuki.png" },
    { category: "Posições", japanese: "Sanchin dachi", meaning: "Base de três pontos / tensão" }, */
    { category: "Posições", japanese: "Shiko dachi", meaning: "Base larga (sumô / treino de força)", imageUrl: "/cards/kokutsu-dachi.png" },
    /* { category: "Posições", japanese: "Hangetsu dachi", meaning: "Base meia-lua / meio círculo" }, */

    // =========================
    // NÚMEROS
    // =========================
    { "category": "Números", "japanese": "Ichi", "meaning": "Um", "imageUrl": "/cards/numbers/ichi.png" },
    { "category": "Números", "japanese": "Ni", "meaning": "Dois", "imageUrl": "/cards/numbers/ni.png" },
    { "category": "Números", "japanese": "San", "meaning": "Três", "imageUrl": "/cards/numbers/san.png" },
    { "category": "Números", "japanese": "Yon", "meaning": "Quatro", "imageUrl": "/cards/numbers/yon.png" },
    { "category": "Números", "japanese": "Go", "meaning": "Cinco", "imageUrl": "/cards/numbers/go.png" },
    { "category": "Números", "japanese": "Roku", "meaning": "Seis", "imageUrl": "/cards/numbers/roku.png" },
    { "category": "Números", "japanese": "Nana", "meaning": "Sete", "imageUrl": "/cards/numbers/nana.png" },
    { "category": "Números", "japanese": "Hachi", "meaning": "Oito", "imageUrl": "/cards/numbers/hachi.png" },
    { "category": "Números", "japanese": "Kyu", "meaning": "Nove", "imageUrl": "/cards/numbers/kyu.png" },
    { "category": "Números", "japanese": "Juu", "meaning": "Dez", "imageUrl": "/cards/numbers/juu.png" },
    { "category": "Números", "japanese": "Juu-Ichi", "meaning": "Onze", "imageUrl": "/cards/numbers/juu-ichi.png" },
    { "category": "Números", "japanese": "Juu-Ni", "meaning": "Doze", "imageUrl": "/cards/numbers/juu-ni.png" },
    { "category": "Números", "japanese": "Juu-San", "meaning": "Treze", "imageUrl": "/cards/numbers/juu-san.png" },
    { "category": "Números", "japanese": "Juu-Yon", "meaning": "Quatorze", "imageUrl": "/cards/numbers/juu-yon.png" },
    { "category": "Números", "japanese": "Juu-Go", "meaning": "Quinze", "imageUrl": "/cards/numbers/juu-go.png" },
    { "category": "Números", "japanese": "Juu-Roku", "meaning": "Dezesseis", "imageUrl": "/cards/numbers/juu-roku.png" },
    { "category": "Números", "japanese": "Juu-Nana", "meaning": "Dezessete", "imageUrl": "/cards/numbers/juu-nana.png" },
    { "category": "Números", "japanese": "Juu-Hachi", "meaning": "Dezoito", "imageUrl": "/cards/numbers/juu-hachi.png" },
    { "category": "Números", "japanese": "Juu-Kyu", "meaning": "Dezenove", "imageUrl": "/cards/numbers/juu-kyu.png" },
    { "category": "Números", "japanese": "Ni-Juu", "meaning": "Vinte", "imageUrl": "/cards/numbers/niju.png" }
  ];
}
