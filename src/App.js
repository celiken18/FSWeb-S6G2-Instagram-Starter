/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, { useState } from "react";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";

// sahteVeri'yi import edin
import sahteVeri from "./sahte-veri";

import "./App.css";

const App = () => {
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  const [gonderilerData, setGonderilerData] = useState(sahteVeri);

  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
  const [aramaKriteri, setAramaKriteri] = useState("");

  const aramaFn = (text) => {
    setAramaKriteri(text);
    let aramaSonuclar = gonderilerData.filter();
    setGonderilerData(aramaSonuclar);
  };

  const gonderiyiBegen = (gonderiID) => {
    /*
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

	  "setGonderi" yi çağırın ve state ine "posts.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
     */
    gonderilerData.map((gonderi) => {
      gonderi.id === gonderiID && gonderi.likes++;
    });
    setGonderilerData(gonderilerData);
  };

  return (
    <div className="App">
      {/* AramaÇubuğu ve Gönderiler'i render etmesi için buraya ekleyin */}
      <AramaCubugu aramaKriteri={aramaKriteri} aramaFn={aramaFn} />
      <Gonderiler gonderiyiBegen={gonderiyiBegen} gonderiler={gonderilerData} />
      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer ihtiyaç varsa ekleyin! */}
    </div>
  );
};

export default App;
