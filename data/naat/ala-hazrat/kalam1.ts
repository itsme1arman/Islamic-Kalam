export type Naat = {
  id: number;
  title: string;
  poet: string;
  roman: string;
  urdu: string;
  hindi: string;
};

export const naats: Naat[] = [
  {
    id: 1,
    title: "Wah Kya Judo Karam Hai Shah-e-Batha Tera",
    poet: "Ala Hazrat Imam Ahmad Raza Khan",

    roman: `Waah kya jood-o-karam hai Shahe Batha tera
Nahi sunta hi nahi maangne wala tera

Dhaare chalte hain ata ke woh hai qatra tera
Taar-e-daaman hai woh jis par ke na chhinta tera`,

    urdu: `واہ کیا جود و کرم ہے شہِ بطحا تیرا
نہیں سنتا ہی نہیں مانگنے والا تیرا

دھارے چلتے ہیں عطا کے وہ ہے قطرہ تیرا
تارِ دامن ہے وہ جس پر کہ نہ چھینٹا تیرا`,

    hindi: `वाह क्या जूद-ओ-करम है शहे बत्हा तेरा
नहीं सुनता ही नहीं माँगने वाला तेरा

धारे चलते हैं अता के वो है क़तरा तेरा
तार-ए-दामन है वो जिस पर कि न छींटा तेरा`
  }
];
