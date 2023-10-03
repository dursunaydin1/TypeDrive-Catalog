    <h1>Araç Kataloğu React Projesi</h1>
    
    <p>Bu React projesi, bir araç kataloğunu görüntülemek ve filtrelemek için kullanılan bir web uygulamasını içerir. Proje, TypeScript kullanılarak geliştirilmiş ve Framer Motion animasyonları ile zenginleştirilmiştir.</p>
    
    <h2>Özellikler</h2>
    
    <h3>TypeScript Entegrasyonu</h3>
    <ul>
        <li><strong>Statiğe Tip Kontrolü:</strong> TypeScript, projenin tüm bileşenlerinde ve fonksiyonlarında statiğe tip kontrolü sağlar. Bu sayede kodun daha güvenli ve hata ayıklamasının daha kolay olmasını sağlar.</li>
        <li><strong>Tip Tanımları:</strong> Proje boyunca, veri yapılarının ve bileşenlerin tip tanımları yapılmıştır. Özellikle, veri tabanından alınan araçlar için <code>ICarProps</code> gibi özel türler kullanılmıştır.</li>
        <li><strong>Fonksiyon Parametreleri:</strong> Fonksiyonlar, alınması gereken parametrelerin türleri ile belirtilmiştir. Örneğin, bir filtreleme işlevi aşağıdaki gibi tanımlanmıştır:</li>
    </ul>
    
    <p>
function filterCarsByYear(year: number): ICarProps[] {
  // ...
}
    </p>
    
    <h3>Framer Motion Animasyonları</h3>
    <ul>
        <li><strong>Resim Animasyonları:</strong> Projede Framer Motion kütüphanesi kullanılarak resimler üzerinde çeşitli animasyonlar uygulanmıştır. Örneğin, resimlerin yavaşça yüklendiği veya modal penceresinin animasyonlarla açıldığı görülebilir.</li>
    </ul>
    
    <h3>Veri Tabanı Entegrasyonu</h3>
    <ul>
        <li><strong>Veri Çekme İşlemi:</strong> Projede, bir veri tabanından araç bilgileri çekme işlemi yapılmıştır. Bu işlem, verilerin nasıl getirileceği ve nasıl işleneceği konularında TypeScript ile güvence altına alınmıştır.</li>
    </ul>
    
    <h3>Filtreleme ve Arama</h3>
    <ul>
        <li><strong>Arama ve Filtreleme:</strong> Kullanıcılar, araçları marka, model, yıl ve yakıt tipine göre arayabilir ve filtreleyebilirler. TypeScript ile filtreleme işlemleri ve kullanıcı girişi doğrulamaları yapılmıştır.</li>
    </ul>
    
    <h2>Teknolojiler</h2>
    
    <ul>
        <li><strong>React:</strong> Kullanıcı arayüzünü oluşturmak için.</li>
        <li><strong>TypeScript:</strong> Projede statik tip kontrolü için.</li>
        <li><strong>Framer Motion:</strong> Animasyonlar için.</li>
        <li><strong>Veri Tabanı:</strong> Araç verilerini saklamak için.</li>
    </ul>

<a href="">Canlı Önizleme</a>
<img src=""/>

    

