const mesaj="Merhaba, bu bir meaj modülüdür. Bu mesajı başka dosyalarda kullanmak için bu modülü dışa aktarıyoruz.";
module.exports= mesaj; //Bu kodda, mesaj adında bir değişken oluşturduk ve bu değişkene bir string değeri atadık.
//  Daha sonra, module.exports ile bu değişkeni dışa aktardık. Böylece, bu modülü başka dosyalarda kullanabiliriz. 
// Başka bir dosyada bu modülü kullanmak için require() fonksiyonunu kullanarak bu modülü içe aktarabiliriz. 
// Örneğin, const mesaj = require('./mesaj'); şeklinde bu modülü içe aktarabiliriz ve mesaj değişkenini kullanarak bu mesajı ekrana yazdırabiliriz.