useMemo: fonksiyonların ürettiği sonuçları önbellekte tutmaya yarar
react.memo: bileşnleri önbellekte tutmayay yarar
useCallback: fonksiyonların kendisini önbellekte tutmaya yarar.

react.memo fonksiyonları karşılaştıtrken sorun yaşadığında useCallback
bu açığı tamalar ve yeni fonksiyonlar oluşturlmasını önüne geçer birbirni
tamamlayan methodlar olarak tamamlayabilir.
