ng add @angular/material@19
ng generate @angular/material:theme-color

ng generate @angular/material:theme-color

ng g c Home
ng g c AboutUs
ng g c Services
ng g c ourTeam
ng g c ContactUs
ng g c PageNotFound
ng g c navbar
ng g c footer
ng g c enquire
ng g c ImageCarousel
ng g service ImageCarousel
ng g service clinic
ng g c About-Us-summary
ng g c our-team-summary
ng g c services-summary
ng g c contact-us-summary
ng g c our-team-detail
ng g c profile-card
ng g c service-card
ng g c button-contact-enquire
ng g c map
ng g c breadcrumb

ng generate environments
ng g c demomap
ng g service Profile
ng g service Services

json-server --watch db.json
ng serve

npm install @angular/google-maps
ng generate component components/buttons

ng generate component components/buttons/button-shared
ng generate component components/buttons/button-home
ng generate component components/buttons/button-about-us
ng generate component components/buttons/button-our-team
ng generate component components/buttons/button-services
ng generate component components/buttons/button-enquire
ng generate component components/buttons/button-contact-us

ng generate component components/Header
ng generate component sitemap
ng g interface breadcrumb

ng generate component banner-logo
ng generate component map-static
ng generate component banner-contact

#<a href="https://www.flaticon.com/free-icons/thyroid-gland" title="thyroid-gland icons">Thyroid-gland icons created by Vitaly Gorbachev - Flaticon</a>
#<a href="https://www.flaticon.com/free-icons/testies" title="testies icons">Testies icons created by HAJICON - Flaticon</a>
#<a href="https://www.flaticon.com/free-icons/hypothalamus" title="hypothalamus icons">Hypothalamus icons created by Slamlabs - Flaticon</a>


<button mat-button routerLink="/about-us" routerLinkActive="active" ariaCurrentWhenActive="page" >About Us</button>
<button mat-button routerLink="/our-team" routerLinkActive="active" ariaCurrentWhenActive="page">Our Team</button>
<button mat-button routerLink="/services" routerLinkActive="active" ariaCurrentWhenActive="page">Services</button>
<button mat-button routerLink="/contact-us" routerLinkActive="active" ariaCurrentWhenActive="page">Contact Us</button>
<button mat-flat-button color="primary" routerLink="/enquire" >Enquire</button>
