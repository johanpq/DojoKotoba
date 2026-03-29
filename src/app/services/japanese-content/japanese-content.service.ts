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
    { category: "Comandos", japanese: "Seiretsu", meaning: "Alinhar-se / formar fila", imageUrl: "/cards-webp/comandos/seiretsu.webp" },
    { category: "Comandos", japanese: "Naore", meaning: "Voltar à posição normal", imageUrl: "/cards-webp/comandos/naore.webp" },
    { category: "Comandos", japanese: "Yasume", meaning: "Descansar", imageUrl: "/cards-webp/comandos/yasume.webp" },
    { category: "Comandos", japanese: "Kiotsuke", meaning: "Atenção", imageUrl: "/cards-webp/comandos/naore.webp" },
    { category: "Comandos", japanese: "Rei", meaning: "Cumprimento / reverência", imageUrl: "/cards-webp/comandos/rei.webp" },
    { category: "Comandos", japanese: "Shomen ni rei", meaning: "Cumprimento ao shomen (frente do dojo)", imageUrl: "/cards-webp/comandos/rei.webp" },
    { category: "Comandos", japanese: "Sensei ni rei", meaning: "Cumprimento ao instrutor", imageUrl: "/cards-webp/comandos/rei.webp" },
    { category: "Comandos", japanese: "Otagai ni rei", meaning: "Cumprimento entre os alunos", imageUrl: "/cards-webp/comandos/rei.webp" },
    { category: "Comandos", japanese: "Hajime", meaning: "Começar", imageUrl: "/cards-webp/comandos/Hajime.webp" },
    { category: "Comandos", japanese: "Yame", meaning: "Parar", imageUrl: "/cards-webp/comandos/yame.webp" },
    { category: "Comandos", japanese: "Mawatte", meaning: "Virar / dar meia-volta", imageUrl: "/cards-webp/comandos/mawatte.webp" },
    { category: "Comandos", japanese: "Tsuzukete", meaning: "Continuar", imageUrl: "/cards-webp/comandos/tsuzukete.webp" },
    { category: "Comandos", japanese: "Yoi", meaning: "Preparar / posição pronta", imageUrl: "/cards-webp/comandos/Yoi.webp" },
    { category: "Comandos", japanese: "Mokuso", meaning: "Meditar / concentrar-se", imageUrl: "/cards-webp/comandos/Mokuso.webp" },
    { category: "Comandos", japanese: "Kamaete", meaning: "Preparar para a técnica", imageUrl: "/cards-webp/comandos/Kamaete.webp" },
    { category: "Comandos", japanese: "Choku rei", meaning: "Saudação curta", imageUrl: "/cards-webp/comandos/choku-rei.webp" },

    // =========================
    // GOLPES
    // =========================
    { category: "Golpes", japanese: "Oi zuki", meaning: "Soco avançando", imageUrl: "/cards-webp/golpes/oi-zuki.webp" },
    { category: "Golpes", japanese: "Gyaku zuki", meaning: "Soco reverso", imageUrl: "/cards-webp/golpes/gyaku-zuki.webp" },
    { category: "Golpes", japanese: "Kizami zuki", meaning: "Soco rápido com a mão da frente", imageUrl: "/cards-webp/golpes/oi-zuki.webp" },
    { category: "Golpes", japanese: "Age zuki", meaning: "Soco ascendente", imageUrl: "/cards-webp/golpes/oi-zuki.webp" },
    { category: "Golpes", japanese: "Tate zuki", meaning: "Soco vertical", imageUrl: "/cards-webp/golpes/tate-zuki.webp" },
    { category: "Golpes", japanese: "Ura zuki", meaning: "Soco curto com a palma para cima", imageUrl: "/cards-webp/golpes/ura-zuki.webp" },
    { category: "Golpes", japanese: "Choku zuki", meaning: "Soco direto", imageUrl: "/cards-webp/golpes/choku-zuki.webp" },
    { category: "Golpes", japanese: "Kagi zuki", meaning: "Soco em gancho", imageUrl: "/cards-webp/golpes/kagi-zuki.webp" },
    { category: "Golpes", japanese: "Empi uchi", meaning: "Golpe de cotovelo", imageUrl: "/cards-webp/golpes/empi-uchi.webp" },

    /* CHUTES */
    { category: "Golpes", japanese: "Mae geri", meaning: "Chute frontal", imageUrl: "/cards-webp/chutes/mae-geri.webp" },
    { category: "Golpes", japanese: "Yoko geri", meaning: "Chute lateral", imageUrl: "/cards-webp/chutes/yoko-geri.webp" },
    { category: "Golpes", japanese: "Mawashi geri", meaning: "Chute circular", imageUrl: "/cards-webp/chutes/yoko-geri.webp" },
    /* { category: "Golpes", japanese: "Ushiro mawashi geri", meaning: "Chute circular giratório para trás", imageUrl: "/cards/yoko-geri.png" }, */
    { category: "Golpes", japanese: "Hiza geri", meaning: "Joelhada", imageUrl: "/cards-webp/chutes/hiza-geri.webp" },

    /* GOLPES */
    { category: "Golpes", japanese: "Shuto uchi", meaning: "Golpe de mão aberta", imageUrl: "/cards-webp/golpes/shuto-uchi.webp" },
    { category: "Golpes", japanese: "Teisho uchi", meaning: "Golpe com a palma da mão", imageUrl: "/cards-webp/golpes/teisho-uchi.webp" },
    { category: "Golpes", japanese: "Uraken uchi", meaning: "Golpe com dorso do punho", imageUrl: "/cards-webp/golpes/uraken-uchi.webp" },
    { category: "Golpes", japanese: "Tetsui uchi", meaning: "Golpe com a lateral do punho", imageUrl: "/cards-webp/golpes/uraken-uchi.webp" },

    // =========================
    // BASES
    // =========================
    { category: "Posições", japanese: "Seiza", meaning: "Sentar-se em posição formal", imageUrl: "/cards-webp/bases/seiza.webp" },
    { category: "Posições", japanese: "Heiko dachi", meaning: "Posição paralela", imageUrl: "/cards-webp/bases/heiko-dachi.webp" },
    { category: "Posições", japanese: "Musubi dachi", meaning: "Pés juntos (posição de cumprimento)", imageUrl: "/cards-webp/bases/musubi-dachi.webp" },
    { category: "Posições", japanese: "Zenkutsu dachi", meaning: "Base avançada / frontal", imageUrl: "/cards-webp/golpes/oi-zuki.webp" },
    { category: "Posições", japanese: "Kokutsu dachi", meaning: "Base recuada", imageUrl: "/cards-webp/bases/kokutsu-dachi.webp" },
    { category: "Posições", japanese: "Kiba dachi", meaning: "Base do cavalo", imageUrl: "/cards-webp/bases/kiba-dachi.webp" },
    /* { category: "Posições", japanese: "Neko ashi dachi", meaning: "Base do gato" },
    { category: "Posições", japanese: "Fudo dachi", meaning: "Base enraizada / imóvel", imageUrl: "/cards/oi-zuki.png" },
    { category: "Posições", japanese: "Sanchin dachi", meaning: "Base de três pontos / tensão" }, */
    { category: "Posições", japanese: "Shiko dachi", meaning: "Base larga (sumô / treino de força)", imageUrl: "/cards-webp/bases/kokutsu-dachi.webp" },
    /* { category: "Posições", japanese: "Hangetsu dachi", meaning: "Base meia-lua / meio círculo" }, */

    // =========================
    // NÚMEROS
    // =========================
    { "category": "Números", "japanese": "Ichi", "meaning": "Um", "imageUrl": "/cards-webp/numeros/ichi.webp" },
    { "category": "Números", "japanese": "Ni", "meaning": "Dois", "imageUrl": "/cards-webp/numeros/ni.webp" },
    { "category": "Números", "japanese": "San", "meaning": "Três", "imageUrl": "/cards-webp/numeros/san.webp" },
    { "category": "Números", "japanese": "Yon", "meaning": "Quatro", "imageUrl": "/cards-webp/numeros/yon.webp" },
    { "category": "Números", "japanese": "Go", "meaning": "Cinco", "imageUrl": "/cards-webp/numeros/go.webp" },
    { "category": "Números", "japanese": "Roku", "meaning": "Seis", "imageUrl": "/cards-webp/numeros/roku.webp" },
    { "category": "Números", "japanese": "Nana", "meaning": "Sete", "imageUrl": "/cards-webp/numeros/nana.webp" },
    { "category": "Números", "japanese": "Hachi", "meaning": "Oito", "imageUrl": "/cards-webp/numeros/hachi.webp" },
    { "category": "Números", "japanese": "Kyu", "meaning": "Nove", "imageUrl": "/cards-webp/numeros/kyu.webp" },
    { "category": "Números", "japanese": "Juu", "meaning": "Dez", "imageUrl": "/cards-webp/numeros/juu.webp" },
    { "category": "Números", "japanese": "Juu-Ichi", "meaning": "Onze", "imageUrl": "/cards-webp/numeros/juu-ichi.webp" },
    { "category": "Números", "japanese": "Juu-Ni", "meaning": "Doze", "imageUrl": "/cards-webp/numeros/juu-ni.webp" },
    { "category": "Números", "japanese": "Juu-San", "meaning": "Treze", "imageUrl": "/cards-webp/numeros/juu-san.webp" },
    { "category": "Números", "japanese": "Juu-Yon", "meaning": "Quatorze", "imageUrl": "/cards-webp/numeros/juu-yon.webp" },
    { "category": "Números", "japanese": "Juu-Go", "meaning": "Quinze", "imageUrl": "/cards-webp/numeros/juu-go.webp" },
    { "category": "Números", "japanese": "Juu-Roku", "meaning": "Dezesseis", "imageUrl": "/cards-webp/numeros/juu-roku.webp" },
    { "category": "Números", "japanese": "Juu-Nana", "meaning": "Dezessete", "imageUrl": "/cards-webp/numeros/juu-nana.webp" },
    { "category": "Números", "japanese": "Juu-Hachi", "meaning": "Dezoito", "imageUrl": "/cards-webp/numeros/juu-hachi.webp" },
    { "category": "Números", "japanese": "Juu-Kyu", "meaning": "Dezenove", "imageUrl": "/cards-webp/numeros/juu-kyu.webp" },
    { "category": "Números", "japanese": "Ni-Juu", "meaning": "Vinte", "imageUrl": "/cards-webp/numeros/niju.webp" }
  ];
}
