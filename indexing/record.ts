type anime = "conan" | "naruto" | "hunterxhunter";

type spesAnime = Record<anime, boolean>;

// interface spesAnime {
//     [key: anime]: string
//
// }

const animeSeru: spesAnime = {
    conan: true,
    naruto: false,
    hunterxhunter: true
}

Object.keys(animeSeru).map(key => {
    console.info(animeSeru[key as keyof typeof animeSeru])
})