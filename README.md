# Basework Studio Front-end Starter

## Clone this repository

```
$ git clone https://github.com/baseworkstudio/basework_starter.git
```

## Install all NPM packages

```
$ npm install
```

or

```
$ yarn
```

## Run gulp in your terminal

```
$ npm run dev
```

or

```
$ yarn dev
```

## Directory Structure

### Views

```text
views/
|-- layout/						      # Tüm sayfaların bağlı kalacağı, sayfaların ana hatlarını belirleyen sayfaların bulunacağı klasör
|	|-- layout.html           # Tüm sayfaların bağlı kalacağı sayfa
| |-- ...
|
|-- pages/                  # Sayfaların bulunacağı klasör
|	|-- index.html            # Anasayfa için geçerli olan sayfa
| |-- ...
|
|-- partials/               # Sayfa üstünde bulunan ve tekrar eden (Component olmayan) yapıların bulunacağı klasör
| |-- header.html           # Sayfanın üst alanı
| |-- footer.html           # Sayfanın alt alanı
| |-- ...
```

### SCSS

```text
src/scss/
|-- config/						        # Ayarlar, Değişkenler ve Fonksiyonlar
|	|-- _config.scss				    - Diğer config sayfalarının import olduğu sayfa
|	|-- _fonts.scss			        - font-faceleri içeren sayfa
|	|-- _mixins.scss
|	|-- variables
|	    |-- _typography.scss    - h, p, em, sub ve font-size ayarları
|	    |-- _colors.scss        - color variablelarını içeren sayfa
|	    |-- _spacing.scss       - margin ve padding tanımlamalarının içeren sayfa
|     |-- ...
|
|-- helpers/						      # Yardımcı dosyalar
|	|-- _normalize.scss				  - https://github.com/necolas/normalize.css
|	|-- _animations.scss
|	|-- _utilities.scss
| |-- ...
|
|-- vendors/						      # Eklentilere ait stil dosyaları
|	|-- ...                     - owl carousel, fancybox, swiper,
|
|-- components/						    # Tamamlayıcılar - Klasor yapisi kullanilabilir.
|	|-- _form.scss					    - button, textbox, checkbox, select gibi sitiller
|	|-- ...
|
|-- partials/						      # Global stil dosyaları
|	|-- _header.scss
|	|-- _footer.scss
|	|-- _sidebar.scss
|	|-- _hero.scss
|	|-- ...
|
|-- pages/						        # Sayfaya özel still tanımlamaları
|	|-- _home.scss
|	|-- _categories.scss
| |-- ...
```

### JavaScript

```text
src/js/
|-- components/						    # Tamamlayıcılar - Klasor yapisi kullanilabilir.
|	|-- animations.js           # Site üzerinde kullanılan animasyonlar
| |-- form.js                 # masked-input plugininin kullanıldığı dosya
| |-- scroll.js               # scroll eventlerini tetiklemek için oluşturulan example dosyası
| |-- social-media-share.js   # sosyal medya üzerinde paylaşım yapmamızı sağlayan özel olarak kodladığımız fonksiyonların bulunduğu sayfa
| |-- ...
|
|-- plugins/						      # Proje içerisinde kullanılan ekstra pluginler
|	|-- masked-input.js.        # Input'lara mask özelliğini eklememizi sağlayan plugin
| |-- ...
|
|-- index.js                  # Tüm bu oluşturduğumuz fonksiyonları bir arada toplayacağımız sayfa.
```
